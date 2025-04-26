import React from "react";
import Layout from "../Layout";
import RevealComponent from "../components/RevealComponent";
import FloatingText from "../components/FloatingText";
import CTACentered from "../components/CTA/CTACentered";

const ProjectRequirement = () => {
	return (
		<Layout>
			<RevealComponent>
				<FloatingText />
			</RevealComponent>

			<CTACentered />
		</Layout>
	);
};

export default ProjectRequirement;
