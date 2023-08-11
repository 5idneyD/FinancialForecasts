import React from "react";
import { ReactDOM, useState } from "react";
import * as ReactDOMClient from "react-dom/client";

function App(props) {
	// This creates an array of all the invoices for the first table
	// Reading the data from the jinja2 input in the html file
	arr = [];
	Object.keys(invoices).forEach(function (key) {
		arr.push(invoices[key]);
	});

	// This is to set row numbers on the invoice table
	let row = 1;

	// lThis is to set the starting value of all invoices selected
	// Starts on 0 and will increase/decrease when checboxes are clicked
	const [currentRecTotal, setCurrentRecTotal] = useState(0.0);
	const [numberOfRows, setNumberOfRows] = useState(0);

	// This changes the state of the page between showing all invoices
	// and invoices added to the current rec
	// The state changes when one of the top buttons is clicked on
	const [showTable, setTable] = useState("allInvoices");

	// This switches which button has been clicked on
	// The buttons switch colours between white and black
	// indicating which table is being viewed
	function buttonColor(e) {
		let other;
		if (e.target.id == "B1") {
			other = "B2";
		} else {
			other = "B1";
		}
		let b = document.querySelector("#" + e.target.id);
		let other_b = document.querySelector("#" + other);
		b.style.backgroundColor = "var(--fontColor)";
		b.style.color = "var(--primary)";
		other_b.style.backgroundColor = "var(--primary)";
		other_b.style.color = "var(--fontColor)";

		// change the state of the table to be showm
		if (showTable == "allInvoices") {
			setTable("currentRec");
		} else {
			setTable("allInvoices");
		}
	}

	function addToRec(invoice) {
		if (invoice.target.dataset.start == "True") {
			let newTable = document.querySelector("#newBankRecTable");
			let buttonId = invoice.target.id;
			let row = buttonId.split("_")[1];
			let cells = document.querySelectorAll(".bankRecRow");
			cells.forEach(function (c) {
				if (c.id.includes("_" + row + "_")) {
					if (c.id.includes("Value")) {
						setCurrentRecTotal(currentRecTotal + parseFloat(c.firstChild.value));
					}
					newTable.appendChild(c);
					setNumberOfRows(numberOfRows + 1);
				}
			});
			invoice.target.dataset.start = "False";
		} else {
			let oldTable = document.querySelector("#bankRecTable");
			let buttonId = invoice.target.id;
			let row = buttonId.split("_")[1];
			let cells = document.querySelectorAll(".bankRecRow");
			cells.forEach(function (c) {
				if (c.id.includes("_" + row + "_")) {
					if (c.id.includes("Value")) {
						setCurrentRecTotal(currentRecTotal - parseFloat(c.firstChild.value));
					}
					oldTable.appendChild(c);
					setNumberOfRows(numberOfRows - 1);
				}
			});

			invoice.target.dataset.start = "True";
		}
	}

	return (
		<div className="body-node" id="first" style={{ width: "75vw" }}>
			<div id="bankRecButtons">
				<button type="button" className="invoiceForm" id="B1" onClick={buttonColor}>
					Invoices
				</button>
				<button type="button" className="invoiceForm" id="B2" onClick={buttonColor}>
					Current Rec
				</button>
			</div>
			<br />

			<div id="bankRecTable" style={{ marginTop: "4vh", display: showTable == "allInvoices" ? "grid" : "none" }}>
				<div className="bankRecRow">Invoice Type</div>
				<div className="bankRecRow">Client</div>
				<div className="bankRecRow">Invoice No.</div>
				<div className="bankRecRow">Total Value</div>
				<div className="bankRecRow">Include</div>
				{arr.map((a) => (
					<>
						<div className="bankRecRow" id={"row_" + row + "_type"}> <input type="text" name={"row_" + row + "_type"} style={{display: "none"}} value={a[1]}/>
							{a[1]}
						</div>
						<div className="bankRecRow" id={"row_" + row + "_client"}><input type="text" name={"row_" + row + "_client"} style={{display: "none"}} value={a[2]}/>
							{a[2]}
						</div>
						<div className="bankRecRow" id={"row_" + row + "_invoiceNo"}><input type="text" name={"row_" + row + "_invoiceNo"} style={{display: "none"}} value={a[3]}/>
							{a[3]}
						</div>
						<div className="bankRecRow" id={"row_" + row + "_Value"}><input type="text" name={"row_" + row + "_value"} style={{display: "none"}} value={a[5]}/>
							{a[5]}
						</div>
						<div className="bankRecRow" id={"row_" + row + "_checkBox"}>
							<div
								className="checkbox"
								data-start="True"
								onClick={addToRec}
								id={"row_" + row + "_button"}></div>
						</div>
						<div style={{ display: "none" }}>{(row = row + 1)}</div>
					</>
				))}
			</div>
			<form method="post">
				<div
					id="newBankRecTable"
					style={{ marginTop: "4vh", display: showTable == "allInvoices" ? "none" : "grid" }}>
					<div className="bankRecRow">Invoice Type</div>
					<div className="bankRecRow">Client</div>
					<div className="bankRecRow">Invoice No.</div>
					<div className="bankRecRow">Total Value</div>
					<div className="bankRecRow">Remove</div>
				</div>
				Current Rec Total: {Math.round((currentRecTotal + Number.EPSILON) * 100) / 100}
				<br />
				<button className="invoiceForm" type="submit" style={{ width: "20%" }}>
					Submit Reconciliation
				</button>
				<input type="text" name="rows" style={{display: "none"}} value={numberOfRows}/>
			</form>
		</div>
	);
}

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
root.render(<App name="Unpaid Invoices" />);
