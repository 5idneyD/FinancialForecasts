import { ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { ReactDOM } from "react";
import * as ReactDOMClient from 'react-dom/client';

function List() {
	return (
		<UnorderedList>
			<ListItem>Post Invoices for Customers & Suppliers</ListItem>
			<ListItem>Post Journals</ListItem>
			<ListItem>Set up reversing journals</ListItem>
			<ListItem>Email invoices out to customers as soon as they are posted in seconds</ListItem>
			<ListItem>View your monthly and YTD P&L</ListItem>
			<ListItem>Add a budget</ListItem>
			<ListItem>Compare your P&L to your budget</ListItem>
			<ListItem>View your up-to-date Balance Sheet</ListItem>
			<ListItem>Download many different reports</ListItem>
			<ListItem>Filter reports online by customer/supplier, period, year & nominal account</ListItem>
			<ListItem>Add as many users as you need</ListItem>
			<ListItem>Give different users different permissions</ListItem>
			<ListItem>Personalise each users account with their own colours</ListItem>
		</UnorderedList>
	);
}

const container = document.getElementById('list');
const root = ReactDOMClient.createRoot(container);
root.render(<List />);

