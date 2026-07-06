import Image from "next/image";
import { projects } from "@/lib/constants";
import { Calendar, Link } from "lucide-react";

const ICON_SIZE = 16;
const TECT_ICON_SIZE = 20;

const ProjectsView = () => {
	const projectList = projects.map((p) => p.title);

	const scrollToProject = (id: string) => {
		const section = document.getElementById(id);
		if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	return (
		<div className="flex flex-col h-full">
			<p className="text-4xl">Projects</p>

			<div className="flex flex-row gap-10 mt-10 flex-1 min-h-0">
				<div className="flex flex-col gap-2 w-1/5">
					{projectList.map((name) => (
						<button
							type="button"
							key={name}
							className="hover:bg-white hover:text-mauve-900 hover:cursor-pointer
										transition ease-in text-left"
							onClick={() => scrollToProject(name)}
						>
							{name}
						</button>
					))}
				</div>

				<div className="w-4/5 overflow-y-auto min-h-0 scrollbar-none flex flex-col gap-20">
					{projects.map((project) => (
						<div key={project.title} id={project.title} className="flex flex-col gap-5">
							<div className="text-4xl">{project.title}</div>
							<div className="flex flex-row items-center gap-5 text-sm">
								<div className="flex flex-row items-center gap-1">
									<Calendar size={ICON_SIZE} /> {project.date}
								</div>

								<a
									href={project.github}
									target="_blank"
									rel="noopener"
									className="flex flex-row items-center gap-1 
									hover:underline"
								>
									<Image
										src="/icons/github.svg"
										alt="github"
										width={ICON_SIZE}
										height={ICON_SIZE}
									/>{" "}
									View Github
								</a>

								{project.link && (
									<a
										href={project.link}
										target="_blank"
										rel="noopener"
										className="flex flex-row items-center gap-1 
										hover:underline"
									>
										<Link size={ICON_SIZE} /> Live Link
									</a>
								)}
							</div>

							<div className="flex justify-center">
								<Image src={project.image} alt={project.title} width={600} />
							</div>

							<div className="text-justify">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia magni nemo ad, velit,
								odio dolorem id facere itaque minima vero ipsa molestias eligendi nisi eos non a
								adipisci, quidem quam?
							</div>

							<div>
								<div>Built With:</div>
								<div className="flex flex-row flex-wrap gap-5 mt-1">
									{project.technologies.map((tech) => (
										<div key={tech.name} className="flex flex-row items-center gap-1">
											<Image
												src={tech.icon}
												alt={tech.name}
												width={TECT_ICON_SIZE}
												height={TECT_ICON_SIZE}
											/>
											{tech.name}
										</div>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectsView;
