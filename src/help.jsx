function App() {
	function toggle(id) {
		var div = document.getElementById(id + "a");
		div.style.display = div.style.display == "block" ? "none" : "block";
	}

	return (
		<div>
			<div id="first" onClick={(e) => toggle(e.target.id)} className="helpHead">
				How to Add a User
			</div>
			<div id="firsta" className="helpBody">
				<p>
					Go to the admin page (in 'Other') and, if you have permission, you will see an option to add a new
					user.
					<br />
					If you don't see this option, you may not have permission to perform this task.
					<br />
					Please contact somebody who does have permission.
				</p>
			</div>
			<div id="second" onClick={(e) => toggle(e.target.id)} className="helpHead">
				How to close a period
			</div>
			<div id="seconda" className="helpBody">
				<p>
					Go to the admin page (in 'Other') and, if you have permission, you will see an option to close the
					current period.
					<br />
					If you don't see this option, you may not have permission to perform this task.
					<br />
					Please contact somebody who does have permission.
				</p>
			</div>
			<div id="third" onClick={(e) => toggle(e.target.id)} className="helpHead">
				How to Reverse Journals
			</div>
			<div id="thirda" className="helpBody">
				<p>
					When posting the original journal, there will be dropdown menus in the top left corner.
					<br />
					The fourth option is called 'Reverse'. Open this drop down menu and select yes.
					<br/>
					You can then go ahead and post this journal. The reversing journal will be added to the 'batch'.
					<br/>
					Once you have closed the period, you can go to the batched reversals which are saved in the
					<br />
					 'Batched Reversals' tab in Financials. You can click on Post Reversals which will post all reversing journals.
				</p>
			</div>
			<div id="fourth" onClick={(e) => toggle(e.target.id)} className="helpHead">
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
					The point of this is to restrict users who managers do not want to have access to important admin changes
					<br />
					The admin level is set when an account is created
					<br />
					Currently, to change an admin level, an account needs to be removed and then re-created with the new level
					<br/>
					We are working on a new feature to make updating admin levels easier
				</p>
			</div>
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector("#root"));
