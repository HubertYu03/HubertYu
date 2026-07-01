export function getRandomIntInclusive(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, "0")}`;
}
