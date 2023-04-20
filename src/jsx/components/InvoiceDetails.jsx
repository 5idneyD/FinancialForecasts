import React from "react";
import { ReactDOM } from "react";

export default function RemoveUser() {
	return (
		<div>
			<div id="adminSection">
				<div>
					<div>
						<input type="name" name="vat_number" placeholder="VAT Number" aria-required="true" />
					</div>
				</div>
				<div>
					<div>
						<input type="email" name="email" placeholder="Email To Include" aria-required="true" />
					</div>
				</div>
				<div>
					<div>
						<button type="submit" name="invoiceDetailsForm">
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
