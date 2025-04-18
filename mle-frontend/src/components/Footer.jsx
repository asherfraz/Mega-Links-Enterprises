import React from "react";
import { Link } from "react-router";

const Footer = () => {
	return (
		<footer className="text-gray-600 dark:bg-gray-900 body-font">
			<div className="container px-5 py-12 mx-auto flex md:items-center lg:items-right md:flex-row md:flex-nowrap flex-wrap flex-col ">
				<div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
					<a
						href
						className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
					>
						<img
							src="\mle_logo3.png"
							alt="Brand Logo"
							className={`w-14 h-14 text-white object-contain object-center  rounded-full`}
						/>
						<span className="ml-3 text-xl dark:text-white ">
							Mega Links Enterprises
						</span>
					</a>
					<p className="mt-2 text-sm text-gray-500   dark:text-gray-400 ">
						Govt. Contractor & General Order Supplier
					</p>
				</div>
				<div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center ">
					<div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
						<h2 className="title-font font-medium text-gray-900 dark:text-white tracking-widest text-sm mb-3">
							Quick Links
						</h2>
						<nav className="list-none mb-10">
							<li>
								<Link
									to={"/"}
									className="text-gray-600 hover:text-gray-800 dark:hover:text-white dark:text-gray-500"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									to={"/about"}
									className="text-gray-600 hover:text-gray-800 dark:hover:text-white dark:text-gray-500"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									to={"/about/porfolio"}
									className="text-gray-600 hover:text-gray-800 dark:hover:text-white dark:text-gray-500"
								>
									Portfolio
								</Link>
							</li>
							<li>
								<Link
									to={"/services"}
									className="text-gray-600 hover:text-gray-800 dark:hover:text-white dark:text-gray-500"
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									to={"/contact"}
									className="text-gray-600 hover:text-gray-800 dark:hover:text-white dark:text-gray-500"
								>
									Contact Us
								</Link>
							</li>
						</nav>
					</div>
					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 className="title-font font-medium text-gray-900 dark:text-white tracking-widest text-sm mb-3">
							CATEGORIES
						</h2>
						<nav className="list-none mb-10">
							<li>
								<a href className="text-gray-600 hover:text-gray-800">
									First Link
								</a>
							</li>
							<li>
								<a href className="text-gray-600 hover:text-gray-800">
									Second Link
								</a>
							</li>
							<li>
								<a href className="text-gray-600 hover:text-gray-800">
									Third Link
								</a>
							</li>
							<li>
								<a href className="text-gray-600 hover:text-gray-800">
									Fourth Link
								</a>
							</li>
						</nav>
					</div>
					{/* <div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
							CATEGORIES
						</h2>
						<nav className="list-none mb-10">
							<li>
								<a href className="text-gray-600 hover:text-gray-800">
									First Link
								</a>
							</li>
							<li>
								<a href className="text-gray-600 hover:text-gray-800">
									Second Link
								</a>
							</li>
							<li>
								<a href className="text-gray-600 hover:text-gray-800">
									Third Link
								</a>
							</li>
							<li>
								<a href className="text-gray-600 hover:text-gray-800">
									Fourth Link
								</a>
							</li>
						</nav>
					</div>
					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
							CATEGORIES
						</h2>
						<nav className="list-none mb-10">
							<li>
								<a href className="text-gray-600 hover:text-gray-800">
									First Link
								</a>
							</li>
							<li>
								<a href className="text-gray-600 hover:text-gray-800">
									Second Link
								</a>
							</li>
							<li>
								<a href className="text-gray-600 hover:text-gray-800">
									Third Link
								</a>
							</li>
							<li>
								<a href className="text-gray-600 hover:text-gray-800">
									Fourth Link
								</a>
							</li>
						</nav>
					</div> */}
				</div>
			</div>
			<div className="bg-gray-100 dark:bg-gray-800">
				<div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
					<p className="text-gray-500 text-sm text-center sm:text-left">
						© 2010 - Present &nbsp; Mega Links Enterprises — Developed by
						<Link
							to="https://asherfraz.com/"
							rel="noopener noreferrer"
							className="text-gray-600 ml-1"
							target="_blank"
						>
							@asherfraz
						</Link>
					</p>
					<span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
						<a href className="text-gray-500">
							<svg
								fill="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
							</svg>
						</a>
						<a href className="ml-3 text-gray-500">
							<svg
								fill="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
							</svg>
						</a>
						<a href className="ml-3 text-gray-500">
							<svg
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
								<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
							</svg>
						</a>
						<a href className="ml-3 text-gray-500">
							<svg
								fill="currentColor"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="0"
								className="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<path
									stroke="none"
									d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
								/>
								<circle cx="4" cy="4" r="2" stroke="none" />
							</svg>
						</a>
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
