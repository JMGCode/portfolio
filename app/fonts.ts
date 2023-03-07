import { Inter, Open_Sans } from "@next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-open-sans",
});
