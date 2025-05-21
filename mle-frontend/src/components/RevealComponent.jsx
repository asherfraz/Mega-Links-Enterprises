import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const RevealComponent = ({ children, width = "full", noPadding = false }) => {
	const ref = useRef(null);

	const isInView = useInView(ref, { once: true });
	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			// Trigger animation when the component is in view
			mainControls.start("visible");
		}
	}, [isInView]);

	return (
		// <section ref={ref} className={`relative w-${width} overflow-${overflow} bg-gray-900 rounded-lg shadow-lg p-4 m-4`}>
		<section ref={ref} className={`relative w-${width}   rounded-lg `}>
			<motion.div
				variants={{
					hidden: { opacity: 0, y: 75, x: 0 },
					visible: { opacity: 1, y: 0, x: 0 },
				}}
				initial="hidden"
				animate={mainControls}
				transition={{ duration: 1, delay: 0.25, ease: "easeInOut" }}
			>
				<section className="min-h-fit flex items-center justify-center m-4 rounded-lg shadow-md bg-white dark:bg-gray-800 dark:border-gray-700">
					{noPadding ? (
						<div className="bg-white dark:bg-gray-900 w-full rounded-lg overflow-x-hidden">
							{children}
						</div>
					) : (
						<div className="bg-white dark:bg-gray-900 w-full px-12 py-16 rounded-lg overflow-x-hidden">
							{children}
						</div>
					)}
				</section>
			</motion.div>
		</section>
	);
};

export default RevealComponent;
