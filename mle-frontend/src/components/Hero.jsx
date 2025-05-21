// import React from "react";

// const Hero = () => {
// 	return (
// 		<section className="text-gray-600 body-font">
// 			<div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
// 				<img
// 					className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
// 					alt="hero"
// 					src="\mle_logo2.png"
// 					loading="lazy"
// 				/>
// 				<div className="text-center lg:w-2/3 w-full">
// 					<h1 className="title-font sm:text-5xl text-3xl text-shadow-lg  mb-4 font-bold text-gray-900">
// 						On Time.{" "}
// 						<span className="text-6xl text-shadow-lg bg-gradient-to-br from-blue-500 via-blue-500  to-blue-500  bg-clip-text text-transparent">
// 							On Budget.
// 						</span>{" "}
// 						Every Time.
// 					</h1>
// 					<p className="mb-8 leading-relaxed">
// 						Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
// 						tousled. Chambray dreamcatcher trust fund, kitsch vice godard
// 						disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.
// 						Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan
// 						photo booth af fingerstache pitchfork.
// 					</p>
// 					<div className="flex justify-center">
// 						<button
// 							className={`inline-flex text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded text-lg`}
// 						>
// 							Button
// 						</button>
// 						<button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
// 							Button
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Hero;

import React, { useCallback, useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import {
	motion,
	useAnimation,
	useInView,
	useMotionTemplate,
	useMotionValue,
} from "framer-motion";
import "./styles/AnimatedOutlinedBlock.css";
import "@fontsource/rubik-scribble";
import { Link } from "react-router";

const Hero = () => {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const handleMouseMove = useCallback(
		({ currentTarget, clientX, clientY }) => {
			const { left, top } = currentTarget.getBoundingClientRect();
			mouseX.set(clientX - left);
			mouseY.set(clientY - top);
		},
		[mouseX, mouseY]
	);

	const background = useMotionTemplate`radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.15), transparent 80%)`;

	const styles = {
		"--background": "255 255 255",
		"--highlight": "249 176 31",
		"--bg-color":
			"linear-gradient(rgb(var(--background)), rgb(var(--background)))",
		borderRadius: "0.92rem",
	};

	// Animation on View
	const variants = {
		hidden: { opacity: 0, y: 75, x: 0 },
		visible: { opacity: 1, y: 0, x: 0 },
	};

	const ref = useRef(null);

	const isInView = useInView(ref, { once: true });
	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			// Trigger animation when the component is in view
			mainControls.start("visible");
		}
	}, [isInView]);

	// return (
	// 	<div className=" h-full dark:bg-gray-800 p-4 flex flex-col  ">
	// 		<div
	// 			className="group relative max-w-screen rounded-xl border border-black/15 dark:border-white/10 dark:bg-gray-900 px-8 py-16 shadow-2xl"
	// 			onMouseMove={handleMouseMove}
	// 		>
	// 			<motion.div
	// 				className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
	// 				style={{ background }}
	// 			/>
	// 			{/* <div>
	// 				<h3 className="text-base font-semibold leading-7 text-sky-500">
	// 					Byline
	// 				</h3>
	// 				<div className="mt-2 flex items-center gap-x-2">
	// 					<span className="text-5xl font-bold tracking-tight text-white">
	// 						Hero
	// 					</span>
	// 				</div>
	// 				<p className="mt-6 text-base leading-7 text-gray-300">
	// 					Lorem ipsum dolor sit amet consectetur adipisicing elit, facilis
	// 					illum eum ullam nostrum atque quam.
	// 				</p>
	// 			</div> */}
	// 			<section className="text-gray-600 body-font">
	// 				<div className="container mx-auto flex items-center justify-center flex-col">
	// 					<img
	// 						className="lg:w-2/9 md:w-3/8 w-5/6 mb-10 object-cover object-center rounded"
	// 						alt="hero"
	// 						src="\mle_logo2.png"
	// 						loading="lazy"
	// 					/>
	// 					<div className="text-center lg:w-2/3 w-full">
	// 						<h1
	// 							className="title-font sm:text-5xl text-4xl text-shadow-lg  mb-4 font-bold text-black/60 dark:text-gray-200
	// 						"
	// 						>
	// 							On Time.{" "}
	// 							<span className="block md:inline sm:text-5xl  text-4xl text-shadow-lg bg-gradient-to-br from-blue-500 via-blue-500  to-blue-500  bg-clip-text text-transparent">
	// 								On Budget.
	// 							</span>{" "}
	// 							Every Time.
	// 						</h1>
	// 						<p className="mb-8 leading-relaxed text-gray-500 dark:text-gray-400">
	// 							Meggings kinfolk echo park stumptown DIY, kale chips beard
	// 							jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
	// 							godard disrupt ramps hexagon mustache umami snackwave tilde
	// 							chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui
	// 							celiac mlkshk freegan photo booth af fingerstache pitchfork.
	// 						</p>
	// 						<div className="flex justify-center">
	// 							<button
	// 								className={`inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded text-lg`}
	// 							>
	// 								Our Values
	// 							</button>
	// 							<button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 hover:text-white rounded text-lg">
	// 								Our Services
	// 							</button>
	// 						</div>
	// 					</div>
	// 				</div>
	// 			</section>
	// 		</div>
	// 	</div>
	// );

	return (
		<motion.div
			ref={ref}
			variants={{
				hidden: { opacity: 0, y: 75, x: 0 },
				visible: { opacity: 1, y: 0, x: 0 },
			}}
			initial="hidden"
			animate={mainControls}
			transition={{ duration: 2, delay: 0.25, ease: "easeInOut" }}
			className="h-full w-full  bg-gray-100 dark:bg-gray-800  p-4 flex flex-col items-center justify-center  "
		>
			<div
				style={styles}
				className="animated-border flex h-full w-full flex-col items-center justify-center rounded-xl border border-transparent  text-center [background:padding-box_var(--bg-color)] "
			>
				<div
					className="group relative w-full rounded-xl  bg-white dark:bg-gray-900 py-16 "
					onMouseMove={handleMouseMove}
				>
					<motion.div
						className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
						style={{ background }}
					/>

					<section className="text-gray-600 body-font overflow-hidden">
						<div className="container mx-auto flex flex-col items-center justify-center">
							<motion.img
								variants={variants}
								initial="hidden"
								animate={mainControls}
								transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
								className="lg:w-2/8 md:w-3/8 w-4/9 mb-10 object-cover object-center rounded-lg"
								alt="MLE Logo"
								src="/mle_logo2.png"
							/>
							<motion.div
								variants={variants}
								initial="hidden"
								animate={mainControls}
								transition={{ duration: 2.5, delay: 0.75, ease: "easeInOut" }}
								className="text-center lg:w-2/3 w-full"
							>
								<h1 className="title-font sm:text-5xl text-4xl text-shadow-lg  mb-4 font-bold text-black/60 dark:text-gray-200">
									<span className="mr-2 whitespace-nowrap">On Time.</span>
									{/* <span className="mr-2 whitespace-nowrap leading-18 block md:inline bg-gradient-to-br from-blue-500 via-blue-500 to-blue-500 bg-clip-text text-transparent text-6xl text-shadow-lg"> */}
									<span className="mr-2 whitespace-nowrap leading-18 block md:inline text-blue-500 bg-clip-text  text-6xl text-shadow-lg">
										On Budget.
									</span>
									<span className="whitespace-nowrap">Every Time.</span>
								</h1>

								<p className="mb-8 leading-relaxed text-gray-500 dark:text-gray-400 px-3">
									Meggings kinfolk echo park stumptown DIY, kale chips beard
									jianbing tousled. Chambray dreamcatcher trust fund, kitsch
									vice godard disrupt ramps hexagon mustache umami snackwave
									tilde chillwave ugh.
								</p>
								<motion.div
									variants={variants}
									initial="hidden"
									animate={mainControls}
									transition={{ duration: 2.5, delay: 1, ease: "easeInOut" }}
									className="flex justify-center gap-4"
								>
									<Link
										to="contact"
										className="inline-flex text-white bg-blue-500 border-0 py-1 px-3 sm:py-2 sm:px-6 rounded text-lg hover:bg-blue-800 transition"
									>
										Get Started
									</Link>
									<Link
										to="project-requirement"
										className="inline-flex text-gray-700 bg-gray-200 border-0 py-1 px-3 sm:py-2 sm:px-6 rounded text-lg hover:bg-gray-600 hover:text-white transition"
									>
										Book Project
									</Link>
								</motion.div>
							</motion.div>
						</div>
					</section>
				</div>
			</div>
		</motion.div>
	);
};

export default Hero;
