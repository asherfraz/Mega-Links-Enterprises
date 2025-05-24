import { Helmet } from "react-helmet";
import Layout from "../Layout";
import CTACentered from "../components/CTA/CTACentered";
import PageBreadcrumb from "../components/PageBreadcrumb";
import ServicesCards from "../components/ServicesPage/ServicesCards";

const Services = () => {
	return (
		<>
			<Helmet>
				<title>Our Services - Mega Links Enterprises</title>
				<meta
					name="description"
					content="Explore the diverse range of services offered by Mega Links Enterprises, your trusted partner in government contracting and general order supply."
				/>
				<meta
					name="keywords"
					content="services, government contracting, general order supply, Mega Links Enterprises"
				/>
				<link rel="canonical" href="/services" />
			</Helmet>
			<Layout>
				<PageBreadcrumb pageName={"Our services"} pageTitle={"What We Do !"} />

				<ServicesCards />

				<CTACentered link={"/project-requirement"} />
			</Layout>
		</>
	);
};

export default Services;
