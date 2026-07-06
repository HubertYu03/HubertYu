import TheVoyageImage from "../public/images/theVoyage.png";

export const experiences = [
	{
		jobTitle: "Software Engineer",
		company: "Catapult CMS",
		dates: "Jan 2026 - Present",
		location: "Roseville, CA",
		bulletPoints: [
			`Engineered the data ingestion pipeline with React, TypeScript, 
            and Next.js for an AI school chatbot that helps students and 
            faculty navigate school resources and internal documents.`,
			`Built the server side data transformation workflow that normalizes 
            PDF, HTML, and DOC files into AI-readable documents so that the chatbot 
            can accurately answer questions.`,
			`Developed an admin dashboard enabling administrators to configure web crawler 
            settings, trigger crawl jobs, and monitor indexed resources.`,
		],
	},
	{
		jobTitle: "Software Engineer Intern",
		company: "UC Merced Civil Engineering",
		dates: "Jan 2025 - May 2025",
		location: "Merced, CA",
		bulletPoints: [
			`Developed an interactive web dashboard that transformed complex 
            gridded weather datasets into user-friendly visualizations, enabling 
            civil engineers to make more informed site-specific decisions.`,
			`Implemented the data retrieval backend that queries gridded weather 
            datasets to return wind, snow, and rainfall predictions for any 
            user-selected map location.`,
			`Integrated the Leaflet mapping library to build an interactive map 
            interface that communicates with the backend API to fetch and 
            display weather predictions.`,
		],
	},
];

export const projects = [
	{
		title: "The Voyage",
		link: "https://the-voyage-seven.vercel.app/",
		github: "https://github.com/HubertYu03/TheVoyage",
		image: TheVoyageImage,
		date: "Nov 2025",
		technologies: [
			{ name: "React", icon: "/icons/react.svg" },
			{ name: "Typescript", icon: "/icons/typescript.svg" },
			{ name: "React Three Fiber", icon: "/icons/threejs.svg" },
			{ name: "GSAP", icon: "/icons/gsap.svg" },
			{ name: "Tailwind", icon: "/icons/tailwind.svg" },
		],
		description: "",
	},
	{
		title: "Eventura Activity App",
		link: null,
		github: "https://github.com/HubertYu03/EventuraApp",
		image: TheVoyageImage,
		date: "Nov 2024 - Dec 2024",
		technologies: [
			{ name: "React Native", icon: "/icons/react.svg" },
			{ name: "Javascript", icon: "/icons/javascript.svg" },
			{ name: "Python", icon: "/icons/python.svg" },
			{ name: "Flask", icon: "/icons/flask.svg" },
			{ name: "CSS", icon: "/icons/css.svg" },
			{ name: "SQL", icon: "/icons/sql.svg" },
		],
		description: "",
	},
];
