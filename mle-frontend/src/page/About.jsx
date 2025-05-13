import React from "react";
import Layout from "../Layout";
import RevealComponent from "../components/RevealComponent";
import Hero from "../components/Hero";
import FloatingText from "../components/FloatingText";
import AboutSectionHome from "../components/AboutSectionHome";
import CompaniesGrid from "../components/CompaniesGrid";
import ServicesSection from "../components/ServicesSection";
import CTACentered from "../components/CTA/CTACentered";
import CTALeftAligned from "../components/CTA/CTALeftAligned";
import PageBreadcrumb from "../components/PageBreadcrumb";

const About = () => {
	return (
		<Layout>
			<PageBreadcrumb pageName={"About Us"} pageTitle={"Our Company"} />

			<Hero />

			<RevealComponent>
				<AboutSectionHome />
			</RevealComponent>

			<RevealComponent>
				<CompaniesGrid />
			</RevealComponent>

			<RevealComponent>
				<FloatingText />
			</RevealComponent>

			<CTACentered />
		</Layout>
	);
};

export default About;
