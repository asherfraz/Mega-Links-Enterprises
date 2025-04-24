import React from "react";
import Layout from "../Layout";
import NotFound_SVG from "../assets/NotFound-SVG.svg";

const NotFound = () => {
	return (
		<Layout>
			<div className="container max-w-screen dark:bg-gray-900 flex flex-col items-center justify-center min-h-fit mx-auto py-12">
				<img
					src={NotFound_SVG}
					alt="Not Found"
					className="mx-auto mt-10 drop-shadow-lg drop-shadow-gray-700/80 dark:drop-shadow-gray-500/80 rounded-lg"
				/>
				<h1 className="text-4xl font-bold text-center mt-12 dark:text-white">
					Looks like you're lost
				</h1>
				<p className="text-center mt-4 dark:text-white">
					Sorry, the page you are looking for does not exist.
				</p>
				<div className="flex justify-center mt-8">
					<a
						href="/"
						className="dark:text-white border-2 rounded-bl-2xl  rounded-tr-2xl text-black hover:text-white dark:hover:bg-gray-600 hover:bg-gray-800 px-4 py-2 rounded"
					>
						Go to Home
					</a>
				</div>
			</div>
		</Layout>
	);
};

export default NotFound;
