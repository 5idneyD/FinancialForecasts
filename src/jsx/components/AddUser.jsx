import React from "react";
import { ReactDOM } from "react";

export default function AddUser() {
	return (
		<form method="post">
			<input type="text" style={{display: "none"}} value="addUserForm" name="formName"/>
			<div className="adminBody">
				<div>
					<input type="text" name="name" placeholder="name" required="true" />
				</div>

				<div>
					<input type="email" name="email" placeholder="email" required="true" />
				</div>
				<div>
					<select name="adminLevel" class="adminLevelSelect">
						<option>Select Permission Level</option>
						<option value="1">Basic</option>
						<option value="2">Basic Admin</option>
						<option value="3">Advanced Admin</option>
					</select>
				</div>

				<div>
					<button type="submit" name="addUserForm">
						Add User
					</button>
				</div>
			</div>
		</form>
	);
}
