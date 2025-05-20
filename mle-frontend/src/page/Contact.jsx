import Layout from "../Layout";
import FaqSection from "../components/FaqSection";
import PageBreadcrumb from "../components/PageBreadcrumb";
import ContactAddress from "../components/ContactPage/ContactAddress";
import ContactForm from "../components/ContactPage/ContactForm";

const Contact = () => {
	return (
		<Layout>
			<PageBreadcrumb pageName={"Contact Us"} pageTitle={"Get In Touch"} />

			{/* ContactAddress: address info + google maps location */}
			<ContactAddress />
			{/* ContactForm: Message Form with validation */}
			<ContactForm />

			<FaqSection />
		</Layout>
	);
};

export default Contact;
