import Layout from "../Layout";
import CTACentered from "../components/CTA/CTACentered";
import PageBreadcrumb from "../components/PageBreadcrumb";
import AboutPage_Section1 from "../components/AboutPage/AboutPage_Section1";
import AboutPage_Section2 from "../components/AboutPage/AboutPage_Section2";
import OurTeam from "../components/AboutPage/OurTeam";
import { Helmet } from "react-helmet";

const About = () => {
	return (
		<>
			<Helmet>
				<title>About Us - Mega Links Enterprises</title>
				<meta
					name="description"
					content="Learn about Mega Links Enterprises, our mission, vision, and the dedicated team behind our success in government contracting and general order supply."
				/>
				<meta
					name="keywords"
					content="about us, Mega Links Enterprises, government contracting, general order supply"
				/>
				<link rel="canonical" href="/about" />
			</Helmet>
			<Layout>
				<PageBreadcrumb pageName={"About Us"} pageTitle={"Our Company"} />

				<AboutPage_Section1 />

				<AboutPage_Section2 />

				<OurTeam />

				<CTACentered link={"/project-requirement"} />
			</Layout>
		</>
	);
};

export default About;
