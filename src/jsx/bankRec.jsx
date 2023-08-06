import React from "react";
import { ReactDOM, useState } from "react";
import * as ReactDOMClient from "react-dom/client";

function App(props) {

	arr = [];
	Object.keys(invoices).forEach(function (key) {
		arr.push(invoices[key]);
	});

        function buttonColor(e){
            let other;
            if (e.target.id == "B1"){
                other = "B2";
            } else {
                other = "B1"
            };
            let b = document.querySelector("#" + e.target.id);
            let other_b = document.querySelector("#" + other);
            b.style.backgroundColor = "var(--fontColor)";
	 		b.style.color = "var(--primary)";
            other_b.style.backgroundColor = "var(--primary)";
            other_b.style.color = "var(--fontColor)";
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
			<div id="bankRecTable" style={{ marginTop: "4vh" }}>
				<div className="bankRecRow">Invoice Type</div>
				<div className="bankRecRow">Client</div>
				<div className="bankRecRow">Invoice No.</div>
				<div className="bankRecRow">Total Value</div>
				<div className="bankRecRow">Include</div>
				{arr.map((a) => (
					<>
						<div className="bankRecRow">{a[1]}</div>
						<div className="bankRecRow">{a[2]}</div>
						<div className="bankRecRow">{a[3]}</div>
						<div className="bankRecRow">{a[5]}</div>
						<div className="bankRecRow">
							<div className="checkbox"></div>
						</div>
					</>
				))}
			</div>
		</div>
	);
}

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
root.render(<App name="Unpaid Invoices" />);
