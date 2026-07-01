"use client";

import Background from "@/components/Layers/Background";
import Experience from "@/components/Layers/Experience";
import Interface from "@/components/Layers/Interface";

export default function Home() {
	return (
		<main className="w-full h-screen relative overflow-hidden">
			<Background />
			<Experience />
			<Interface />
		</main>
	);
}
