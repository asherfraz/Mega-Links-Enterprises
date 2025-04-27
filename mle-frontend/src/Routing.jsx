import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "./page/Home";
import Layout from "./Layout";
import NotFound from "./page/NotFound";
import About from "./page/About";
import ProjectRequirement from "./page/ProjectRequirement";
import Services from "./page/Services";
import Contact from "./page/Contact";

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
		children: [
			// portfolio component
			{
				path: "portfolio",
				element: <Layout>Portfolio</Layout>,
			},
			// Our Team Component
			{
				path: "our-team",
				element: <Layout>Our Team</Layout>,
			},
		],
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
		element: <NotFound />,
	},
]);

export default router;
