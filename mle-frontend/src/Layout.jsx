import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./helper/ScrollToTop";

const Layout = ({ children }) => {
	return (
		<div className="min-w-full min-h-screen flex flex-col bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
			<ScrollToTop />
			<Navbar />
			<main className=" dark:bg-gray-800">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
