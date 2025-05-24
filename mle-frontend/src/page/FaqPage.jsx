import { Helmet } from "react-helmet";
import Layout from "../Layout";
import PageBreadcrumb from "../components/PageBreadcrumb";
import FaqSection from "../components/FaqSection";
import CTACentered from "../components/CTA/CTACentered";

const FaqPage = () => {
	return (
		<>
			<Helmet>
				<title>FAQ - Mega Links Enterprises</title>
				<meta
					name="description"
					content="Frequently Asked Questions about Mega Links Enterprises"
				/>
				<meta
					name="keywords"
					content="Mega Links Enterprises, FAQ, Frequently Asked Questions, General Order Supplier, Government Contracting"
				/>
			</Helmet>
			<Layout>
				<PageBreadcrumb
					pageTitle={"Assistance to Customers"}
					pageName={"Frequently Asked Question"}
				/>
				<FaqSection />
				<CTACentered link={"/contact"} />
			</Layout>
		</>
	);
};

export default FaqPage;
