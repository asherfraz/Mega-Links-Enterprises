import Layout from "../Layout";
import RevealComponent from "../components/RevealComponent";
import FaqSection from "../components/FaqSection";
import PageBreadcrumb from "../components/PageBreadcrumb";

const Contact = () => {
	return (
		<Layout>
			<PageBreadcrumb pageName={"Contact Us"} pageTitle={"Get In Touch"} />

			{/* TODO: Add Contact Form using React-hook-form */}
			<RevealComponent>
				<div className="flex items-center justify-around bg-gray-100 dark:bg-gray-800">
					<div className="container  px-4 py-8">
						<h2 className="text-4xl font-bold text-center mb-6 dark:text-white">
							Get In Touch
						</h2>
						<p className="text-lg text-center mb-8 dark:text-neutral-400">
							We'd love to hear from you! Please fill out the form below to get
							in touch with us.
						</p>
						<form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
							<div className="mb-4">
								<label
									className="block text-gray-700 text-sm font-bold mb-2"
									htmlFor="name"
								>
									Name
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="name"
									type="text"
									placeholder="Your Name"
								/>
							</div>
							<div className="mb-4">
								<label
									className="block text-gray-700 text-sm font-bold mb-2"
									htmlFor="email"
								>
									Email
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Your Email"
								/>
							</div>
							<div className="mb-4">
								<label
									className="block text-gray-700 text-sm font-bold mb-2"
									htmlFor="message"
								>
									Message
								</label>
								<textarea
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="message"
									rows="4"
									placeholder="Your Message"
								></textarea>
							</div>
							<div className="flex items-center justify-between">
								<button
									className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
									type="button"
								>
									Send Message
								</button>
							</div>
						</form>
					</div>
					<div className="container  px-4 py-8">
						{/* TODO: ADD Address, mail, phone besides Contact form */}
						<h2 className="text-4xl font-bold text-center mb-6 dark:text-white">
							Our Address
						</h2>
						<p className="text-lg text-center mb-8 dark:text-neutral-400">
							123 Mega Links Street, City, Country
						</p>
						<p className="text-lg text-center mb-8 dark:text-neutral-400">
							Email:
							<a href="mailto:example@gmail.com" className="text-blue-500">
								example mail
							</a>
						</p>
						<p className="text-lg text-center mb-8 dark:text-neutral-400">
							Phone:
							<a href="tel:+1234567890" className="text-blue-500">
								+123 456 7890
							</a>
						</p>
						<p className="text-lg text-center mb-8 dark:text-neutral-400">
							Follow us on:
							<a href="https://www.facebook.com" className="text-blue-500">
								Facebook
							</a>
							<a href="https://www.twitter.com" className="text-blue-500">
								Twitter
							</a>
							<a href="https://www.linkedin.com" className="text-blue-500">
								LinkedIn
							</a>
						</p>
						<p className="text-lg text-center mb-8 dark:text-neutral-400">
							Follow us on:
							<a href="https://www.facebook.com" className="text-blue-500">
								Facebook
							</a>
							<a href="https://www.twitter.com" className="text-blue-500">
								Twitter
							</a>
							<a href="https://www.linkedin.com" className="text-blue-500">
								LinkedIn
							</a>
						</p>
					</div>
				</div>
			</RevealComponent>

			{/* TODO: Below above Div add Maps */}
			<RevealComponent>
				<div className="container mx-auto px-4 py-8">
					<iframe
						className="w-full h-96 rounded-lg shadow-md"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1234567890123!2d-122.4194156846815!3d37.7749292797599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c8c8c8c8c%3A0x8c8c8c8c8c8c8c8c!2sSan%20Francisco%2C%20CA%2094104%2C%20USA!5e0!3m2!1sen!2sin!4v1631234567890"
						allowFullScreen=""
						loading="lazy"
					></iframe>
				</div>
			</RevealComponent>

			<FaqSection />
		</Layout>
	);
};

export default Contact;
