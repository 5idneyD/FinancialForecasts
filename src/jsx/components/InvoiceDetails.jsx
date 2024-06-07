import React from "react";
import { ReactDOM } from "react";

export default function InvoiceDetails() {
	return (
		<form method="post">
			<div className="adminBody">
				<div>
					<input type="name" name="vat_number" placeholder="VAT Number" required="true" />
				</div>

				<div>
					<input type="email" name="email" placeholder="Email To Include" required="true" />
				</div>

				<div>
					<button type="submit" name="invoiceDetailsForm">
						Submit
					</button>
				</div>
			</div>
		</form>
	);
}
