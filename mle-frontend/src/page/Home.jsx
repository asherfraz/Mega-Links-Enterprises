import React from "react";
import Layout from "../Layout";
import Hero from "../components/Hero";
import FloatingText from "../components/FloatingText";
import AboutAcordian from "../components/AboutAcordian";
import CompaniesGrid from "../components/CompaniesGrid";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";
import RevealComponent from "../components/RevealComponent";

const Home = () => {
	return (
		<Layout>
			<Hero />

			<RevealComponent >
				<AboutAcordian />
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
			{/* <FaqSection /> */}


		</Layout>
	);
};

export default Home;
