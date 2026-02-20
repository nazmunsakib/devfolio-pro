import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nazmun Sakib | WordPress Plugin Developer & Software Architect",
    template: "%s | Nazmun Sakib",
  },
  description:
    "Senior WordPress Plugin Developer & AI Automation Expert based in Bangladesh. 5+ years building custom WordPress plugins, WooCommerce backends, and scalable Laravel web applications for global clients.",
  keywords: [
    "WordPress developer Bangladesh",
    "WordPress plugin developer for hire",
    "WooCommerce developer Bangladesh",
    "Laravel developer Bangladesh",
    "AI automation expert",
    "Full stack developer Cumilla",
    "custom WordPress plugin development",
    "WooCommerce backend engineering",
    "Senior WordPress Developer",
    "Technical SEO Expert Bangladesh",
    "nazmunsakib",
    "Nazmun Sakib",
  ],
  authors: [{ name: "Nazmun Sakib", url: "https://nazmunsakib.com" }],
  creator: "Nazmun Sakib",
  publisher: "Nazmun Sakib",
  metadataBase: new URL("https://nazmunsakib.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nazmun Sakib | Senior WordPress Developer & Software Architect",
    description:
      "Building high-performance WordPress plugins, WooCommerce systems, and AI automation solutions for businesses worldwide.",
    url: "https://nazmunsakib.com",
    siteName: "Nazmun Sakib Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nazmun Sakib - Senior WordPress Developer & Software Architect",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nazmun Sakib | WordPress Plugin Specialist & Software Architect",
    description:
      "Expert in custom WordPress plugins, WooCommerce backend engineering, Laravel systems, and AI automation.",
    images: ["/og-image.jpg"],
    creator: "@nazmunsakib81",
    site: "@nazmunsakib81",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#0b0f14" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#0b0f14] text-[#e6edf3] font-sans`}
      >
        <StructuredData />
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
