import React from "react";
import Layout from "../Layout";
import RevealComponent from "../components/RevealComponent";
import Hero from "../components/Hero";
import FloatingText from "../components/FloatingText";
import CTACentered from "../components/CTA/CTACentered";
import FaqSection from "../components/FaqSection";

const Contact = () => {
	return (
		<Layout>
			<RevealComponent>
				<FloatingText />
			</RevealComponent>

			<FaqSection />
		</Layout>
	);
};

export default Contact;
