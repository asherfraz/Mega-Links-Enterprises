import React from "react";
import Layout from "../Layout";
import RevealComponent from "../components/RevealComponent";
import Hero from "../components/Hero";
import FloatingText from "../components/FloatingText";
import CTACentered from "../components/CTA/CTACentered";

const Services = () => {
	return (
		<Layout>
			<Hero />

			<RevealComponent>
				<FloatingText />
			</RevealComponent>

			<CTACentered />
		</Layout>
	);
};

export default Services;
