import React from "react";
import RevealComponent from "../components/RevealComponent";

const FaqSection = () => {
	const faqs = {
		"What services does Mega Links Enterprises provide?":
			"Mega Links Enterprises offers end-to-end solutions in IT, Telecom, Civil Works, Software & Web Development, and Government Contracting. We also provide project consultancy and technical support.",

		"Since when has Mega Links Enterprises been operating?":
			"Mega Links Enterprises was established in 2010 and has been delivering professional engineering and technology solutions across Pakistan for over a decade.",

		"Is Mega Links Enterprises a government-registered contractor?":
			"Yes, we are a registered Government Contractor and General Order Supplier, authorized to participate in public-sector tenders and projects.",

		// "Can you handle large-scale civil or telecom infrastructure projects?":
		// 	"Absolutely. Our experienced team and strong network of professionals are equipped to manage both small and large-scale infrastructure projects, including telecom installations and civil works.",

		// "Do you offer custom software or web development solutions?":
		// 	"Yes, we develop customized software, websites, and web applications tailored to your business needs — from planning to deployment and ongoing support.",

		// "In which regions do you operate?":
		// 	"We operate across Pakistan, with regional teams available to support projects in all major provinces and cities.",

		"How can I request a quote or consultation?":
			"You can visit our Contact page to submit your project requirements or directly call us. Our team will get in touch with you for a free consultation.",

		"What industries do you work with?":
			"We serve a wide range of sectors including government, telecom, healthcare, construction, and IT enterprises.",

		// "Do you provide after-sale or post-project support?":
		// 	"Yes, we offer complete post-project support, maintenance, and technical assistance to ensure your systems run smoothly.",

		"Why should we choose Mega Links Enterprises?":
			"With 13+ years of experience, a dedicated team, and a strong track record of successful projects, we deliver reliable, timely, and cost-effective solutions tailored to your needs.",
	};

	return (
		<RevealComponent>
			<h2 id="faq" className="text-4xl font-bold text-center  dark:text-white">
				Frequently Asked Questions
			</h2>
			<p className="pt-4 pb-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
				Answered all frequently asked questions, Still confused? feel free to
				contact us.
			</p>
			<div className="container w-full max-w-2xl mx-auto">
				{Object.entries(faqs).map(([question, answer], index) => (
					<details
						className="border-b-2 border-sky-400 dark:border-amber-400 cursor-pointer py-2 transition-all duration-300 ease-in-out"
						key={index}
					>
						<summary className="font-bold text-lg text-gray-800 dark:text-white transition-all duration-300 ease-in-out">
							{/* What is our working process? */}
							{question}
						</summary>
						<div className="md:pl-4 text-base text-justify dark:text-gray-300">
							{answer}
						</div>
					</details>
				))}
			</div>
		</RevealComponent>
	);
};

export default FaqSection;
