import React from "react";
import RevealComponent from "../RevealComponent";
import { motion } from "framer-motion";

const CTACentered = () => {
	return (
		<RevealComponent>
			<div className="flex flex-col items-center justify-center h-full ">
				<h3 className="text-lg font-bold font-[monospace] mb-1">
					Join Us Today...
				</h3>
				<h1 className="text-3xl font-bold mb-4 text-center ">
					Have a Project or Contract in Mind!
				</h1>
				<p className="text-lg mb-6 dark:text-gray-400 md:w-[60%] text-center">
					Let us help you achieve your goals with our expertise and dedication.
					Contact us today to get started on your project or contract to
					experience the best services and solutions we offer.
				</p>
				<motion.div
					variants={{
						hidden: { opacity: 0, y: 75, x: 0 },
						visible: { opacity: 1, y: 0, x: 0 },
					}}
					initial={"hidden"}
					animate={"visible"}
					transition={{ duration: 2.5, delay: 1, ease: "easeInOut" }}
					className="flex justify-center gap-4"
				>
					<button className="inline-flex text-white bg-blue-600 border-0 py-1 px-3 sm:py-2 sm:px-6 rounded-lg text-lg hover:bg-blue-800 transition duration-100 focus:outline-none">
						Get Started
					</button>
				</motion.div>
			</div>
		</RevealComponent>
	);
};

export default CTACentered;
