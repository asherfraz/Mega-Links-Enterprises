import RevealComponent from "../RevealComponent";
import company_overview from "../../assets/About/company-overview.jpg";
import our_vision from "../../assets/About/our_vision.jpg";
import our_mission from "../../assets/About/our-mission.jpg";
import our_values from "../../assets/About/our-values.jpg";

const AboutPage_Section2 = () => {
	return (
		<RevealComponent noPadding={true}>
			<section
				id="company-overview"
				className="w-full mx-auto py-10 dark:text-white overflow-hidden"
			>
				<div className="w-full h-full flex flex-col items-center md:py-4 py-10">
					{/* Row 1 */}
					<RevealComponent noPadding={true} card={true}>
						<div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row  flex-col-reverse lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-6">
							<div className="md:w-[50%] w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 p-0 rounded-md">
								<h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
									Company Overview
								</h2>

								<p className="text-md mt-4">
									We Real solutions beliefs in solutions not problems, we are
									rapidly growing company that deals in IT, Telecom,
									Software/Web Development and Civil Works. Capable and well
									trained team of professionals distributed in the key areas of
									the region, we have pride to offer Telecom consultancy,
									products and services to help improve the entire process of
									planning, development, implementation, change management, and
									post-implementation support. Mega Links Enterprises has
									continued to strive towards becoming a complete
									multi-disciplinary practice offering our Clients the
									specialist individual attention and solutions.
								</p>
							</div>
							<img
								className="md:w-[50%] w-full md:rounded-t-lg rounded-sm"
								src={company_overview}
								alt="billboard image"
							/>
						</div>
					</RevealComponent>
					{/* Row 2 */}
					<RevealComponent noPadding={true} card={true}>
						<div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-4">
							<img
								className="md:w-[50%] w-full md:rounded-t-lg rounded-sm"
								src={our_mission}
								alt="billboard image"
							/>

							<div className="md:w-[50%] w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 p-0 rounded-md">
								<h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
									Our Mission
								</h2>
								<p className="text-md mt-4">
									Our Mission is to offer excellent service in each of our
									professional disciplines, in accordance with statutory
									practices, codes of conduct and integrity, thereby developing
									our team and providing a leading platform from which to
									service the built environment and in particular, our valued
									Clients.
								</p>
							</div>
						</div>
					</RevealComponent>
					{/* Row 3 */}
					<RevealComponent noPadding={true} card={true}>
						<div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row  flex-col-reverse lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-6">
							<div className="md:w-[50%] w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 p-0 rounded-md">
								<h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
									Our Vision
								</h2>

								<p className="text-md mt-4">
									Our vision is to grow our multi-disciplinary team in order to
									offer a broad spectrum of specialist Engineering Information
									Technology and Management Consulting services to become our
									Clients preferred Professional Service Provider choice through
									excellence and efficiency in all aspects of the project life
									cycle.
									<br />
									Whether it is a matter of Supply of Electrical, Electronics,
									IT / Telecom equipment's and parts or we rendered services in
									building project, civil engineering project, implementation of
									a project management system, or Programme management of a
									multi-facetted initiative, Mega Links Enterprises s is a
									leading practice that will exceed expectations and set new
									standards!
								</p>
							</div>
							<img
								className="md:w-[50%] w-full md:rounded-t-lg rounded-sm"
								src={our_vision}
								alt="billboard image"
							/>
						</div>
					</RevealComponent>
					{/* Row 4*/}
					<RevealComponent noPadding={true} card={true}>
						<div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-4">
							<img
								className="md:w-[50%] w-full md:rounded-t-lg rounded-sm"
								src={our_values}
								alt="billboard image"
							/>

							<div className="md:w-[50%] w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 p-0 rounded-md">
								<h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
									Our Values
								</h2>
								<p className="text-md mt-4">
									<strong>People:</strong> We Care Deeply About People Our Own
									People, Our Partners and Customers, and the Communities to
									Which we Belong. <br />
									<strong>Passion:</strong> Passion is the Fuel that Drives Our
									Culture, It Defines Our Mindset and Energizes Our Business.
									<br />
									<strong>Place:</strong> We take seriously our responsibility
									to the environment. Through our action we contribute towards
									creating a better place for future Generation.
								</p>
							</div>
						</div>
					</RevealComponent>
				</div>
			</section>
		</RevealComponent>
	);
};

export default AboutPage_Section2;
