import React from "react";
import Layout from "../Layout";
import RevealComponent from "../components/RevealComponent";
import Hero from "../components/Hero";
import FloatingText from "../components/FloatingText";
import CTACentered from "../components/CTA/CTACentered";
import PageBreadcrumb from "../components/PageBreadcrumb";

const Services = () => {
	return (
		<Layout>
			<PageBreadcrumb pageName={"Our services"} pageTitle={"What We Do !"} />
			<Hero />

			<RevealComponent>
				<FloatingText />
			</RevealComponent>

			<CTACentered />
		</Layout>
	);
};

export default Services;
