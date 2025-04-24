import React, { useRef } from "react";
import "@fontsource/rubik-scribble";
import "@fontsource/rubik-doodle-shadow";
import '@fontsource/berkshire-swash';
import { motion, useScroll, useTransform } from "framer-motion";

const FloatingText = () => {
	const textTop = "Your Demand, Our Hustle!";
	const textBottom = "Your Demand, Our Hustle!";

	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({ target: containerRef });
	const xTop = useTransform(scrollYProgress, [0, 0.5, 1], ["-120%", "0%", "120%"]);
	const opacityTop = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4]);
	const xBottom = useTransform(scrollYProgress, [0, 0.5, 1], ["120%", "0%", "-120%"]);
	const opacityBottom = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4]);

	return (

		<div ref={containerRef} >
			<motion.div
				id="textTop"
				style={{ x: xTop, opacity: opacityTop }}
				transition={{ ease: "easeInOut", type: "spring", stiffness: 300, damping: 15 }}
			>
				<h1
					id="textTop"
					className="text-[5vw] font-[rubik_scribble] text-4xl font-bold my-4 text-black/50 dark:text-white/50"
				>
					{
						textTop.split("").map((char, index) => (
							<span
								key={index}
								className="inline-block transform transition-transform duration-300 hover:translate-y-[-2px] hover:scale-105 hover:text-black dark:hover:text-white"
							>
								{char === " " ? "\u00A0" : char}
							</span>
						))
					}
				</h1>
			</motion.div>
			{/* Mega Links Enterprises main text */}
			<h1
				id="textBottom"
				className="text-[5vw] font-[berkshire_swash] text-4xl font-bold space-x-1  text-black/50 dark:text-white/50 text-center "
			>
				{"Mega".split("").map((char, index) => (
					<span
						key={index}
						className=" inline-block transform transition-transform duration-300 hover:translate-y-[-2px] hover:scale-105 hover:text-[#9ac92b] "
					>
						{char === " " ? "\u00A0" : char}
					</span>
				))}
				{" Links ".split("").map((char, index) => (
					<span
						key={index}
						className=" inline-block transform transition-transform duration-300 hover:translate-y-[-2px] hover:scale-105 hover:text-[#4bc1f0] "
					>
						{char === " " ? "\u00A0" : char}
					</span>
				))}
				{"Enterprises.".split("").map((char, index) => (
					<span
						key={index}
						className=" inline-block transform transition-transform duration-300 hover:translate-y-[-2px] hover:scale-105 hover:text-[#f9b01f]"
					>
						{char === " " ? "\u00A0" : char}
					</span>
				))}
			</h1>
			<motion.div
				id="textBottom"
				style={{
					x: xBottom,
					opacity: opacityBottom,
				}}
				transition={{ ease: "easeInOut", type: "spring", stiffness: 300, damping: 15 }}
			>
				<h1
					id="textBottom"
					className="text-[5vw] font-[rubik_doodle_shadow] text-4xl my-4 font-bold  text-black/50 dark:text-white/50 "
				>
					{textBottom.split("").map((char, index) => (
						<span
							key={index}
							className="inline-block transform transition-transform duration-300 hover:translate-y-[-2px] hover:scale-105 hover:text-[#f9b01f]"
						>
							{char === " " ? "\u00A0" : char}
						</span>
					))}
				</h1>
			</motion.div >
		</div >
	);
};

export default FloatingText;
