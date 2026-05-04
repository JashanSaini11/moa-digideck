import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const dmSans = DM_Sans({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MAll of America Deck",
  description: "A digital deck for the Mall of America, providing an interactive experience for visitors to explore the mall's offerings and events.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body className={dmSans.className}>
        {children}
      </body>
    </html>
  );
}