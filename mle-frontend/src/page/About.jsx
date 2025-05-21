import Layout from "../Layout";
import CTACentered from "../components/CTA/CTACentered";
import PageBreadcrumb from "../components/PageBreadcrumb";
import AboutPage_Section1 from "../components/AboutPage/AboutPage_Section1";
import AboutPage_Section2 from "../components/AboutPage/AboutPage_Section2";
import OurTeam from "../components/AboutPage/OurTeam";

const About = () => {
	return (
		<Layout>
			<PageBreadcrumb pageName={"About Us"} pageTitle={"Our Company"} />

			<AboutPage_Section1 />

			<AboutPage_Section2 />

			<OurTeam />

			<CTACentered link={"/project-requirement"} />
		</Layout>
	);
};

export default About;
