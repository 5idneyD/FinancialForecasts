import React from "react";
import { ReactDOM } from "react";
import { Alert } from "@chakra-ui/react";

export default function RemoveUser(props) {

	return (
		<div>
			<div id="adminSection">
				<div>
					<div>
						<p>Current Year: {props.year}</p>
					</div>
				</div>
				<div>
					<div>
						<p>Current Period: {props.period}</p>
					</div>
				</div>
				<div>
					<div>
						<button type="submit" name="closePeriodForm">
							Close Period
						</button>
					</div>
				</div>

				<input type="name" name="period" value="` + accounting_period + `" />
				<input type="name" name="year" value="` + accounting_year + `" />
			</div>
		</div>
	);
}
