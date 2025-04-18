import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
	return (
		<div className="w-full h-screen ">
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
