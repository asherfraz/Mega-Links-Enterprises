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
		element: <NotFound />,
	},
	{
		path: "/privacy-policy",
		element: <NotFound />,
	},
	{
		path: "/faq",
		element: (
			<Layout>
				<PageBreadcrumb
					pageTitle={"Assistance to Customers"}
					pageName={"Frequently Asked Question"}
				/>
				<FaqSection />
				<CTACentered link={"/contact"} />
			</Layout>
		),
	},
]);

export default router;
