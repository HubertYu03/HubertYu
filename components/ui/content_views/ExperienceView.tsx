import { experiences } from "@/lib/constants";
import { Calendar, ClipboardList, MapPin } from "lucide-react";
import type React from "react";

const IconLabel = ({ children }: { children: React.ReactNode }) => {
	return <div className="text-sm flex flex-row items-center gap-1">{children}</div>;
};

const ExperienceView = () => {
	return (
		<div>
			<p className="text-4xl mb-10">Experience</p>

			<div className="flex flex-col gap-10">
				{experiences.map((experience) => (
					<div key={experience.company} className="flex flex-row gap-2">
						<div className="flex flex-col gap-2 w-1/3">
							<div className="text-2xl">{experience.company}</div>
							<IconLabel>
								<ClipboardList /> {experience.jobTitle}
							</IconLabel>
							<IconLabel>
								<MapPin /> {experience.location}
							</IconLabel>
							<IconLabel>
								<Calendar /> {experience.dates}
							</IconLabel>
						</div>

						<div className="flex flex-col gap-2 w-2/3 mt-1">
							{experience.bulletPoints.map((point) => (
								<div key={point}>➜ {point}</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ExperienceView;
