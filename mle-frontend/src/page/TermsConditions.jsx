import { Helmet } from "react-helmet";
import Layout from "../Layout";
import PageBreadcrumb from "../components/PageBreadcrumb";
import RevealComponent from "../components/RevealComponent";

const TermsConditions = () => {
	return (
		<>
			<Helmet>
				<title>Terms & Conditions - Mega Links Enterprises</title>
				<meta
					name="description"
					content="Terms & Conditions for Mega Links Enterprises"
				/>
				<meta
					name="keywords"
					content="Mega Links Enterprises, Terms & Conditions, Terms and Conditions, User Agreement"
				/>
			</Helmet>
			<Layout>
				<PageBreadcrumb
					pageName={"Terms & Conditions"}
					pageTitle={"Rules & Guidelines"}
				/>
				<RevealComponent>
					{/* <div className="bg-white dark:bg-gray-900  text-gray-800 dark:text-gray-100 min-h-screen  sm:px-10 md:px-20 lg:px-32"> */}
					<div className="max-w-3xl mx-auto ">
						<h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
							Terms & Conditions
						</h1>

						<section className="space-y-4">
							<p>
								Welcome to Mega Links Enterprises. By accessing or using our
								website, you agree to comply with and be bound by the following
								terms and conditions.
							</p>

							<h2 className="text-2xl font-semibold mt-8 text-gray-800 dark:text-gray-200">
								1. Acceptance of Terms
							</h2>
							<p>
								By accessing this site, you agree to be bound by these Terms &
								Conditions and all applicable laws and regulations. If you do
								not agree, you are prohibited from using or accessing this site.
							</p>

							<h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-200">
								2. Services
							</h2>
							<p>
								Mega Links Enterprises is a general order supplier offering
								procurement and contracting services. We reserve the right to
								modify or discontinue our services at any time without notice.
							</p>

							<h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-200">
								3. Intellectual Property
							</h2>
							<p>
								All content on this website, including text, graphics, logos,
								and images, is the property of Mega Links Enterprises and
								protected by intellectual property laws.
							</p>

							<h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-200">
								4. User Responsibilities
							</h2>
							<p>
								Users are responsible for ensuring that any information provided
								to us is accurate and lawful. Misuse of this website or its
								services is strictly prohibited.
							</p>

							<h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-200">
								5. Privacy Policy
							</h2>
							<p>
								Our Privacy Policy outlines how we collect, use, and protect
								your data. By using our site, you consent to our data practices
								as described in the Privacy Policy.
							</p>

							<h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-200">
								6. Limitation of Liability
							</h2>
							<p>
								Mega Links Enterprises is not liable for any damages that may
								result from the use or inability to use the materials on this
								website.
							</p>

							<h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-200">
								7. Modifications
							</h2>
							<p>
								We may revise these Terms & Conditions at any time without
								notice. By using this website, you agree to be bound by the
								then-current version.
							</p>

							<h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-200">
								8. Governing Law
							</h2>
							<p>
								These terms and conditions are governed by the laws of Pakistan,
								without regard to its conflict of law provisions.
							</p>

							<p className="mt-8">
								If you have any questions, please contact us at{" "}
								<a
									href="mailto:megalinksenterprises@gmail.com"
									className="text-blue-600 dark:text-blue-400"
								>
									megalinksenterprises@gmail.com
								</a>
								.
							</p>
						</section>
					</div>
				</RevealComponent>
			</Layout>
		</>
	);
};

export default TermsConditions;
