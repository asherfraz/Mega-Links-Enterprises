import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
	const { path } = useLocation();
	let onTop = true;

	const flyToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		const handleScroll = () => {
			onTop = window.scrollY === 0;
			const div = document.querySelector(".onTopDiv");
			if (div) {
				div.style.display = onTop ? "none" : "block";
			}
		};

		window.addEventListener("scroll", handleScroll);

		flyToTop();
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [path]);

	return (
		<div
			className="onTopDiv fixed bottom-2 right-2 z-50 p-2 hover:bg-amber-400 rounded-full"
			onClick={() => flyToTop()}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="size-5 hover:text-black"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
				/>
			</svg>
		</div>
	);
};

export default ScrollToTop;
