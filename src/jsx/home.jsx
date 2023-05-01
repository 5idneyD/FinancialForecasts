import React from "react";
import { ReactDOM } from "react";
import * as ReactDOMClient from "react-dom/client";
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuItemOption,
	MenuGroup,
	MenuOptionGroup,
	MenuDivider,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

function App(props) {
	return (
		<ChakraProvider>
			<div>
				{/* This is a button fixed in the bottom right corner that pops user to the top of the screen */}
				<a href="#first">
					<button id="goToTopButton">Go To Top</button>
				</a>
				{/* There are 5 main sections, each with inner content */}
				<div id="first">
					<div id="heading">
						<img src={props.logoImg} alt="No Variance Logo" />

						<div id="navbar-container">
							<div id="navbar">
								<div className="navbar-option">
									<a href="#aboutUs">
										<p>About Us</p>
									</a>
								</div>
								<div className="navbar-option">
									<a href="#third">
										<p>Our Services</p>
									</a>
								</div>
								<div className="navbar-option">
									<a href="#fourth">
										<p>Preview</p>
									</a>
								</div>
								<div className="navbar-option">
									<a href="#fifth">
										<p>Contact Us</p>
									</a>
								</div>
								<div className="navbar-option">
									<a href="login">
										<p>Log In</p>
									</a>
								</div>
								<div className="navbar-option">
									<a href="signup">
										<p>Sign Up</p>
									</a>
								</div>
							</div>
						</div>
						<div id="mobile-navbar-container">
							<Menu bg="#272624">
								<MenuButton
									ml="37.75vw"
									mt="20%"
									bg="#272624"
									border="2px solid rgb(230, 183, 122)"
									color="rgb(230, 183, 122)"
									as={Button}>
									Menu
								</MenuButton>
								<MenuList>
									<MenuItem as="a" href="#aboutUs">
										<p>About Us</p>
									</MenuItem>
									<MenuItem as="a" href="#third">
										<p>Our Services</p>
									</MenuItem>
									<MenuItem as="a" href="#fourth">
										<p>Preview</p>
									</MenuItem>
									<MenuItem as="a" href="#fifth">
										<p>Contact Us</p>
									</MenuItem>
									<MenuItem as="a" href="login">
										<p>Log In</p>
									</MenuItem>
									<MenuItem as="a" href="signup">
										<p>Sign Up</p>
									</MenuItem>
								</MenuList>
							</Menu>
						</div>
					</div>
					<div id="title-container">
						<p id="title">No Variance</p>
						<h1>
							All-In-One Accounting Software,
							<br /> designed by accountants,
							<br /> for accountants.
						</h1>
					</div>
				</div>
				<div id="second">
					<div id="aboutUs">
						<h3>About Us</h3>
						<p>
							No Variance is an accounting software hosted online that provides all basic business
							services that are expected to come with accounting software. This software was developed in
							2023, meaning all our abilities have been developed using modern technology, up-to-date
							features and extremely high-levels of security.
						</p>
					</div>
				</div>
				{/* <img src={props.buildingImg} alt="building" /> */}
				<div className="parallax" style={{backgroundImage:  `url(${props.buildingImg})` }}></div>
				<div id="third">
					<h3>Our Services</h3>
					<div id="services">
						<div className="service" id="first-service">
							<div className="service-head">
								<p>Invoicing</p>
							</div>
							<div className="service-content">
								<p>
									You can post both purchase invoices and sales invoices, allocating each invoice to
									specific suppliers or customers. You will also have the ability to email any sales
									invoices to your customers as soon as you click on post, saving a lot of time and
									effort. You can use our default vat tools as weel, calculating what the VAT will be
									as soon as you enter the net value on each row. This tool can be disabled if normal
									VAT rules do not apply.
								</p>
							</div>
						</div>
						<div className="service">
							<div className="service-head">
								<p>Reports</p>
							</div>
							<div className="service-content">
								<p>
									You can view a wide range of reports which are automtaically updated as soon as an
									invoice or journal is posted. These reports include a P&L, Balance Sheet & Trial
									Balance. These reports can catch different time-frames if you'd like, such as the
									previous month's numbers, or the same period 12 months ago. You can also export
									different reports to excel, if you would like to do some of your own analysis and
									create your own reports.
								</p>
							</div>
						</div>
						<div className="service">
							<div className="service-head">
								<p>Analysis</p>
							</div>
							<div className="service-content">
								<p>
									You will also be able to analyse different areas of the business, such as your
									current aged debt, complete bank reconciliations and view cash flows, both past and
									present. Using this software will help you understand your business in a more
									detailed way, which is essential to running successful businesses.
								</p>
							</div>
						</div>
						<div className="service">
							<div className="service-head">
								<p>Admin</p>
							</div>
							<div className="service-content">
								<p>
									You will also take control of the admin side of your accounts. You can add and
									remove users, add new nominal accounts, and close the current period. You will also
									be able to assign different admin permission levels to different acounts, keeping
									your company secure. Users will also be able to personalise the theme for their own
									accounts, allowing for anybody with visual difficulties to improve their experience.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div id="fourth">
					<h3>Example</h3>
					<h2>
						Why don't you have a look and see what the experience is like?
						<br />
						You can log-in to an exmaple account and see all the features No Variance has. <br />
						Use the following details to{" "}
						<a href="login" style={{ color: "white", textDecoration: "underline" }}>
							log-in
						</a>{" "}
						and see what you would be getting: <br />
						<span className="example">
							email: example@basicaccounting.co.uk <br />
							password: p123
						</span>
					</h2>
				</div>
				<div id="fifth">
					<h3>Email address: admin@novariance.com</h3>
					<h3>Location: England, United Kingdom</h3>
				</div>
			</div>
		</ChakraProvider>
	);
}

const container = document.querySelector("#root");
const root = ReactDOMClient.createRoot(container);
root.render(<App buildingImg={window.buildingPath} logoImg={window.logoPath} />);
