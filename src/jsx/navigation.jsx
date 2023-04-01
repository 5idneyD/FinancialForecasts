import React from "react";
import { ReactDOM } from "react";
import * as ReactDOMClient from 'react-dom/client';

function App() {
	return (
		<div id="navBar">
			<div></div>
			<div id="salesLedger" className="navOption" data-expanded="false">
				Sales Ledger
			</div>
			<div id="purchaseLedger" className="navOption" data-expanded="false">
				Purchase Ledger
			</div>
			<div id="financials" className="navOption" data-expanded="false">
				Financial
			</div>
			<div id="other" className="navOption" data-expanded="false">
				Other
			</div>
			<div></div>
		</div>
	);
}


const container = document.getElementById('nav');
const root = ReactDOMClient.createRoot(container);
root.render(<App />);