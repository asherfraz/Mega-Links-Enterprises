import Layout from "../Layout";
import CTACentered from "../components/CTA/CTACentered";
import PageBreadcrumb from "../components/PageBreadcrumb";
import FaqSection from "../components/FaqSection";
import ProjectRequirementForm from "../components/PRPage/ProjectRequirementForm";
import { Helmet } from "react-helmet";

const ProjectRequirement = () => {
	return (
		<>
			<Helmet>
				<title>Project Requirement - Mega Links Enterprises</title>
				<meta
					name="description"
					content="Submit your project requirements to Mega Links Enterprises. We are here to assist you with your government contracting and general order supply needs."
				/>
				<meta
					name="keywords"
					content="project requirement, Mega Links Enterprises, government contracting, general order supply"
				/>
				<link rel="canonical" href="/project-requirement" />
			</Helmet>
			<Layout>
				<PageBreadcrumb
					pageName={"Project Requirement"}
					pageTitle={"Submit Your Project Details!"}
				/>

				<ProjectRequirementForm />

				<FaqSection />
				{/* <CTACentered /> */}
			</Layout>
		</>
	);
};

export default ProjectRequirement;
