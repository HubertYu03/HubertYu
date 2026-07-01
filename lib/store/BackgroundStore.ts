import { create } from "zustand";
import { getRandomHexColor } from "../utils";

export const useBackground = create(() => ({
	nebulaTopColor: getRandomHexColor(),
	nebulaBottomColor: getRandomHexColor(),
}));
