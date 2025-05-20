import "@fontsource/rubik-scribble";
import "@fontsource/rubik-doodle-shadow";
import "@fontsource/berkshire-swash";
import RevealComponent from "./RevealComponent";

const PageBreadcrumb = ({ pageName, pageTitle }) => {
	return (
		<RevealComponent noPadding={true} width="full">
			<div className="m-4">
				<div className="flex flex-col items-center justify-center w-full h-fit px-4 py-8 bg-white dark:bg-gray-900 shadow-md">
					{/* Page Name */}
					<h2 className="text-lg font-[monospace] font-semibold text-gray-800 dark:text-white mb-4">
						{pageName}
					</h2>

					{/* Page Title */}
					<h1
						// 	className="text-5xl text-center font-bold  dark:text-white mb-4 font-[inter]
						// inline-block linear-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent"
						// >
						className="text-5xl text-center font-bold pb-4 bg-gradient-to-r from-green-300  to-blue-600 bg-clip-text text-transparent inline-block text-shadow-lg "
					>
						{pageTitle}
					</h1>

					{/* Breadcrumb */}
					<nav className="flex  mb-4" aria-label="Breadcrumb">
						<ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
							<li className="inline-flex items-center">
								<a
									href="/"
									className="inline-flex items-center text-md font-medium text-gray-700 hover:text-text-black dark:text-gray-400 dark:hover:text-white"
								>
									<svg
										className="w-4 h-4 me-2.5"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
									</svg>
									Home
								</a>
							</li>
							<li>
								<div className="flex items-center">
									<svg
										className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1 dark:hover:text-white"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 6 10"
									>
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="m1 9 4-4-4-4"
										/>
									</svg>
									<a
										href="#"
										className="ms-1 text-md font-medium text-gray-700 hover:text-black md:ms-2 dark:text-gray-400 dark:hover:text-white"
									>
										{pageName}
									</a>
								</div>
							</li>
							{/* <li aria-current="page">
							<div className="flex items-center">
								<svg
									className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 6 10"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="m1 9 4-4-4-4"
									/>
								</svg>
								<span className="ms-1 text-md font-medium text-gray-500 md:ms-2 dark:text-gray-400">
									details
								</span>
							</div>
						</li> */}
						</ol>
					</nav>
				</div>
			</div>
		</RevealComponent>
	);
};

export default PageBreadcrumb;
