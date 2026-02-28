import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#0b0f14",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: {
    default: "Nazmun Sakib - Senior WordPress Developer | Web Engineer",
    template: "%s | Nazmun Sakib",
  },
  description:
    "Senior WordPress Developer & Web Engineer based in Bangladesh. 8+ years building custom WordPress plugins, WooCommerce backends, and scalable Laravel web applications for global clients.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  keywords: [
    "Remote WordPress Developer",
    "Senior WordPress Developer",
    "Freelance WooCommerce Expert",
    "Web Engineer",
    "Website Developer",
    "Global WordPress Plugin Developer",
    "AI automation expert",
    "custom WordPress plugin development",
    "WooCommerce backend engineering",
    "WordPress developer Bangladesh",
    "WordPress plugin developer for hire",
    "WooCommerce developer Bangladesh",
    "Laravel developer Bangladesh",
    "Full stack developer Cumilla",
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
    title: "Nazmun Sakib | Senior WordPress Developer & Web Engineer",
    description:
      "Building high-performance WordPress plugins, WooCommerce systems, and AI automation solutions for businesses worldwide.",
    url: "https://nazmunsakib.com",
    siteName: "Nazmun Sakib Portfolio",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Nazmun Sakib - Senior WordPress Developer & Web Engineer",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nazmun Sakib | WordPress Plugin Specialist & Web Engineer",
    description:
      "Expert in custom WordPress plugins, WooCommerce backend engineering, Laravel systems, and AI automation.",
    images: ["/preview.png"],
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
  other: {
    "geo.region": "BD-C",
    "geo.placename": "Cumilla",
    "geo.position": "23.4607;91.1809",
    "ICBM": "23.4607, 91.1809",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K4Z9SGQV');`
        }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#0b0f14] text-[#e6edf3] font-sans`}
      >
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K4Z9SGQV"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
        <StructuredData />
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
