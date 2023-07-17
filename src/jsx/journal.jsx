import React from "react";
import { ReactDOM } from "react";
import * as ReactDOMClient from "react-dom/client";

var references = document.querySelector("#references").dataset.references;
var new_number = Number(references);

function Journal() {
	const [debit, setDebit] = React.useState(0);
	const [credit, setCredit] = React.useState(0);
	const [count, setCount] = React.useState(1);
	const [rows, setRows] = React.useState([<Row key="1" number="1" />]);
	const [journalNumber, setJournalNumber] = React.useState(new_number);

	function Row(props) {
		return (
			<div className="invoiceRow" style={{gridTemplateColumns: " 5vw repeat(4, auto)"}}>
				<div>{props.number}</div>
				<div>
					<input type="invoice" name={props.number + "_nominal_code"}></input>
				</div>
				<div>
					<input type="invoice" name={props.number + "_description"}></input>
				</div>
				<div>
					<input
						type="invoice"
						className="debit"
						name={props.number + "_debit"}
						onChange={() => sumDebits()}></input>
				</div>
				<div>
					<input
						type="invoice"
						className="credit"
						name={props.number + "_credit"}
						onChange={() => sumCredits()}></input>
				</div>
			</div>
		);
	}

	function addRow() {
		setCount(count + 1);
		const a = count + 1;
		setRows(rows.concat(<Row key={a} number={a} />));
	}

	function sumDebits() {
		var debits = document.querySelectorAll(".debit");
		var debitTotal = 0;
		debits.forEach((debit) => {
			debitTotal += Number(debit.value);
		});
		setDebit(debitTotal);
	}

	function sumCredits() {
		var credits = document.querySelectorAll(".credit");
		var creditTotal = 0;
		credits.forEach((credit) => {
			creditTotal += Number(credit.value);
		});
		setCredit(creditTotal);
	}

	function checkBalancing() {
		if (debit - credit != 0) {
			document.querySelector("#submitButton").type = "button";
		} else {
			try {
				document.querySelector("#submitButton").type = "submit";
			} catch {}
		}
	}

	return (
		<>
			<div className="body-node" id="first">
				{/* Table Head */}
				<div className="invoice-head" id="journalHead">
					<div>Journal Number</div>
					<div>
						<input type="journal" name="journalNumber" defaultValue="Next" readOnly></input>
					</div>

					<div>Date</div>
					<div>
						<input type="date" name="journalDate" required></input>
					</div>

					<div>Description</div>
					<div>
						<input type="journal" name="journalDescription" required />
					</div>

					<div>Reverse</div>
					<div>
						<select type="journal" name="to_reverse" className="invoice">
							<option value="no" selected>
								No
							</option>
							<option value="yes">Yes</option>
						</select>
					</div>

					<div>Debit Total</div>
					<div>{debit}</div>

					<div>Credit Total</div>
					<div>{credit}</div>
				</div>

				{/* buttons */}
				<button type="button" className="invoiceForm" onClick={() => addRow()}>
					Add Row
				</button>
				<br />
				<button type="submit" className="invoiceForm" id="submitButton">
					Post Journal
				</button>
			</div>
			<div className="body-node" id="second">
				{/* Table Body */}
				<div className="invoice-body">
					<div className="invoiceRow" style={{gridTemplateColumns: " 5vw repeat(4, auto)"}}>
						<div className="invoice-header">Row</div>
						<div className="invoice-header">Nominal</div>
						<div className="invoice-header">Description</div>
						<div className="invoice-header">Debit</div>
						<div className="invoice-header">Credit</div>
					</div>
					<div id="bodyTable">{rows}</div>
				</div>
				<input name="number_of_rows" value={count} style={{ display: "none" }}></input>
				<input name="debitTotal" value={debit} onChange={checkBalancing()} style={{ display: "none" }}></input>
				<input
					name="creditTotal"
					value={credit}
					onChange={checkBalancing()}
					style={{ display: "none" }}></input>
			</div>
		</>
	);
}

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
root.render(<Journal />);
