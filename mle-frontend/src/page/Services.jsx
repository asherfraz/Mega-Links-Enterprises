import Layout from "../Layout";
import CTACentered from "../components/CTA/CTACentered";
import PageBreadcrumb from "../components/PageBreadcrumb";
import ServicesCards from "../components/ServicesPage/ServicesCards";

const Services = () => {
	return (
		<Layout>
			<PageBreadcrumb pageName={"Our services"} pageTitle={"What We Do !"} />

			<ServicesCards />

			<CTACentered link={"/project-requirement"} />
		</Layout>
	);
};

export default Services;
