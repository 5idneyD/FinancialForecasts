import React from "react";
import { ReactDOM } from "react";

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
									<b>Nominal Code Guide</b>
								</li>
								<li>Revenue: 1</li>
								<li>Direct Costs: 2</li>
								<li>Overheads: 3</li>
								<li>Financing: 4</li>
								<li>Assets: 6</li>
								<li>Liabilities: 7</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
