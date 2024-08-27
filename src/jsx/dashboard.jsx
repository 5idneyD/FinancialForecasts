import React, { useState } from "react";
import { ReactDOM } from "react";
import * as ReactDOMClient from "react-dom/client";
import Explore from "./components/Explore";
import Users from "./components/Users";
import Terms from "./components/Terms";
import Posts from "./components/Posts";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function updateFormat(tab){
    document.querySelector(".page-tab.selected").classList = "page-tab";
    tab.classList = "page-tab selected"
}

function App() {
	const [returned, setReturned] = useState(<Explore />);
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
					<div class="page-tab selected" id="explore" onClick={(e) => (setReturned(<Explore/>), updateFormat(e.target))}>
						Explore
					</div>
					<div class="page-tab" id="users" onClick={(e) => (setReturned(<Users/>), updateFormat(e.target))}>
						Users
					</div>
					<div class="page-tab" id="posts" onClick={(e) => (setReturned(<QueryClientProvider client={queryClient}><Posts/></QueryClientProvider>), updateFormat(e.target))}>
						Posts
					</div>
					<div class="page-tab" id="terms" onClick={(e) => (setReturned(<Terms/>), updateFormat(e.target))}>
						T&Cs
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
