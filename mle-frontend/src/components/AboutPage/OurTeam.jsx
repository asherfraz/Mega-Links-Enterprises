import RevealComponent from "../RevealComponent";

const OurTeam = () => {
	return (
		<RevealComponent noPadding={true}>
			<div id="our-team" className="py-14 ">
				<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between">
					<div className="sm:w-6/12 order-last sm:order-first ">
						<ul className=" grid grid-cols-2 col-gap-5 row-gap-5 md:col-gap-10 md:row-gap-10 ">
							<li className="bg-gray-100/70 p-5 py-10 text-center rounded-tl-lg">
								<div className="flex flex-col items-center ">
									<div className="flex-shrink-0">
										{/* <a href="#"> */}
										<img
											className="mb-3 rounded-full mx-auto h-24 w-24"
											src="https://avatar.iran.liara.run/public/7"
										/>
										{/* </a> */}
									</div>
									<div className="text-center ">
										<h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
											{/* <a
												href="#"
												className="hover:text-indigo-600 transition duration-500 ease-in-out"
											> */}
											Sarfraz Anjum
											{/* </a> */}
										</h4>
										<p className="text-sm leading-6 text-gray-500 uppercase">
											CEO & Founder
										</p>
									</div>
								</div>
							</li>
							<li className="bg-gray-100/60 p-5 py-10 text-center rounded-tr-lg">
								<div className="flex flex-col items-center">
									<div className="flex-shrink-0">
										{/* <a href="#"> */}
										<img
											className="mb-3 rounded-full mx-auto h-24 w-24"
											src="https://avatar.iran.liara.run/public/23"
										/>
										{/* </a> */}
									</div>
									<div className="text-center">
										<h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
											{/* <a
												href="#"
												className="hover:text-indigo-600 transition duration-500 ease-in-out"
											> */}
											Asher Fraz
											{/* </a> */}
										</h4>
										<p className="text-sm leading-6 text-gray-500 uppercase">
											Web developer
										</p>
									</div>
								</div>
							</li>
							<li className="bg-gray-100/60 p-5 py-10 text-center rounded-bl-lg">
								<div className="flex flex-col items-center">
									<div className="flex-shrink-0">
										{/* <a href="#"> */}
										<img
											className="mb-3 rounded-full mx-auto h-24 w-24"
											src="https://avatar.iran.liara.run/public/9"
										/>
										{/* </a> */}
									</div>
									<div className="text-center">
										<h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
											{/* <a
												href="#"
												className="hover:text-indigo-600 transition duration-500 ease-in-out"
											> */}
											Dilfraz Anjum
											{/* </a> */}
										</h4>
										<p className="text-sm leading-6 text-gray-500 uppercase">
											Civil Engineer
										</p>
									</div>
								</div>
							</li>
							<li className="bg-gray-100/70 p-5 py-10 text-center rounded-br-lg">
								<div className="flex flex-col items-center">
									<div className="flex-shrink-0">
										{/* <a href="#"> */}
										<img
											className="mb-3 rounded-full mx-auto h-24 w-24"
											src="https://avatar.iran.liara.run/public/31"
										/>
										{/* </a> */}
									</div>
									<div className="text-center">
										<h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
											{/* <a
												href="#"
												className="hover:text-indigo-600 transition duration-500 ease-in-out"
											> */}
											Farooq Ahsan
											{/* </a> */}
										</h4>
										<p className="text-sm leading-6 text-gray-500 uppercase">
											Publication worker
										</p>
									</div>
								</div>
							</li>
						</ul>
					</div>

					<div className="text-left mb-10 sm:ml-10 md:ml-24 sm:w-6/12 order-first sm:order-last">
						<p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
							THE TEAM
						</p>
						<h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900 dark:text-white">
							Meet Our <span className="text-amber-500">Team</span>
						</h3>
						<p className="mt-4 text-md leading-7 text-gray-500 font-light">
							Our team comprises dedicated professionals with diverse expertise
							in technology, engineering, and media. We collaborate closely to
							deliver innovative solutions that exceed client expectations. With
							years of combined experience, we approach each project with
							creativity, technical excellence, and a commitment to quality.
							<br />
							<br />
							Together we turn vision into reality.
						</p>
					</div>
				</div>
			</div>
		</RevealComponent>
	);
};

export default OurTeam;
