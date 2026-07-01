import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useSound from "use-sound";

import NavLink from "../ui/NavLink";
import { Volume2, VolumeOff } from "lucide-react";

gsap.registerPlugin(useGSAP);

const Interface = () => {
	const [start, setStart] = useState(false);
	const [musicPlaying, setMusicPlaying] = useState(true);

	const [play, { pause }] = useSound("/sounds/ambience.mp3", {
		loop: true,
		volume: 0.05,
		playbackRate: 0.5,
	});

	const blackScreenRef = useRef(null);

	const handleEnter = () => {
		play();
		const tl = gsap.timeline();

		tl.to(blackScreenRef.current, {
			opacity: 0,
			duration: 1,
			display: "none",
			onComplete: () => setStart(true),
		})
			.fromTo(
				".animate-header",
				{ x: -20, y: -20 },
				{ x: 0, y: 0, opacity: 1, duration: 0.6 },
				"+=0.5",
			)
			.fromTo(".animate-nav", { x: -20, y: 20 }, { x: 0, y: 0, opacity: 1, duration: 0.6 }, "<")
			.fromTo(
				".animate-music-toggle",
				{ x: 20, y: -20 },
				{ x: 0, y: 0, opacity: 1, duration: 0.6 },
				"<",
			)
			.fromTo(".animate-credits", { x: 20, y: 20 }, { x: 0, y: 0, opacity: 1, duration: 0.6 }, "<");
	};

	const toggleMusic = () => {
		if (musicPlaying) {
			setMusicPlaying(false);
			pause();
		} else {
			setMusicPlaying(true);
			play();
		}
	};

	return (
		<div className="z-40 text-white">
			{!start && (
				<div
					ref={blackScreenRef}
					className="absolute inset-0 w-screen h-screen bg-black flex justify-center items-center"
				>
					<button
						type="button"
						className="hover:bg-white hover:text-mauve-900 hover:cursor-pointer
                        text-3xl transition ease-in w-fit p-1"
						onClick={handleEnter}
					>
						Enter
					</button>
				</div>
			)}

			<div className="p-5 absolute inset-0 select-none pointer-events-none">
				<div className="animate-music-toggle absolute top-5 right-5 pointer-events-auto opacity-0">
					<button
						type="button"
						className={`hover:bg-white hover:text-mauve-900 hover:cursor-pointer
						transition ease-in w-fit p-1 ${!musicPlaying && "bg-white text-mauve-900"}`}
						onClick={toggleMusic}
					>
						{musicPlaying ? <Volume2 size={40} /> : <VolumeOff size={40} />}
					</button>
				</div>

				<div className="animate-header absolute top-5 left-5 opacity-0">
					<p className="text-8xl">Hubert Yu</p>
					<p className="text-4xl">Software Engineer</p>
				</div>

				<nav className="animate-nav absolute bottom-5 left-5 flex flex-col gap-5 pointer-events-auto opacity-0">
					<NavLink label="About Me" />
					<NavLink label="Experience" />
					<NavLink label="Projects" />
					<NavLink label="Contact" />
				</nav>

				<div className="animate-credits absolute bottom-5 right-5 text-right pointer-events-auto opacity-0">
					<p>Created by Hubert Yu</p>
					<p>Psalm 19:1</p>
				</div>
			</div>
		</div>
	);
};

export default Interface;
