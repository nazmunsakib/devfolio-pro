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
  title: "Nazmun Sakib | Full Stack WordPress Developer & Software Architect",
  description: "Senior WordPress Developer & AI Automation Expert based in Bangladesh. Specialized in custom WordPress plugins, WooCommerce backend engineering, and scalable Laravel web applications for global clients.",
  keywords: [
    "Senior WordPress Developer",
    "WordPress Developer Bangladesh",
    "Custom WordPress Plugin Developer",
    "WooCommerce Backend Engineer",
    "Laravel Web Developer",
    "AI Automation Consultant",
    "Technical SEO Expert Bangladesh",
    "Full-Stack Software Architect",
    "Software Engineer Bangladesh",
    "Expert PHP Developer"
  ],
  authors: [{ name: "Nazmun Sakib" }],
  metadataBase: new URL("https://nazmunsakib.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nazmun Sakib | Senior WordPress Developer & Software Architect",
    description: "Building high-performance WordPress plugins and scalable AI automation solutions for businesses worldwide.",
    url: "https://nazmunsakib.com",
    siteName: "Nazmun Sakib Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nazmun Sakib - Senior WordPress Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nazmun Sakib | WordPress Plugin Specialist & Software Architect",
    description: "Expert in custom WordPress solutions, Laravel systems, and AI automation.",
    images: ["/og-image.jpg"],
  },
};

import StructuredData from "@/components/StructuredData";

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
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
