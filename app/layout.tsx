import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

export const spaceMono = Space_Mono({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-space-mono",
});

export const metadata: Metadata = {
	title: "Hubert Yu",
	description: "Portfolio website for Hubert Yu",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${spaceMono.className} h-full antialiased`}>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
