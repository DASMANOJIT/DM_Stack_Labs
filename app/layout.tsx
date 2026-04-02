import { Inter, Poppins } from "next/font/google";
import { defaultMetadata } from "./lib/metadata";
import { siteDescription, siteName, siteUrl } from "./lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    email: "dmstacklabs@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    description: siteDescription,
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full-Stack Web Application Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS Product Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landing Page Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Automation Tools" } },
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
