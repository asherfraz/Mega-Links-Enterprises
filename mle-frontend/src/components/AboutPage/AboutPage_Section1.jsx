import RevealComponent from "../RevealComponent";

const AboutPage_Section1 = () => {
	return (
		<RevealComponent noPadding={true}>
			<div id="about-welcome" className="relative overflow-hidden ">
				<div className="max-w-7xl mx-auto">
					<div className="relative z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
						<main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
							<div className="sm:text-center lg:text-left">
								<h2 className="my-6 text-2xl tracking-tight font-extrabold dark:text-white sm:text-3xl md:text-4xl">
									About Our Company
								</h2>

								<p>
									Mega Links Enterprises was Established in 2010 as a Wholesaler
									& Government Contractor. Mega Links Enterprises has been able
									to achieve a Critical Mass of Human and Capital Resource to
									Pursue its Ambitions to be a leading National Information
									Technology and Consulting Enterprise.
								</p>
							</div>
						</main>
					</div>
				</div>
				<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
					<img
						className="h-56 w-full object-contain object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
						src="/mle_logo2.png"
						alt=""
					/>
				</div>
			</div>
		</RevealComponent>
	);
};

export default AboutPage_Section1;
