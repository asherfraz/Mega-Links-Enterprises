import { Helmet } from "react-helmet";
import Layout from "../Layout";
import PageBreadcrumb from "../components/PageBreadcrumb";
import RevealComponent from "../components/RevealComponent";

const PrivacyPolicy = () => {
	return (
		<>
			<Helmet>
				<title>Privacy Policy - Mega Links Enterprises</title>
				<meta
					name="description"
					content="Privacy Policy for Mega Links Enterprises"
				/>
				<meta
					name="keywords"
					content="Mega Links Enterprises, Privacy Policy, Data Protection, User Privacy"
				/>
			</Helmet>
			<Layout>
				<PageBreadcrumb
					pageName={"Privacy Policy"}
					pageTitle={"Legal Document"}
				/>

				<RevealComponent>
					{/* <div className="bg-white dark:bg-gray-900  text-gray-800 dark:text-gray-100 min-h-screen  sm:px-10 md:px-20 lg:px-32"> */}

					<div className="max-w-3xl mx-auto ">
						<h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
							Privacy Policy
						</h1>

						<section className="space-y-4">
							<p>
								At Mega Links Enterprises, we are committed to protecting your
								privacy. This Privacy Policy outlines the types of information
								we collect, how we use it, and your rights regarding your
								personal data.
							</p>

							<h2 className="text-2xl font-semibold mt-8 text-gray-800 dark:text-gray-200">
								1. Information We Collect
							</h2>
							<p>
								We may collect personal information including your name, email
								address, phone number, and project details when you interact
								with our website or services.
							</p>

							<h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-200">
								2. How We Use Your Information
							</h2>
							<p>
								Your information is used to provide and improve our services,
								respond to inquiries, process requests, and communicate relevant
								updates or offers.
							</p>

							<h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-200">
								3. Data Sharing
							</h2>
							<p>
								We do not sell or rent your personal information. We may share
								it with trusted partners who assist in operating our website and
								services, provided they agree to keep the information
								confidential.
							</p>

							<h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-200">
								4. Data Security
							</h2>
							<p>
								We implement a variety of security measures to maintain the
								safety of your personal information, including encryption and
								secure server storage.
							</p>

							<h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-200">
								5. Cookies
							</h2>
							<p>
								Our website may use cookies to enhance user experience and
								analyze website usage. You can control cookie preferences
								through your browser settings.
							</p>

							<h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-200">
								6. Third-Party Links
							</h2>
							<p>
								Our site may contain links to external websites. We are not
								responsible for the content or privacy practices of these
								third-party sites.
							</p>

							<h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-200">
								7. Your Rights
							</h2>
							<p>
								You have the right to request access to your personal data,
								correct inaccuracies, and request deletion where applicable by
								law.
							</p>

							<h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-200">
								8. Changes to This Policy
							</h2>
							<p>
								We may update this Privacy Policy from time to time. Changes
								will be posted on this page with an updated revision date.
							</p>

							<p className="mt-8">
								If you have any questions about this policy, please contact us
								at:{" "}
								<a
									href="mailto:megalinksenterprises@gmail.com"
									className="text-blue-600 dark:text-blue-400"
								>
									megalinksenterprises@gmail.com
								</a>
							</p>
						</section>
					</div>
				</RevealComponent>
			</Layout>
		</>
	);
};

export default PrivacyPolicy;
