import React from "react";
import { ReactDOM } from "react";

export default function RemoveUser() {

	return (
		<form method="post">
			<div className="adminBody">
				<div>
					<input type="email" name="email" placeholder="user's email" required="true" />
				</div>

				<div>
					<input type="password" name="password" placeholder="admin password" required="true" />
				</div>

				<div>
					<button type="button" onClick={submitForm} name="removeUserForm">
						Remove User
					</button>
				</div>
			</div>
		</form>
	);
}
