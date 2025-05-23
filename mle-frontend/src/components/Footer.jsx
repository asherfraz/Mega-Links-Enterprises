import React from "react";
import { Link } from "react-router";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="text-gray-600 bg-white   dark:bg-gray-900  body-font shadow-[inset_0_1px_0_0_#e5e7eb80] dark:shadow-[inset_0_1px_0_0_#96969660] rounded-tl-2xl rounded-tr-2xl">
			<div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col ">
				<div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
					<Link
						to={"/"}
						className="flex title-font font-medium items-center flex-col sm:flex-row md:justify-start justify-center text-gray-900"
					>
						<img
							src="\mle_logo3.png"
							alt="Brand Logo"
							className={`w-14 h-14 text-white object-contain object-center  rounded-full`}
						/>
						<div className="ml-3 md:ml-3 flex flex-col justify-center items-center sm:items-start ">
							<span className="text-xl dark:text-white whitespace-nowrap font-[inter]">
								Mega Links Enterprises
							</span>
							<p className="mt-1 text-sm text-gray-500  dark:text-gray-400 sm:whitespace-nowrap">
								Govt. Contractor & General Order Supplier
							</p>
						</div>
					</Link>
					<p className="lg:w-[400px]  mt-3 text-sm  text-gray-600  dark:text-gray-500 leading-relaxed ">
						Mega Links Enterprises is a leading engineering solutions provider
						in Pakistan, offering comprehensive contracting and supply services
						since 2010.
						{/* We specialize in delivering quality, efficiency, and innovation across diverse industrial sectors. */}
					</p>
				</div>
				<div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left lg:justify-end text-center ">
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
									to={"/project-requirement"}
									className="text-gray-600 hover:text-gray-800 dark:hover:text-white dark:text-gray-500"
								>
									Project Requirement
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
					<div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
						<h2 className="title-font font-medium text-gray-900 dark:text-white tracking-widest text-sm mb-3">
							Company
						</h2>
						<nav className="list-none mb-10">
							<li>
								<Link
									to={"/terms-and-conditions"}
									className="text-gray-600 hover:text-gray-800 dark:hover:text-white dark:text-gray-500"
								>
									Terms & Conditions
								</Link>
							</li>
							<li>
								<Link
									to={"/privacy-policy"}
									className="text-gray-600 hover:text-gray-800 dark:hover:text-white dark:text-gray-500"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									to={"/faq"}
									className="text-gray-600 hover:text-gray-800 dark:hover:text-white dark:text-gray-500"
								>
									FAQ
								</Link>
							</li>
						</nav>
					</div>
					{/* <div className="lg:w-1/4 md:w-1/2 w-full px-4">
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
					</div> */}
				</div>
			</div>
			<div className="bg-gray-100 dark:bg-gray-800">
				<div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
					<p className="text-gray-500 text-sm text-center sm:text-left">
						© {currentYear}&nbsp; Mega Links Enterprises — Developed by
						<a
							href="https://asherfraz.com/"
							rel="noopener noreferrer"
							className="text-gray-600 ml-1"
							target="_blank"
						>
							@asherfraz
						</a>
					</p>
					<span className="inline-flex sm:ml-auto sm:mt-0 mt-3 justify-center sm:justify-start">
						{/* Facebook */}
						{/* <Link
							to="https://facebook.com/"
							target="_blank"
							className="text-gray-500"
						>
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
						</Link> */}
						{/* Twitter */}
						{/* <Link
							to="https://twitter.com/"
							target="_blank"
							className="ml-3 text-gray-500"
						>
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
						</Link> */}
						{/* Instagram */}
						{/* <Link
							to="https://instagram.com/"
							target="_blank"
							className="ml-3 text-gray-500"
						>
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
						</Link> */}
						<a
							href="https://pk.linkedin.com/in/sarfraz-anjum-823293b5"
							target="_blank"
							className="ml-3 text-gray-500"
						>
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
