import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "./page/Home";
import Layout from "./Layout";

const router = createBrowserRouter([
	{
		// Error page
		path: "*",
		element: <Home />,
	},
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/about",
		element: <Layout>About</Layout>,
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
