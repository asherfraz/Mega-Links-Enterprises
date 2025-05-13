import Layout from "../Layout";
import RevealComponent from "../components/RevealComponent";
import FloatingText from "../components/FloatingText";
import FaqSection from "../components/FaqSection";
import PageBreadcrumb from "../components/PageBreadcrumb";

const Contact = () => {
	return (
		<Layout>
			<PageBreadcrumb pageName={"Contact Us"} pageTitle={"Get In Touch"} />
			<RevealComponent>
				<FloatingText />
			</RevealComponent>

			<FaqSection />
		</Layout>
	);
};

export default Contact;
