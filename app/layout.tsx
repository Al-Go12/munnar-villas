import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE_INFO } from "@/config/siteData";

const manrope = localFont({
  src: "./fonts/manrope.woff2",
  variable: "--font-manrope",
  display: "swap",
  weight: "500 800",
});

const inter = localFont({
  src: "./fonts/inter.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "400 700",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://munnarvillas.com"),
  title: "Munnar Villas Suryanelli Wood Resort | Stay in Munnar",
  description:
    "Discover Munnar Villas Suryanelli Wood Resort, a welcoming mountain retreat in Suryanelli, Munnar. Explore comfortable stays, outdoor experiences and beautiful sightseeing destinations.",
  keywords: [
    "Munnar Villas Suryanelli Wood Resort",
    "Suryanelli resort",
    "wooden villas in Munnar",
    "stay near Kolukkumalai",
    "Suryanelli stay",
    "Munnar nature retreat",
    "Kolukkumalai jeep safari stay",
    "Idukki Kerala resort",
  ],
  openGraph: {
    title: "Munnar Villas Suryanelli Wood Resort | Stay in Munnar",
    description:
      "Discover Munnar Villas Suryanelli Wood Resort, a welcoming mountain retreat in Suryanelli, Munnar. Explore comfortable stays, outdoor experiences and beautiful sightseeing destinations.",
    type: "website",
    locale: "en_IN",
    siteName: SITE_INFO.fullName,
    images: [
      {
        url: "/images/hero-hillside-resort.webp",
        width: 1569,
        height: 1002,
        alt: "Munnar Villas Suryanelli Wood Resort — Mountain Retreat in Suryanelli, Munnar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Munnar Villas Suryanelli Wood Resort | Stay in Munnar",
    description:
      "Discover Munnar Villas Suryanelli Wood Resort, a welcoming mountain retreat in Suryanelli, Munnar.",
    images: ["/images/hero-hillside-resort.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: SITE_INFO.fullName,
    description:
      "Discover Munnar Villas Suryanelli Wood Resort, a welcoming mountain retreat in Suryanelli, Munnar. Explore comfortable stays, outdoor experiences and beautiful sightseeing destinations.",
    telephone: SITE_INFO.contact.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_INFO.address.line1,
      addressLocality: "Suryanelli, Munnar",
      addressRegion: "Kerala",
      postalCode: SITE_INFO.address.postalCode,
      addressCountry: "IN",
    },
    sameAs: [SITE_INFO.contact.instagramUrl, SITE_INFO.contact.googleHotelsUrl],
  };

  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white text-[#282B26]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
