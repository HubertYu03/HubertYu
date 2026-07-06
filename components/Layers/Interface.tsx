import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useSound from "use-sound";

import NavLink from "../ui/NavLink";
import { Volume2, VolumeOff } from "lucide-react";
import { useContent } from "@/lib/store/ContentStore";
import ContentView from "../ui/content_views/ContentView";

gsap.registerPlugin(useGSAP);

const Interface = () => {
	const [start, setStart] = useState(false);
	const [musicPlaying, setMusicPlaying] = useState(true);

	const [hideHeader, setHideHeader] = useState(false);
	const [hideContent, setHideContent] = useState(true);

	const contentView = useContent((state) => state.contentView);
	const setContent = useContent((state) => state.setContent);

	const [play, { pause }] = useSound("/sounds/ambience.mp3", {
		loop: true,
		volume: 0.05,
		playbackRate: 0.5,
	});

	const container = useRef(null);
	const blackScreenRef = useRef(null);

	const { contextSafe } = useGSAP(
		() => {
			if (contentView) {
				setTimeout(() => {
					gsap.from(".animate-content", { opacity: 0, y: 20, duration: 0.5 });
				}, 0);
			}

			if (!contentView && start) {
				setHideHeader(false);
				setTimeout(() => {
					gsap.to(".animate-header", {
						opacity: 1,
						duration: 0.3,
					});
				}, 0);
			}
		},
		{ dependencies: [contentView], scope: container },
	);

	useEffect(() => {
		const removeHeader = contextSafe(() => {
			gsap.to(".animate-header", {
				opacity: 0,
				duration: 0.3,
				onComplete: () => setHideHeader(true),
			});
		});

		const removeContent = contextSafe(() => {
			gsap.to(".animate-content", {
				opacity: 0,
				y: 20,
				duration: 0.3,
				onComplete: () => {
					setHideContent(true);
					setContent("");
				},
			});
		});

		if (contentView) {
			removeHeader();
			setHideContent(false);
		}

		if (!contentView && !hideContent) removeContent();
	}, [contentView, hideContent, contextSafe, setContent]);

	const handleEnter = () => {
		play();
		const tl = gsap.timeline();

		tl.to(blackScreenRef.current, {
			opacity: 0,
			duration: 1,
			display: "none",
			onComplete: () => setStart(true),
		})
			.to(".animate-header", { opacity: 1, duration: 0.6 }, "+=0.5")
			.fromTo(".animate-nav", { y: -20 }, { x: 0, y: 0, opacity: 1, duration: 0.6 }, "<");
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
		<div ref={container} className="z-40 text-white">
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
						disabled={start}
					>
						Enter
					</button>
				</div>
			)}

			<div className="p-5 absolute inset-0 select-none pointer-events-none">
				<div className="animate-nav absolute top-5 right-5 pointer-events-auto opacity-0">
					<button
						type="button"
						className={`hover:bg-white hover:text-mauve-900 hover:cursor-pointer
						transition ease-in w-fit p-1 ${!musicPlaying && "bg-white text-mauve-900"}`}
						onClick={toggleMusic}
					>
						{musicPlaying ? <Volume2 size={40} /> : <VolumeOff size={40} />}
					</button>
				</div>

				<div className="flex flex-col justify-between items-center h-full p-2">
					<nav className="animate-nav top-5 flex flex-row gap-15 pointer-events-auto opacity-0">
						<NavLink label="About Me" contentId="about_me" />
						<NavLink label="Experience" contentId="experience" />
						<NavLink label="Projects" contentId="projects" />
						<NavLink label="Contact" contentId="contact" />
					</nav>

					{!hideHeader && (
						<div className="animate-header opacity-0 flex flex-col items-center">
							<p className="text-[11vw]">Hubert Yu</p>
							<p className="text-4xl">Software Engineer</p>
						</div>
					)}

					{!hideContent && (
						<div className="animate-content absolute top-20">
							<ContentView />
						</div>
					)}

					<div className="animate-header text-right pointer-events-auto opacity-0">
						<p>Created by Hubert Yu | Psalm 19:1</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Interface;
