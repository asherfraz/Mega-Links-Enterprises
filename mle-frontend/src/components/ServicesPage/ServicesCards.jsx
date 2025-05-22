import { image } from "framer-motion/client";
import RevealComponent from "../RevealComponent";

const ServicesCards = () => {
	// const services = [
	// 	{
	// 		image:
	// 			"https://mega-links-enterprises.netlify.app/images/portfolio/1.jpg",
	// 		title: "Power Tools",
	// 		description: "Shaping the future of technology with creativity.",
	// 	},
	// 	{
	// 		image:
	// 			"https://mega-links-enterprises.netlify.app/images/portfolio/2.jpg",
	// 		title: "Circuits & Micro-controllers",
	// 		description: "Hardware",
	// 	},
	// 	{
	// 		image:
	// 			"https://mega-links-enterprises.netlify.app/images/portfolio/3.jpg",
	// 		title: "Desktops & Laptops",
	// 		description: "",
	// 	},
	// 	{
	// 		image:
	// 			"https://mega-links-enterprises.netlify.app/images/portfolio/4.jpg",
	// 		title: "Fabrications",
	// 		description: "",
	// 	},
	// 	{
	// 		image:
	// 			"https://mega-links-enterprises.netlify.app/images/portfolio/5.jpg",
	// 		title: "Building Material",
	// 		description: "",
	// 	},
	// 	{
	// 		image:
	// 			"https://mega-links-enterprises.netlify.app/images/portfolio/6.jpg",
	// 		title: "Wooden Material",
	// 		description: "",
	// 	},
	// 	{
	// 		image:
	// 			"https://mega-links-enterprises.netlify.app/images/portfolio/7.jpg",
	// 		title: "Hardware Tools",
	// 		description: "",
	// 	},
	// 	{
	// 		image:
	// 			"https://mega-links-enterprises.netlify.app/images/portfolio/8.jpg",
	// 		title: "Sanitary Parts",
	// 		description: "",
	// 	},
	// 	{
	// 		image:
	// 			"https://mega-links-enterprises.netlify.app/images/portfolio/9.jpg",
	// 		title: "Networking & Communication",
	// 		description: "",
	// 	},
	// 	{
	// 		image:
	// 			"https://images.unsplash.com/photo-1590613607026-15c463e30ca5?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	// 		title: "CCtv & Surveillance",
	// 		description: "Ensuring safety and security with technology.",
	// 	},
	// 	{
	// 		image:
	// 			"https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	// 		title: "Software & Website Development",
	// 		description:
	// 			"Custom software solutions and responsive websites for your business.",
	// 	},
	// 	{
	// 		image: "",
	// 		title: "Networking & Communication",
	// 		description: "",
	// 	},
	// ];

	const services = [
		// 🛠️ Hardware Tools & Materials
		{
			image:
				"https://mega-links-enterprises.netlify.app/images/portfolio/1.jpg",
			title: "Power Tools",
			description: "High-performance tools for industrial and home projects.",
		},
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
				"https://mega-links-enterprises.netlify.app/images/portfolio/6.jpg",
			title: "Wooden Materials",
			description: "Quality wood products for furniture and construction.",
		},
		{
			image:
				"https://mega-links-enterprises.netlify.app/images/portfolio/4.jpg",
			title: "Fabrication Services",
			description: "Custom metal work and structural fabrications.",
		},
		{
			image:
				"https://mega-links-enterprises.netlify.app/images/portfolio/8.jpg",
			title: "Sanitary Equipment",
			description: "Modern fittings and parts for clean water systems.",
		},
		{
			image:
				"https://images.unsplash.com/photo-1629195354259-fe4ff202c8e3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			title: "Paints & Finishes",
			description: "Interior and exterior paints for all surfaces.",
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
				"https://mega-links-enterprises.netlify.app/images/portfolio/2.jpg",
			title: "Circuits & Micro-Controllers",
			description: "Electronic components for embedded system development.",
		},
		{
			image:
				"https://mega-links-enterprises.netlify.app/images/portfolio/9.jpg",
			title: "Networking Equipment",
			description: "Reliable solutions for network and data communication.",
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
			<div className="flex flex-col items-start justify-start mb-8 px-4">
				<h2 className="text-4xl font-bold text-left dark:text-white border-b-2 border-blue-600 dark:border-b-2 dark:border-yellow-600">
					Services
				</h2>
				<p className="text-gray-700 dark:text-gray-300 my-4 w-2/3">
					We are a leading supplier of hardware tools, building materials, and
					technology solutions. Our commitment to quality and customer
					satisfaction sets us apart in the industry.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{services.map((service, index) => (
					<div
						key={index}
						className="w-full max-w-md mx-auto rounded-2xl shadow-2xl overflow-hidden transform transition-all"
					>
						<div
							className="relative h-96 bg-cover bg-center  group"
							style={{
								backgroundImage: `url('${service.image}')`,
							}}
						>
							{/* Gradient overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-100  group-hover:opacity-50 md:opacity-0 transition duration-300"></div>

							{/* Text appears on hover */}
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
				))}
			</div>
		</RevealComponent>
	);
};

export default ServicesCards;
