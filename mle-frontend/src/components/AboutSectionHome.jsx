import React, { useState } from "react";
import AboutAccordion from "./AboutAccordion";
import { motion } from "framer-motion";
import company_overview from "../assets/About/company-overview.jpg";
import our_mission from "../assets/About/our-mission.jpg";
import our_vision from "../assets/About/our_vision.jpg";
import RevealComponent from "./RevealComponent";

const AboutSectionHome = () => {
	const images = ["/mle_logo2.png", company_overview, our_mission, our_vision];
	const [imgIndex, setImgIndex] = useState(0);

	return (
		<RevealComponent>
			<h2 className="text-4xl font-bold text-center dark:text-white">
				About Us
			</h2>
			<div className="w-full  max-w-4xl mx-auto mt-8 flex flex-wrap md:flex-nowrap justify-center items-center  px-8">
				<div className="w-full md:w-1/2 h-[300px] md:h-auto flex items-center justify-center pr-2 mb-2 md:mb-0">
					<motion.img
						key={imgIndex}
						initial={{ opacity: 0, scale: 0.55 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 2.5, delay: 0.25 }}
						src={images[imgIndex]}
						alt="MLE Logo"
						loading="lazy"
						className="w-full h-full object-contain md:object-contain rounded-lg"
					/>
				</div>
				{/* <div className="w-full md:w-[100%] "> */}
				<div className="w-full md:w-1/2">
					<AboutAccordion setImgIndex={setImgIndex} />
				</div>
			</div>
		</RevealComponent>
	);
};

export default AboutSectionHome;
