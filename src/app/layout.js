import { Inter } from "next/font/google";

import { Footer } from "@/app/components/Footer";
import { Navbar } from "@/app/components/Navbar";
import { StarsCanvas } from "@/app/components/StarBackground";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Enes HAN | Portfolio",
  description:
    "Willkommen zu meinem Portfolio. Ich bin Enes HAN, ein Full-Stack Entwickler aus Deutschland.",
};

export const viewport = {
  themeColor: "#030014",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden",
          inter.className
        )}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
