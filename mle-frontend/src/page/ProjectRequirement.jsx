import Layout from "../Layout";
import CTACentered from "../components/CTA/CTACentered";
import PageBreadcrumb from "../components/PageBreadcrumb";
import FaqSection from "../components/FaqSection";

const ProjectRequirement = () => {
	return (
		<Layout>
			<PageBreadcrumb
				pageName={"Project Requirement"}
				pageTitle={"Hardcode Your Needs Here !"}
			/>

			<FaqSection />
			<CTACentered />
		</Layout>
	);
};

export default ProjectRequirement;
