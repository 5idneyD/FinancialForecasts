import React from "react";
import { ReactDOM } from "react";

export default function EditUser(props) {
	return (
		<form method="post">
			<div className="adminBody">
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
					<button type="submit" name="editUserForm">
						Edit User
					</button>
					{props.message}
				</div>
				
			</div>
		</form>
	);
}
