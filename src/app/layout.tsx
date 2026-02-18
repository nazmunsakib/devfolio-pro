import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nazmun Sakib | WordPress & Full-Stack Developer",
  description: "Senior WordPress and Full-Stack Developer portfolio of Nazmun Sakib. Specialized in building premium digital experiences for international clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#0b0f14] text-[#e6edf3] font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
