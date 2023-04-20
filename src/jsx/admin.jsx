import React from "react";
import { ReactDOM } from "react";
import * as ReactDOMClient from "react-dom/client";
import { useState } from "react";
import AddUser from "./components/AddUser";
import RemoveUser from "./components/RemoveUser";
import InvoiceDetails from "./components/InvoiceDetails";
import ClosePeriod from "./components/ClosePeriod";
import ChartOfAccounts from "./components/ChartOfAccounts";

function App() {
	
    const [returned, setReturned] = useState(<AddUser/>)

	const accounting_year = document.querySelector("meta[name='data']").getAttribute("accounting_year");
	const accounting_period = document.querySelector("meta[name='data']").getAttribute("accounting_period");


	let buttons = document.querySelectorAll(".adminButton");
	buttons.forEach((e) => {
		e.addEventListener("click", function () {
            if (e.id == "addUserButton"){
             setReturned(<AddUser/>)
            } else if (e.id == "removeUserButton"){
                setReturned(<RemoveUser/>)
            } else if (e.id == "chartOfAccountsButton"){
                setReturned(<ChartOfAccounts/>)
            } else if (e.id == "invoiceDetailsButton"){
                setReturned(<InvoiceDetails/>)
            } else if (e.id == "closePeriodButton"){
                setReturned(<ClosePeriod year={accounting_year} period={accounting_period}/>)
            }
		});
	});

    return (
        <div>
            <p>{returned}</p>
        </div>
    )
}

const container = document.getElementById("body");
const root = ReactDOMClient.createRoot(container);
root.render(<App />);
