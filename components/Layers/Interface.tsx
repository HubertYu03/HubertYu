import { useEffect, useState } from "react";
import NavLink from "../ui/NavLink";

const Interface = () => {
	const [time, setTime] = useState("");

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
		<div className="z-40 text-white p-5 absolute select-none">
			<div className="p-1">
				<p className="text-8xl">Hubert Yu</p>
				<p className="text-4xl">The Veloris Nebula</p>
				<p className="text-3xl">{time}</p>
			</div>

			<nav className="flex flex-col gap-5 mt-30">
				<NavLink label="About Me" />
				<NavLink label="Experience" />
				<NavLink label="Projects" />
				<NavLink label="Contact" />
			</nav>
		</div>
	);
};

export default Interface;
