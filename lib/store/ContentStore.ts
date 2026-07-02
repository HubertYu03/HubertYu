import { create } from "zustand";

type ContentState = {
	contentView: boolean;
	currentContent: string;
	switchContentView: () => void;
	setContent: (newContent: string) => void;
};

export const useContent = create<ContentState>((set) => ({
	contentView: false,
	currentContent: "",
	switchContentView: () => set((state) => ({ contentView: !state.contentView })),
	setContent: (newContent) => set({ currentContent: newContent }),
}));
