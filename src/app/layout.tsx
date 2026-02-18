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
  title: "DevFolio Pro | Premium Developer Portfolio Template",
  description: "A high-performance, SEO-optimized Next.js & Tailwind CSS portfolio template for senior developers. Showcase your technical authority with DevFolio Pro.",
  keywords: [
    "Developer Portfolio Template",
    "Next.js Portfolio",
    "Tailwind CSS Portfolio",
    "Senior Developer Portfolio",
    "Open Source Portfolio Template",
    "Premium Web Design",
    "Full-Stack Developer Portfolio"
  ],
  authors: [{ name: "Nazmun Sakib" }],
  openGraph: {
    title: "DevFolio Pro | Premium Developer Portfolio Template",
    description: "Launch your professional developer presence in minutes with this SEO-ready Next.js portfolio.",
    url: "https://nazmunsakib.com",
    siteName: "DevFolio Pro",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DevFolio Pro Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevFolio Pro | Next.js Portfolio Template",
    description: "A high-performance portfolio template for modern software engineers.",
    images: ["/og-image.jpg"],
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareSourceCode",
              "name": "DevFolio Pro",
              "description": "Premium developer portfolio template built with Next.js and Tailwind CSS.",
              "codeRepository": "https://github.com/nazmunsakib/devfolio-pro",
              "programmingLanguage": ["TypeScript", "React", "Next.js"],
              "author": {
                "@type": "Person",
                "name": "Nazmun Sakib",
                "url": "https://nazmunsakib.com"
              },
              "license": "https://opensource.org/licenses/MIT"
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
