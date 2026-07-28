import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/constants/data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.organizer}`,
  description: siteConfig.tagline,
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#F7F7F7] text-[#111111] font-sans selection:bg-[#E10600] selection:text-white">
        {children}
      </body>
    </html>
  );
}
