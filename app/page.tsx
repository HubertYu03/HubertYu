"use client";

import { useEffect, useState } from "react";

import Background from "@/components/Layers/Background";
import Interface from "@/components/Layers/Interface";

export default function Home() {
	return (
		<main className="w-full h-screen relative">
			<Background />
			<Interface />
		</main>
	);
}
