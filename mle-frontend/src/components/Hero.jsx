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

import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const Hero = () => {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	function handleMouseMove({ currentTarget, clientX, clientY }) {
		const { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}

	const background = useMotionTemplate`radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.15), transparent 80%)`;

	return (
		<div className=" h-full dark:bg-gray-800 p-4 flex flex-col  ">
			<div
				className="group relative max-w-screen rounded-xl border border-white/10 bg-gray-900 px-8 py-16 shadow-2xl"
				onMouseMove={handleMouseMove}
			>
				<motion.div
					className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
					style={{ background }}
				/>
				{/* <div>
					<h3 className="text-base font-semibold leading-7 text-sky-500">
						Byline
					</h3>
					<div className="mt-2 flex items-center gap-x-2">
						<span className="text-5xl font-bold tracking-tight text-white">
							Hero
						</span>
					</div>
					<p className="mt-6 text-base leading-7 text-gray-300">
						Lorem ipsum dolor sit amet consectetur adipisicing elit, facilis
						illum eum ullam nostrum atque quam.
					</p>
				</div> */}
				<section className="text-gray-600 body-font">
					<div className="container mx-auto flex items-center justify-center flex-col">
						<img
							className="lg:w-2/9 md:w-3/8 w-5/6 mb-10 object-cover object-center rounded"
							alt="hero"
							src="\mle_logo2.png"
							loading="lazy"
						/>
						<div className="text-center lg:w-2/3 w-full">
							<h1 className="title-font sm:text-5xl text-4xl text-shadow-lg  mb-4 font-bold text-gray-200">
								On Time.{" "}
								<span className="block md:inline sm:text-5xl  text-4xl text-shadow-lg bg-gradient-to-br from-blue-500 via-blue-500  to-blue-500  bg-clip-text text-transparent">
									On Budget.
								</span>{" "}
								Every Time.
							</h1>
							<p className="mb-8 leading-relaxed">
								Meggings kinfolk echo park stumptown DIY, kale chips beard
								jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
								godard disrupt ramps hexagon mustache umami snackwave tilde
								chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui
								celiac mlkshk freegan photo booth af fingerstache pitchfork.
							</p>
							<div className="flex justify-center">
								<button
									className={`inline-flex text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded text-lg`}
								>
									Button
								</button>
								<button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
									Button
								</button>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Hero;
