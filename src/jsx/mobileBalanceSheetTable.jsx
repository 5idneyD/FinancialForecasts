import React from "react";
import { ReactDOM } from "react";
import * as ReactDOMClient from "react-dom/client";
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from "@chakra-ui/react";

function App(props) {
	let keys = Object.keys(bsData);

	return (

            
			<Table id="bSheetTable" className="report" variant="simple" style={{width: "40vw", minWidth: "500px"}}>
				<Thead>
					<Tr>
						<Th>Nominal Code</Th>
						<Th>Account Name</Th>
						<Th isNumeric>Debit</Th>
						<Th isNumeric>Credit</Th>
					</Tr>
				</Thead>
				<Tbody>
					{keys.map(function (e) {
						return (
							<>
								{bsData[e][1] > 0 ? (
									<Tr id={bsData[e][2]}  className={`${bsData[e][2]} table_row`}>
										<Td>{bsData[e][2]}</Td>
										<Td>{bsData[e][3]}</Td>
										<Td isNumeric>{bsData[e][1]}</Td>
										<Td isNumeric></Td>
									</Tr>
								) : (
									<Tr id={bsData[e][2]} className={`${bsData[e][2]} table_row`}>
										<Td>{bsData[e][2]}</Td>
										<Td>{bsData[e][3]}</Td>
										<Td isNumeric></Td>
										<Td isNumeric>{-bsData[e][1]}</Td>
									</Tr>
								)}
							</>
						);
					})}
                    <Tr id="netAssets" className="summaryRow">
                        <Td></Td>
                        <Td>Net Assets</Td>
                        <Td></Td>
                        <Td></Td>
                    </Tr>
				</Tbody>
				<Tfoot>
					<Tr></Tr>
				</Tfoot>
			</Table>
	);
}

const container = document.getElementById("balanceSheet");
const root = ReactDOMClient.createRoot(container);
root.render(<App />);
