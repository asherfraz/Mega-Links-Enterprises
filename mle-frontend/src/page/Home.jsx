import Layout from "../Layout";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import FloatingText from "../components/FloatingText";
import AboutSectionHome from "../components/AboutSectionHome";
import CompaniesGrid from "../components/CompaniesGrid";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import RevealComponent from "../components/RevealComponent";
import CTALeftAligned from "../components/CTA/CTALeftAligned";

const Home = () => {
	return (
		<>
			<Helmet>
				<title>Home - Mega Links Enterprises</title>
				<meta
					name="description"
					content="Welcome to Mega Links Enterprises, your trusted partner in government contracting and general order supply. Explore our services and learn more about us."
				/>
				<meta
					name="keywords"
					content="home, Mega Links Enterprises, government contracting, general order supply"
				/>
				<link rel="canonical" href="/" />
			</Helmet>
			<Layout>
				<Hero />

				<AboutSectionHome />

				<CompaniesGrid />

				<ServicesSection />

				<RevealComponent>
					<FloatingText />
				</RevealComponent>

				<FaqSection />
				<CTALeftAligned />
			</Layout>
		</>
	);
};

export default Home;
