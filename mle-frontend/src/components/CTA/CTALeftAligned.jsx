import React from "react";
import RevealComponent from "../RevealComponent";
import { motion } from "framer-motion";

const CTALeftAligned = () => {
	return (
		<RevealComponent>
			<div className="flex flex-col sm:flex-row  items-center justify-between h-full ">
				<div className="flex flex-col items-start justify-center h-full md:w-[50%] p-4">
					{/* <motion.img
                        variants={{
                            hidden: { opacity: 0, y: 75, x: 0 },
                            visible: { opacity: 1, y: 0, x: 0 }
                        }}
                        initial={"hidden"}
                        animate={"visible"}
                        transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}

                        className="lg:w-2/8 md:w-3/8 w-4/9 mb-10 object-cover object-center rounded-lg"
                        alt="MLE Logo"
                        src="/mle_logo2.png"
                        loading="lazy"
                    /> */}

					<h3 className="  text-lg font-bold font-[monospace] mb-1">
						Join Us Today {`<`}•_•{">"}
					</h3>
					<h1 className=" text-3xl font-bold mb-4 ">
						Have a Project or Contract in Mind!
					</h1>
					<p className="text-lg mb-6 dark:text-gray-400  text-start">
						Let us help you achieve your goals with our expertise and
						dedication. Contact us today to get started on your project or
						contract to experience the best services and solutions we offer.
					</p>
				</div>
				<motion.div
					variants={{
						hidden: { opacity: 0, y: 75, x: 0 },
						visible: { opacity: 1, y: 0, x: 0 },
					}}
					initial={"hidden"}
					animate={"visible"}
					transition={{ duration: 2.5, delay: 1, ease: "easeInOut" }}
					className="flex flex-col items-end justify-center w-full  h-full md:w-[50%] p-4 gap-4 "
				>
					<button className="inline-flex text-white bg-blue-600 border-0 py-1 px-3 sm:py-2 sm:px-6 rounded-lg text-lg hover:bg-blue-800 transition focus:outline-none  duration-100">
						Get Started
					</button>
					<button className="inline-flex text-gray-800 bg-gray-300 border-0 py-1 px-3 sm:py-2 sm:px-6 rounded-lg text-lg hover:bg-gray-600 hover:text-white transition focus:outline-none  duration-100">
						Register your Requirements
					</button>
				</motion.div>
			</div>
		</RevealComponent>
	);
};

export default CTALeftAligned;
