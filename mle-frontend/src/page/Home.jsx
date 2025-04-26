import React from "react";
import Layout from "../Layout";
import Hero from "../components/Hero";
import FloatingText from "../components/FloatingText";
import AboutSectionHome from "../components/AboutSectionHome";
import CompaniesGrid from "../components/CompaniesGrid";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";
import RevealComponent from "../components/RevealComponent";
import CTACentered from "../components/CTA/CTACentered";
import CTALeftAligned from "../components/CTA/CTALeftAligned";

const Home = () => {
	return (
		<Layout>
			<Hero />

			<RevealComponent >
				<AboutSectionHome />
			</RevealComponent>

			<RevealComponent >
				<CompaniesGrid />
			</RevealComponent>


			<RevealComponent >
				<ServicesSection />
			</RevealComponent>


			<RevealComponent >
				<FloatingText />
			</RevealComponent>


			<RevealComponent >
				<TestimonialsSection />
			</RevealComponent>


			<RevealComponent >
				<FaqSection />
			</RevealComponent>


			<CTACentered />
			<CTALeftAligned />

		</Layout>
	);
};

export default Home;
