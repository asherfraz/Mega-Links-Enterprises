// import React from "react";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router";
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
				{/* Theme Switcher */}
				<div className="hidden md:flex items-center">
					{theme === "dark" ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-6 text-white cursor-pointer"
							onClick={() => {
								toggleTheme();
								setChecked(!checked);
							}}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="black"
							className="size-6 text-black/50 cursor-pointer"
							onClick={() => {
								toggleTheme();
								setChecked(!checked);
							}}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
							/>
						</svg>
					)}
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

						<div
							className="mt-8 flex flex-row justify-between items-center cursor-pointer"
							onClick={() => {
								toggleTheme();
								setChecked(!checked);
							}}
						>
							<p className="dark:text-white capitalize">Theme: {theme} mode</p>
							<br />
							{/* Mobile Theme Switcher */}
							{theme === "dark" ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="size-6 text-white cursor-pointer"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="black"
									className="size-6 text-black/50 cursor-pointer"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
									/>
								</svg>
							)}
						</div>
					</motion.div>
				</div>
			</div>
		</motion.header>
	);
};

export default Navbar;
