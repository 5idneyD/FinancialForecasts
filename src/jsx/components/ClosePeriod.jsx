import React from "react";
import { ReactDOM } from "react";
import { Alert } from "@chakra-ui/react";

export default function RemoveUser(props) {

	return (
		<form method="post">
			<div className="adminBody">
					<div>
						Current Year: {props.year}
					</div>
			
					<div>
						Current Period: {props.period}
					</div>
			
					<div>
						<button type="submit" name="closePeriodForm">
							Close Period
						</button>
					</div>
			

				<input type="name" name="period" value={props.period} style={{display: "none"}}/>
				<input type="name" name="year" value={props.year} style={{display: "none"}}/>
			</div>
		</form>
	);
}
