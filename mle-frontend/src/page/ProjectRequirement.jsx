import React from "react";
import Layout from "../Layout";
import RevealComponent from "../components/RevealComponent";
import FloatingText from "../components/FloatingText";
import CTACentered from "../components/CTA/CTACentered";
import PageBreadcrumb from "../components/PageBreadcrumb";

const ProjectRequirement = () => {
	return (
		<Layout>
			<PageBreadcrumb
				pageName={"Project Requirement"}
				pageTitle={"Hardcode Your Needs Here !"}
			/>
			<RevealComponent>
				<FloatingText />
			</RevealComponent>

			<CTACentered />
		</Layout>
	);
};

export default ProjectRequirement;
