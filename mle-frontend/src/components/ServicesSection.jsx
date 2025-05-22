import { Link } from "react-router";
import RevealComponent from "./RevealComponent";

const ServicesSection = () => {
	const services = [
		// 🛠️ Hardware Tools & Materials
		{
			image:
				"https://mega-links-enterprises.netlify.app/images/portfolio/7.jpg",
			title: "Hand & Hardware Tools",
			description: "Reliable tools for construction and repair work.",
		},
		{
			image:
				"https://mega-links-enterprises.netlify.app/images/portfolio/5.jpg",
			title: "Building Materials",
			description: "Construction essentials for strong, lasting structures.",
		},
		{
			image:
				"https://images.unsplash.com/photo-1680796941971-d006a668fb2c?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			title: "Tiles, Pipes & Fittings",
			description: "Flooring tiles and plumbing essentials delivered reliably.",
		},

		// 💻 Technology & Electronics
		{
			image:
				"https://mega-links-enterprises.netlify.app/images/portfolio/3.jpg",
			title: "Computers & Accessories",
			description: "Desktops, laptops, and supporting computer accessories.",
		},
		{
			image:
				"https://images.unsplash.com/photo-1590613607026-15c463e30ca5?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			title: "CCTV & Surveillance",
			description: "Protecting spaces with modern camera surveillance systems.",
		},

		// 🌐 Software & Digital Services
		{
			image:
				"https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			title: "Web & Software Development",
			description: "Scalable software and websites tailored for businesses.",
		},
	];

	return (
		<RevealComponent>
			<div className="flex flex-col items-center justify-center ">
				<h2 className="text-4xl font-bold text-center dark:text-white">
					Services
				</h2>
				<p className="pt-6 pb-8 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
					Delivering quality products and solutions to government and private
					sectors.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{services.map((service, index) => (
					<RevealComponent key={index} noPadding="true" card="true">
						<div
							key={index}
							className="w-full max-w-md mx-auto rounded-2xl shadow-2xl overflow-hidden transform transition-all"
						>
							<div className="relative h-64 group overflow-hidden">
								<img
									src={service.image}
									alt={service.title}
									loading="lazy"
									className="object-cover object-center w-full h-full"
								/>
								{/* Gradient overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-100 md:opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out"></div>

								{/* Text on hover */}
								<div className="absolute inset-0 p-6 flex flex-col justify-end opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<h2 className="text-3xl font-bold text-white leading-tight">
										{service.title}
									</h2>
									<p className="text-lg text-white opacity-80">
										{service.description}
									</p>
								</div>
							</div>
						</div>
					</RevealComponent>
				))}
			</div>
			<div className="flex flex-col items-center justify-center mt-8">
				<Link
					to="/services"
					className="inline-flex  hover:bg-blue-600 border-0 py-1 px-3 sm:py-2 sm:px-6 rounded-full text-lg  hover:text-white  text-blue-400 dark:hover:text-white transition focus:outline-none  duration-100"
				>
					See All Services
				</Link>
			</div>
		</RevealComponent>
	);
};

export default ServicesSection;
