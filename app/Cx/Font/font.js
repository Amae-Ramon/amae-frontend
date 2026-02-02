import { Forum, Inter } from "next/font/google";

// Elegant serif font for headings
export const forum = Forum({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-forum",
  display: "swap",
});

// Clean sans-serif font for body text
export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});
