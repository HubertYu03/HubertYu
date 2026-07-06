import { useRef } from "react";
import { useContent } from "@/lib/store/ContentStore";
import { X } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AboutView from "./AboutView";
import ExperienceView from "./ExperienceView";
import ProjectsView from "./ProjectsView";
import ContactView from "./ContactView";

const ContentView = () => {
	const contentRef = useRef<HTMLDivElement>(null);
	const contentId = useContent((state) => state.currentContent);
	const switchContentView = useContent((state) => state.switchContentView);

	useGSAP(
		() => {
			gsap.fromTo(
				contentRef.current,
				{ opacity: 0 },
				{ opacity: 1, duration: 0.3, ease: "power1.out" },
			);
		},
		{ dependencies: [contentId], revertOnUpdate: true },
	);

	const handleClose = () => {
		switchContentView();
	};

	return (
		<div className="border-2 bg-mauve-900/75 p-5 w-5xl pointer-events-auto">
			<div className="flex justify-end">
				<button
					type="button"
					className="hover:bg-white hover:text-mauve-900 hover:cursor-pointer transition ease-in"
					onClick={handleClose}
				>
					<X />
				</button>
			</div>
			<div ref={contentRef} className="h-[80vh]">
				{contentId === "about_me" && <AboutView />}
				{contentId === "experience" && <ExperienceView />}
				{contentId === "projects" && <ProjectsView />}
				{contentId === "contact" && <ContactView />}
			</div>
		</div>
	);
};

export default ContentView;
