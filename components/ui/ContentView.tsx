import { useContent } from "@/lib/store/ContentStore";
import { X } from "lucide-react";

import AboutView from "./content_views/AboutView";
import ExperienceView from "./content_views/ExperienceView";

const ContentView = () => {
	const contentId = useContent((state) => state.currentContent);
	const switchContentView = useContent((state) => state.switchContentView);

	return (
		<div className="border-2 bg-mauve-900/75 p-5 w-3xl pointer-events-auto">
			<div className="flex justify-end">
				<button
					type="button"
					className="hover:bg-white hover:text-mauve-900 hover:cursor-pointer transition ease-in"
					onClick={switchContentView}
				>
					<X />
				</button>
			</div>
			{contentId === "about_me" && <AboutView />}
			{contentId === "experience" && <ExperienceView />}
		</div>
	);
};

export default ContentView;
