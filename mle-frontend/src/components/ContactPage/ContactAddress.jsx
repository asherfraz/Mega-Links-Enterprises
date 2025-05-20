import RevealComponent from "../RevealComponent";
import "@fontsource/poppins";
import linkedin_icon from "../../assets/linkedin-icon.png";

const ContactAddress = () => {
	return (
		<RevealComponent>
			<section id="contact">
				<div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 ">
					<div className="flex items-stretch justify-center">
						<div className="grid md:grid-cols-2">
							<div className="h-full pr-6">
								<h2 className="mx-auto mt-3 mb-4 text-5xl font-bold font-[poppins] text-black/80 dark:text-amber-400">
									Don’t hesitate to Contact us for any kind of Information
									<span className="text-[4rem] leading-0">.</span>
								</h2>
								<p className="mt-2 mb-12 text-lg text-gray-600 dark:text-slate-400">
									We are always ready to support you. You can reach us using the
									communication channels below.
								</p>
								<ul className="mb-6 md:mb-0">
									<li className="flex">
										<div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="h-6 w-6"
											>
												<path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
												<path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
											</svg>
										</div>
										<div className="ml-4 mb-4">
											<h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
												Our Address
											</h3>
											<p className="text-gray-600 dark:text-slate-400">
												Office # B-05 Satti Mall, Basement Meezan Bank,
											</p>
											<p className="text-gray-600 dark:text-slate-400">
												Haji Chowk, Muslim Town, Rawalpindi.
											</p>
										</div>
									</li>
									<li className="flex">
										<div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="h-6 w-6"
											>
												<path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
												<path d="M15 7a2 2 0 0 1 2 2"></path>
												<path d="M15 3a6 6 0 0 1 6 6"></path>
											</svg>
										</div>
										<div className="ml-4 mb-4">
											<h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
												Contact
											</h3>
											<p className="text-gray-600 dark:text-slate-400">
												Phone: &nbsp;
												<a href="tel:+923469592589">+(92) 346 9592 589</a>
											</p>
											<p className="text-gray-600 dark:text-slate-400">
												Landline/Fax: &nbsp;
												<a href="tel:+0514472765">+(051) 44 727 65</a>
											</p>
											<p className="text-gray-600 dark:text-slate-400">
												Mail: &nbsp;
												<a href="mailto:megalinksenterprises@gmail.com">
													megalinksenterprises@gmail.com
												</a>
											</p>
										</div>
									</li>
									{/* Working Hours */}
									{/* <li className="flex">
										<div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="h-6 w-6"
											>
												<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
												<path d="M12 7v5l3 3"></path>
											</svg>
										</div>
										<div className="ml-4 mb-4">
											<h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
												Working hours
											</h3>
											<p className="text-gray-600 dark:text-slate-400">
												Monday - Friday: 08:00 - 17:00
											</p>
										</div>
									</li> */}
									{/* Social Media Links */}
									<li className="flex">
										<div className="ml-14 mb-4">
											<h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
												Social Media
											</h3>
											<div className="flex space-x-4">
												<a
													href="https://pk.linkedin.com/in/sarfraz-anjum-823293b5"
													target="_blank"
													rel="noopener noreferrer"
													className=" hover:scale-110 transition-transform ease-in-out duration-300"
												>
													<img
														src={linkedin_icon}
														alt="linkedin icon"
														className="w-16 h-16 rounded-full"
													/>
												</a>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div
								className="card h-full max-w-6xl px-0 md:px-12  md:py-4"
								id="form"
							>
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d830.5139458232894!2d73.09021250790447!3d33.62979558266812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeb3286c98ffd%3A0xfbf1f107e334d06f!2sMega%20Links%20Enterprises!5e0!3m2!1sen!2s!4v1747773032272!5m2!1sen!2s"
									className="w-full h-[22rem] md:h-full rounded-lg shadow-lg"
									allowFullScreen="allow"
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</section>
		</RevealComponent>
	);
};

export default ContactAddress;
