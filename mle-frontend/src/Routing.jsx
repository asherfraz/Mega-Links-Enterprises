import { createBrowserRouter } from "react-router";
import Home from "./page/Home";
import NotFound from "./page/NotFound";
import About from "./page/About";
import ProjectRequirement from "./page/ProjectRequirement";
import Services from "./page/Services";
import Contact from "./page/Contact";
import FaqSection from "./components/FaqSection";
import Layout from "./Layout";
import CTACentered from "./components/CTA/CTACentered";
import PageBreadcrumb from "./components/PageBreadcrumb";
import TermsConditions from "./page/TermsConditions";
import PrivacyPolicy from "./page/PrivacyPolicy";
import FaqPage from "./page/FaqPage";

const router = createBrowserRouter([
	{
		// Error page
		path: "*",
		element: <NotFound />,
	},
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/about",
		element: <About />,
	},
	{
		path: "/project-requirement",
		element: <ProjectRequirement />,
	},
	{
		path: "/services",
		element: <Services />,
	},
	{
		path: "/contact",
		element: <Contact />,
	},
	// Other Company Legal links
	{
		path: "/terms-and-conditions",
		element: <TermsConditions />,
	},
	{
		path: "/privacy-policy",
		element: <PrivacyPolicy />,
	},
	{
		path: "/faq",
		element: <FaqPage />,
	},
]);

export default router;
