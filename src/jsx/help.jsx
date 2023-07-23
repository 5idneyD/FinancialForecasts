import React from "react";
import { ReactDOM } from "react";
import * as ReactDOMClient from "react-dom/client";

function App() {
	function toggle(id) {
		var div = document.getElementById(id + "a");
		div.style.display = div.style.display == "block" ? "none" : "block";
	}

	return (
		<>
			<div class="body-node" >
				<div id="first" classList="helpHead" onClick={(e) => toggle(e.target.id)} className="helpHead">
					How to Add a User
				</div>
				<div id="firsta" className="helpBody">
					<p>
						Go to the admin page (in 'Other') and, if you have permission, you will see an option to add a
						new user.
						<br />
						If you don't see this option, you may not have permission to perform this task.
						<br />
						Please contact somebody who does have permission.
					</p>
				</div>
			</div>
			<div className="body-node" >
				<div id="second" classList="helpHead" onClick={(e) => toggle(e.target.id)} className="helpHead">
					How to close a period
				</div>
				<div id="seconda" className="helpBody">
					<p>
						Go to the admin page (in 'Other') and, if you have permission, you will see an option to close
						the current period.
						<br />
						If you do not see this option, you may not have permission to perform this task.
						<br />
						Please contact somebody who does have permission.
					</p>
				</div>
			</div>
			<div className="body-node" >
				<div id="third" classList="helpHead" onClick={(e) => toggle(e.target.id)} className="helpHead">
					How to Reverse Journals
				</div>
				<div id="thirda" className="helpBody">
					<p>
						When posting the original journal, there will be dropdown menus in the top left corner.
						<br />
						The fourth option is called 'Reverse'. Open this drop down menu and select yes.
						<br />
						You can then go ahead and post this journal. The reversing journal will be added to the 'batch'.
						<br />
						Once you have closed the period, you can go to the batched reversals which are saved in the
						<br />
						'Batched Reversals' tab in Financials. You can click on Post Reversals which will post all
						reversing journals.
					</p>
				</div>
			</div>
			<div className="body-node" >
				<div id="fourth" classList="helpHead" onClick={(e) => toggle(e.target.id)} className="helpHead">
					What are permission levels
				</div>
				<div id="fourtha" className="helpBody">
					<p>
						There are 3 permission levels available
						<br />
						They determine what each user can do in terms of admin rights
						<br />
						'Advanced Admin' can do everything
						<br />
						'Basic Admin' cannot add or remove users
						<br />
						'Basic' has no admin rights
						<br />
						The point of this is to restrict users who managers do not want to have access to important
						admin changes
						<br />
						The admin level is set when an account is created
						<br />
						Currently, to change an admin level, an account needs to be removed and then re-created with the
						new level
						<br />
						We are working on a new feature to make updating admin levels easier
					</p>
				</div>
			</div>
			<div className="body-node" >
				<div id="fith" classList="helpHead" onClick={(e) => toggle(e.target.id)} className="helpHead">
					How to do a bank reconciliation
				</div>
				<div id="fitha" className="helpBody">
					<p>
						Bank reconciliations is the process of ensuring the correct amounts of money have been paid and
						recieved,
						<br />
						and to assign each new payment in your bank account with the outstanding payments in your
						accounting software
						<br />
						To complete this task using Basic Accounting, you will need to have a bank statement from your
						bank available
						<br />
						You need to go through each row on the bank statement, and search for the outstanding payment in
						the Bank Rec report on Basic Accounting
						<br />
						Once you have found the outstanding payment, you need to tick the checkbox, and this payment
						will be moved to the bank rec form
						<br />
						Once all payments on the bank statement have been ticked off on the bank rec repirt, you will
						need to submit the report
						<br />
						If you cannot find a payment that has been received on yopur bank statement (in your bank) on
						the bank rec report, this means the invoice has not been registered,
						<br />
						or, the invoice has already been paid, and this is a duplicate payment
						<br />
						If there are invoices on the bank rec report that are not on the bank statement, this means the
						invoices have not yet been paid.
						<br />
						Using Basic Accounting's Bank Rec reports, you can search the outstanding payments by using our
						client code filter, or the invoice number filter, or both!
						<br />
						You can see a list of the currently ticked off invoices by going to the "Current Rec" tab
						<br />
						Once you are happy with the current reconciliation, you can click on "Post Bank Rec", and the
						reonciliation will be saved
					</p>
				</div>
			</div>
		</>
	);
}

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
root.render(<App />);
