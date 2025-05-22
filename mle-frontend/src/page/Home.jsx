import React from "react";
import Layout from "../Layout";
import Hero from "../components/Hero";
import FloatingText from "../components/FloatingText";
import AboutSectionHome from "../components/AboutSectionHome";
import CompaniesGrid from "../components/CompaniesGrid";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import RevealComponent from "../components/RevealComponent";
import CTALeftAligned from "../components/CTA/CTALeftAligned";

const Home = () => {
	return (
		<Layout>
			<Hero />

			<AboutSectionHome />

			<CompaniesGrid />

			<ServicesSection />

			<RevealComponent>
				<FloatingText />
			</RevealComponent>

			<FaqSection />
			<CTALeftAligned />
		</Layout>
	);
};

export default Home;
