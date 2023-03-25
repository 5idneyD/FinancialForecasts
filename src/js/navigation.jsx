import React from "react";
import { ReactDOM } from "react";
import * as ReactDOMClient from 'react-dom/client';

function App() {
	return (
		<ul>
			<li id="salesLedgerMenu" className="menuHead">
				<a id="salesLedger" data-expanded="false">
					Sales Ledger
				</a>
				<br />
			</li>
			<li id="purchaseLedgerMenu" className="menuHead">
				<a id="purchaseLedger" data-expanded="false">
					Purchase Ledger
				</a>
				<br />
			</li>
			<li id="financialsMenu" className="menuHead">
				<a id="financials" data-expanded="false">
					Financials
				</a>
				 
				<br />
			</li>
			<li id="otherMenu" className="menuHead">
				<a id="other" data-expanded="false">
					Other
				</a>
				<br />
			</li>
		</ul>
	);
}


const container = document.getElementById('nav');
const root = ReactDOMClient.createRoot(container);
root.render(<App />);