import React from "react";
import { ReactDOM } from "react";
import Icon from "@mdi/react";
import { mdiInformationOutline } from "@mdi/js";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function ChartOfAccounts() {
	return (
		<form method="post" onsubmit="javascript: return confirm('Do you really want to submit the form?');">
			<input type="text" style={{display: "none"}} value="addNominalForm" name="formName"/>
			<div className="adminBody">
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

				<div>
					<input type="name" name="accountName" placeholder="Account Name" aria-required="true" />
				</div>

				<div>
					<button type="button" onClick={submitForm} name="addNominalForm">
						Add Nominal Account
					</button>
				</div>
				<div>
					<b>Nominal Code Guide</b>
					<Tooltip
						title="Nominal Accounts must be split following this guide.
													For example, Revenue accounts must start with a 1, Assets on the balance sheet must start with a 6 etc...">
						<Icon
							path={mdiInformationOutline}
							size={1}
							color={window.getComputedStyle(document.body).getPropertyValue("--fontColor")}
						/>
					</Tooltip>
				</div>
				<div>
					Revenue: 1
					<Tooltip title="e.g. Contract Revenue, Ad-Hoc Revenue">
						<Icon
							path={mdiInformationOutline}
							// title="i"
							size={1}
							// horizontal
							// vertical
							// rotate={180}
							color={window.getComputedStyle(document.body).getPropertyValue("--fontColor")}
							// spin
						/>
					</Tooltip>
				</div>
				<div>
					Direct Costs: 2
					<Tooltip title="e.g. Equipment, Fuel, Clothing, Travel">
						<Icon
							path={mdiInformationOutline}
							size={1}
							color={window.getComputedStyle(document.body).getPropertyValue("--fontColor")}
						/>
					</Tooltip>
				</div>
				<div>
					Overheads: 3
					<Tooltip title="e.g. Rent, Salaries, Electricity">
						<Icon
							path={mdiInformationOutline}
							size={1}
							color={window.getComputedStyle(document.body).getPropertyValue("--fontColor")}
						/>
					</Tooltip>
				</div>
				<div>
					Investing: 4
					<Tooltip title="e.g. Purchase of physical assets, sale of securities, purchase of securities">
						<Icon
							path={mdiInformationOutline}
							size={1}
							color={window.getComputedStyle(document.body).getPropertyValue("--fontColor")}
						/>
					</Tooltip>
				</div>
				<div>
					Financing: 5
					<Tooltip title="e.g. Tax, interest, depreciation, amortisation">
						<Icon
							path={mdiInformationOutline}
							size={1}
							color={window.getComputedStyle(document.body).getPropertyValue("--fontColor")}
						/>
					</Tooltip>
				</div>
				<div>
					Assets: 6
					<Tooltip title="e.g. Accrued Revenue, Bank Account, Fixed Assets">
						<Icon
							path={mdiInformationOutline}
							size={1}
							color={window.getComputedStyle(document.body).getPropertyValue("--fontColor")}
						/>
					</Tooltip>
				</div>
				<div>
					Liabilities: 7
					<Tooltip title="e.g. Accrued Costs, Tax Liabilities">
						<Icon
							path={mdiInformationOutline}
							size={1}
							color={window.getComputedStyle(document.body).getPropertyValue("--fontColor")}
						/>
					</Tooltip>
				</div>
			</div>
		</form>
	);
}
