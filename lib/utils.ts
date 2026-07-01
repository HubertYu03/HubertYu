import { readdir } from "node:fs/promises";

export function getRandomIntInclusive(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, "0")}`;
}

export function getRandomPlanetTexture() {
	const textures = [
		"/textures/4k_ceres_fictional.jpg",
		"/textures/4k_eris_fictional.jpg",
		"/textures/4k_haumea_fictional.jpg",
		"/textures/4k_makemake_fictional.jpg",
	];

	return textures[Math.floor(Math.random() * textures.length)];
}
