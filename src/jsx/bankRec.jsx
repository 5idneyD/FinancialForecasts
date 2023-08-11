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
		console.log(invoice)
		if (invoice.target.dataset.start == "True") {
			let newTable = document.querySelector("#newBankRecTable");
			let buttonId = invoice.target.id;
			let row = buttonId.split("_")[1];
			let cells = document.querySelectorAll(".bankRecRow");
			cells.forEach(function (c) {
				if (c.id.includes("_" + row + "_")) {
					
					newTable.appendChild(c);
				}
			})
			invoice.target.dataset.start = "False";
		} else {
			let oldTable = document.querySelector("#bankRecTable");
			let buttonId = invoice.target.id;
			let row = buttonId.split("_")[1];
			let cells = document.querySelectorAll(".bankRecRow");
			cells.forEach(function (c) {
				if (c.id.includes("_" + row + "_")) {
					oldTable.appendChild(c);
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
						<div className="bankRecRow" id={"row_" + row + "_type"}>
							{a[1]}
						</div>
						<div className="bankRecRow" id={"row_" + row + "_client"}>
							{a[2]}
						</div>
						<div className="bankRecRow" id={"row_" + row + "_invoiceNo"}>
							{a[3]}
						</div>
						<div className="bankRecRow" id={"row_" + row + "_value"}>
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

			<div
				id="newBankRecTable"
				style={{ marginTop: "4vh", display: showTable == "allInvoices" ? "none" : "grid" }}>
				<div className="bankRecRow">Invoice Type</div>
				<div className="bankRecRow">Client</div>
				<div className="bankRecRow">Invoice No.</div>
				<div className="bankRecRow">Total Value</div>
				<div className="bankRecRow">Include</div>
			</div>
		</div>
	);
}

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
root.render(<App name="Unpaid Invoices" />);
