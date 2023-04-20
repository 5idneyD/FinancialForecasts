import React from "react";
import { ReactDOM } from "react";


export default function RemoveUser() {
	return (
		<div>
			<div id="adminSection">
				<div>
					<div>
						<input type="email" name="email" placeholder="user's email" aria-required="true" />
					</div>
				</div>
				<div>
					<div>
						<input type="password" name="password" placeholder="admin password" aria-required="true" />
					</div>
				</div>
				<div>
					<div>
						<button type="submit" name="removeUserForm">
							Remove User
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
