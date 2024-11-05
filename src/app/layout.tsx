import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import ScrollIcon from "@/components/ShowChatIcon";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CelestQB",
  description: "A landing page for a gaming site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.className, "bg-black text-white antialiased")}>
        <Header />
        <ScrollIcon />
        {children}
        <Footer />
      </body>
    </html>
  );
}
