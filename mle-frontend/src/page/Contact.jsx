import Layout from "../Layout";
import { Helmet } from "react-helmet";
import FaqSection from "../components/FaqSection";
import PageBreadcrumb from "../components/PageBreadcrumb";
import ContactAddress from "../components/ContactPage/ContactAddress";
import ContactForm from "../components/ContactPage/ContactForm";

const Contact = () => {
	return (
		<>
			<Helmet>
				<title>Contact Us - Mega Links Enterprises</title>
				<meta
					name="description"
					content="Get in touch with Mega Links Enterprises for inquiries, support, or feedback. We are here to assist you."
				/>
				<meta
					name="keywords"
					content="contact, support, inquiries, Mega Links Enterprises"
				/>
				<link rel="canonical" href="/contact" />
			</Helmet>
			<Layout>
				<PageBreadcrumb pageName={"Contact Us"} pageTitle={"Get In Touch"} />

				{/* ContactAddress: address info + google maps location */}
				<ContactAddress />
				{/* ContactForm: Message Form with validation */}
				<ContactForm />

				<FaqSection />
			</Layout>
		</>
	);
};

export default Contact;
