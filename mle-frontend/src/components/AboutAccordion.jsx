import React, { useState } from "react";
import { motion } from "framer-motion";

const AboutAccordion = ({ setImgIndex }) => {
	const [expandableState, setExpandableState] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);

	let accordion_title = [
		"Who we are:",
		"What we do:",
		"Our mission:",
		"Our vision:",
	];
	let accordion_content = [
		// "Who we are:",
		"Mega Links Enterprises, founded in 2010, is a dynamic organization specializing in Government Contracting and Wholesale solutions. With a growing team and robust infrastructure, we aim to lead Pakistan’s IT and consulting space through innovation and reliability.",
		// "What we do:",
		"Since 2010, Mega Links Enterprises has steadily evolved from a wholesaler and government contractor into a forward-thinking enterprise. Backed by a skilled workforce and scalable operations, we’re committed to becoming a trusted name in IT, engineering, and consulting.",
		// "Our mission:",
		"Our mission is to deliver high-quality, ethical, and compliant professional services that exceed expectations. We aim to empower our team and establish a strong platform to support clients in the built environment and engineering sectors.",
		// "Our vision:",
		"We envision expanding our diverse team to offer comprehensive IT, Engineering, and Management Consulting services, becoming the first choice for clients seeking excellence, reliability, and full-lifecycle project support.",
	];

	return (
		<>
			{accordion_title.map((title, index) => {
				return (
					<div key={index} className="accordion-item  bg-white/80  rounded-lg ">
						<div
							className="accordion-header p-2 cursor-pointer flex justify-between items-center dark:bg-gray-800  shadow-lg hover:bg-gray-400 transition duration-300 ease-in-out text-black dark:text-white rounded-t-lg z-52"
							onClick={() => {
								setImgIndex(index);
								setExpandableState(!expandableState);
								setActiveIndex(index);
							}}
						>
							<h2 className="accordion-title font-bold uppercase text-lg ">
								{title}
							</h2>
							{activeIndex === index ? (
								<span className="accordion-icon text-2xl  ">-</span>
							) : (
								<span className="accordion-icon text-2xl  ">+</span>
							)}
						</div>
						<motion.div
							key={index}
							variants={{
								hidden: { opacity: 0, y: 10 },
								visible: { opacity: 1, y: 0 },
							}}
							initial={"hidden"}
							animate={activeIndex === index ? "visible" : "hidden"}
							transition={{ duration: 0.5, delay: 0.15 }}
							className={`
                                ${activeIndex === index ? "" : "hidden"} 
                            mb-2 accordion-content px-2 pb-2 text-left text-gray-700 dark:text-black/95 bg-gray-100 dark:bg-gray-300 rounded-b-lg overflow-hidden `}
						>
							<p>{accordion_content[index]}</p>
						</motion.div>
					</div>
				);
			})}
		</>
	);
};

export default AboutAccordion;
