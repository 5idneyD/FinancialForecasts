import React from "react";
import { ReactDOM } from "react";
import Icon from "@mdi/react";
import { mdiInformationOutline } from "@mdi/js";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function RemoveUser() {
	return (
		<div>
			<div id="adminSection">
				<div>
					<div>
						<input
							type="name"
							name="nominal"
							placeholder="Nominal Code"
							minlength="5"
							maxlength="5"
							aria-required="true"
						/>
					</div>
				</div>
				<div>
					<div>
						<input type="name" name="accountName" placeholder="Account Name" aria-required="true" />
					</div>
				</div>
				<div>
					<div>
						<button type="submit" name="addNominalForm">
							Add Nominal Account
						</button>
						<div id="nominalGuide">
							<ul>
								<li>
									<br />
									<b>
										<u>Nominal Code Guide</u>
									</b>
									<Tooltip
										title="Nominal Accounts must be split following this guide.
													For example, Revenue accounts must start with a 1, Assets on the balance sheet must start with a 6 etc...">
										<Icon
											path={mdiInformationOutline}
											size={1}
											color={window.getComputedStyle(document.body).getPropertyValue("--dark")}
										/>
									</Tooltip>
								</li>
								<li>
									Revenue: 1
									<Tooltip title="e.g. Contract Revenue, Ad-Hoc Revenue">
										<Icon
											path={mdiInformationOutline}
											// title="i"
											size={1}
											// horizontal
											// vertical
											// rotate={180}
											color={window.getComputedStyle(document.body).getPropertyValue("--dark")}
											// spin
										/>
									</Tooltip>
								</li>
								<li>
									Direct Costs: 2
									<Tooltip title="e.g. Equipment, Fuel, Clothing, Travel">
										<Icon
											path={mdiInformationOutline}
											size={1}
											color={window.getComputedStyle(document.body).getPropertyValue("--dark")}
										/>
									</Tooltip>
								</li>
								<li>
									Overheads: 3
									<Tooltip title="e.g. Rent, Salaries, Electricity">
										<Icon
											path={mdiInformationOutline}
											size={1}
											color={window.getComputedStyle(document.body).getPropertyValue("--dark")}
										/>
									</Tooltip>
								</li>
								<li>
									Investing: 4
									<Tooltip title="e.g. Purchase of physical assets, sale of securities, purchase of securities">
										<Icon
											path={mdiInformationOutline}
											size={1}
											color={window.getComputedStyle(document.body).getPropertyValue("--dark")}
										/>
									</Tooltip>
								</li>
								<li>
									Financing: 5
									<Tooltip title="e.g. Tax, interest, depreciation, amortisation">
										<Icon
											path={mdiInformationOutline}
											size={1}
											color={window.getComputedStyle(document.body).getPropertyValue("--dark")}
										/>
									</Tooltip>
								</li>
								<li>
									Assets: 6
									<Tooltip title="e.g. Accrued Revenue, Bank Account, Fixed Assets">
										<Icon
											path={mdiInformationOutline}
											size={1}
											color={window.getComputedStyle(document.body).getPropertyValue("--dark")}
										/>
									</Tooltip>
								</li>
								<li>
									Liabilities: 7
									<Tooltip title="e.g. Accrued Costs, Tax Liabilities">
										<Icon
											path={mdiInformationOutline}
											size={1}
											color={window.getComputedStyle(document.body).getPropertyValue("--dark")}
										/>
									</Tooltip>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
