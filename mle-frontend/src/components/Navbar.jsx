// import React from "react";
import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router";
import "./styles/Navbar.css";
import { useTheme } from "../context/ThemeContext";
import "@fontsource/berkshire-swash";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const Navbar = () => {
	const { theme, toggleTheme } = useTheme();
	const [checked, setChecked] = useState(false);
	const [hidden, setHidden] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (theme === "dark") {
			setChecked(false);
		} else {
			setChecked(true);
		}
	}, [checked]);

	// Handle scroll event to change navbar style
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();

		latest > previous && latest > 150 ? setHidden(true) : setHidden(false);
		// console.log("scrollY: ", latest, " , Previous: ", previous);
	});

	return (
		<motion.header
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0, y: -100 },
			}}
			initial="visible"
			animate={hidden ? "hidden" : "visible"}
			transition={{ duration: 0.5, ease: "easeInOut" }}
			className={` ${
				hidden ? "" : "sticky"
			} top-0 w-full z-50 backdrop-blur-md bg-white/30 border-b border-white/20
				text-gray-600 dark:bg-gray-900 body-font transition-all duration-200  
				shadow-[inset_0_-1px_0_0_#d1d5db] dark:shadow-[inset_0_-1px_0_0_#96969640]`}
		>
			<div className="container mx-auto flex flex-wrap p-3 flex-row  items-center justify-between">
				<Link
					to="/"
					className="flex flex-row sm:flex-row title-font font-medium items-center text-gray-900 mb-0"
				>
					<img
						src="\mle_logo3.png"
						alt="Brand Image"
						className="w-12 h-12 sm:w-16 sm:h-16 text-white p-0.5 object-cover object-center rounded-full"
						loading="lazy"
					/>
					<div className="flex flex-col  justify-center items-start ml-3">
						{/* <span className="ml-1 text-xl bg-gradient-to-r from-[#3a9c31]  via-[#065ddf] to-[#df9a06] inline-block text-transparent bg-clip-text"> */}
						<span className="ml-1 text-xl dark:text-white font-[inter]">
							Mega Links Enterprises
						</span>
						<span className="ml-1 text-[0.68rem]  dark:text-gray-400 ">
							Govt. Contractor & General Order Supplier
						</span>
					</div>
				</Link>
				<nav className="md:ml-auto hidden md:flex flex-wrap items-center text-base justify-center ">
					<NavLink
						to="/"
						className={({ isActive }) =>
							`mr-5 dark:text-gray-400 dark:hover:text-white hover:text-black  ${
								isActive ? "dark:text-white font-bold" : "dark:text-amber-300 "
							} `
						}
					>
						Home
					</NavLink>
					<NavLink
						to="/about"
						className={({ isActive }) =>
							`mr-5 dark:text-gray-400 dark:hover:text-white hover:text-black  ${
								isActive ? "dark:text-white font-bold" : "dark:text-amber-300 "
							} `
						}
					>
						About Us
					</NavLink>
					<NavLink
						to="/services"
						className={({ isActive }) =>
							`mr-5 dark:text-gray-400 dark:hover:text-white hover:text-black  ${
								isActive ? "dark:text-white font-bold" : "dark:text-amber-300 "
							} `
						}
					>
						Services
					</NavLink>
					<NavLink
						to="/contact"
						className={({ isActive }) =>
							`mr-5 dark:text-gray-400 dark:hover:text-white hover:text-black  ${
								isActive ? "dark:text-white font-bold" : "dark:text-amber-300 "
							} `
						}
					>
						Contact Us
					</NavLink>
				</nav>
				<div className="hidden md:flex items-center">
					<label className="switch mt-2 md:mt-0 ">
						<span className="sun">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<g fill="#ffd43b">
									<circle r="5" cy="12" cx="12"></circle>
									<path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
								</g>
							</svg>
						</span>
						<span className="moon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
								<path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
							</svg>
						</span>
						<input
							type="checkbox"
							checked={checked}
							onChange={() => {
								toggleTheme();
								setChecked(!checked);
							}}
							className="input"
						/>
						<span className="slider"></span>
					</label>
				</div>

				<div className="md:hidden flex items-center">
					{/* Mobile Menu Button */}

					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-8 w-8 h-8 text-gray-900 dark:text-white cursor-pointer"
						onClick={() => setIsMobile(true)}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>

					{/* Mobile Menu Drawer */}
					<div
						className={`fixed inset-0 h-screen bg-black/50 z-40 ${
							isMobile ? "block" : "hidden"
						}`}
						onClick={() => setIsMobile(false)}
					></div>
					<motion.div
						initial={{ x: "100%" }}
						animate={{ x: isMobile ? "0%" : "100%" }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className={`fixed top-0 right-0 h-screen w-64 bg-white dark:bg-gray-800 shadow-lg z-50 p-4 flex flex-col ${
							isMobile ? "block" : "hidden"
						}`}
					>
						<button
							className="self-end text-gray-900 dark:text-white mb-4"
							onClick={() => setIsMobile(false)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-8 h-8"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
						<NavLink
							to="/"
							className={({ isActive }) =>
								` dark:text-gray-400 dark:hover:text-white hover:text-black  ${
									isActive
										? "dark:text-white font-bold"
										: "dark:text-amber-300 "
								} `
							}
						>
							Home
						</NavLink>
						<hr className="w-full h-[2px] my-2 bg-white/60" />
						<NavLink
							to="/about"
							className={({ isActive }) =>
								` dark:text-gray-400 dark:hover:text-white hover:text-black  ${
									isActive
										? "dark:text-white font-bold"
										: "dark:text-amber-300 "
								} `
							}
						>
							About Us
						</NavLink>
						<hr className="w-full h-[2px] my-2 bg-white/60" />
						<NavLink
							to="/services"
							className={({ isActive }) =>
								` dark:text-gray-400 dark:hover:text-white hover:text-black  ${
									isActive
										? "dark:text-white font-bold"
										: "dark:text-amber-300 "
								} `
							}
						>
							Services
						</NavLink>
						<hr className="w-full h-[2px] my-2 bg-white/60" />
						<NavLink
							to="/contact"
							className={({ isActive }) =>
								` dark:text-gray-400 dark:hover:text-white hover:text-black  ${
									isActive
										? "dark:text-white font-bold"
										: "dark:text-amber-300 "
								} `
							}
						>
							Contact Us
						</NavLink>
						<hr className="w-full h-[2px] my-2 bg-white/60" />

						<div className="mt-8 flex flex-row justify-between items-center">
							<p className="dark:text-white">Theme:</p>
							<br />
							{/* Mobile Theme Switcher */}
							<label className="switch mt-0 ">
								<span className="sun">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
										<g fill="#ffd43b">
											<circle r="5" cy="12" cx="12"></circle>
											<path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
										</g>
									</svg>
								</span>
								<span className="moon">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
										<path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
									</svg>
								</span>
								<input
									type="checkbox"
									checked={checked}
									onChange={() => {
										toggleTheme();
										setChecked(!checked);
									}}
									className="input"
								/>
								<span className="slider"></span>
							</label>
						</div>
					</motion.div>
				</div>
			</div>
		</motion.header>
	);
};

export default Navbar;
