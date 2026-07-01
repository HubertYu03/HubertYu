import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import NavLink from "../ui/NavLink";

gsap.registerPlugin(useGSAP);

const Interface = () => {
	const [time, setTime] = useState("");

	const headerRef = useRef(null);
	const navRef = useRef(null);
	const locationRef = useRef(null);

	useGSAP(() => {
		gsap.from(headerRef.current, { x: -20, y: -20, opacity: 0, delay: 0.5 });
		gsap.from(locationRef.current, { x: 20, y: -20, opacity: 0, delay: 0.5 });
		gsap.from(navRef.current, { x: -20, y: 20, opacity: 0, delay: 0.5 });
	});

	useEffect(() => {
		const update = () => {
			const now = new Date();
			const h = String(now.getHours()).padStart(2, "0");
			const m = String(now.getMinutes()).padStart(2, "0");
			const s = String(now.getSeconds()).padStart(2, "0");
			setTime(`${h}:${m}:${s}`);
		};

		update();
		const interval = setInterval(update, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="z-40 text-white p-5 absolute inset-0 select-none pointer-events-none">
			<div ref={headerRef} className="absolute top-5 left-5">
				<p className="text-8xl">Hubert Yu</p>
				<p className="text-4xl">Software Engineer</p>
			</div>

			<div ref={locationRef} className="absolute top-5 right-5 flex flex-col text-right">
				<p className="text-4xl">The Veloris Nebula</p>
				<p className="text-3xl">{time}</p>
			</div>

			<nav
				ref={navRef}
				className="absolute bottom-5 left-5 flex flex-col gap-5 pointer-events-auto"
			>
				<NavLink label="About Me" />
				<NavLink label="Experience" />
				<NavLink label="Projects" />
				<NavLink label="Contact" />
			</nav>
		</div>
	);
};

export default Interface;
