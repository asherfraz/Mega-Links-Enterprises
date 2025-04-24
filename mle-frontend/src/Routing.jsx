import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "./page/Home";
import Layout from "./Layout";
import NotFound from "./page/NotFound";

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
		element: <Layout>About</Layout>,
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
		path: "/services",
		element: <Layout>Services</Layout>,
	},
	{
		path: "/contact",
		element: <Layout>Contact</Layout>,
	},
]);

export default router;
