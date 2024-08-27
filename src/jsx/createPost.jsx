import React, { useState } from "react";
import { ReactDOM } from "react";
import * as ReactDOMClient from "react-dom/client";
import NewPost from "./components/NewPost";



function updateFormat(tab){
    document.querySelector(".page-tab.selected").classList = "page-tab";
    tab.classList = "page-tab selected"
}

function App() {
	const [returned, setReturned] = useState(<NewPost />);
	return (
		<>
			<div class="heading">
				<div class="page-title">
					<h2>
						Financial <br />
						Forecasts
					</h2>
				</div>
				<div class="search-bar">
					<input type="text" name="search-text" placeholder="Search Tickers" />
				</div>
				<div class="page-tabs">
					<div class="page-tab selected" id="explore" onClick={(e) => (setReturned(<NewPost/>), updateFormat(e.target))}>
						New Post
					</div>
				</div>
			</div>
			<div class="page-display" id="page-display">
                {returned}
            </div>
		</>
	);
}

const container = document.querySelector(".body");
const adminRoot = ReactDOMClient.createRoot(container);
adminRoot.render(<App />);
