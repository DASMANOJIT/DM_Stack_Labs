import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter, Poppins } from "next/font/google";
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

export async function generateMetadata(): Promise<Metadata> {
  const description =
    "Web development agency for Next.js development, full-stack development, business website development, and scalable digital solutions for businesses.";

  let metadataBase: URL | undefined;
  try {
    const h = await headers();
    const host = h.get("x-forwarded-host") ?? h.get("host");
    const proto = h.get("x-forwarded-proto") ?? "https";
    if (host) metadataBase = new URL(`${proto}://${host}`);
  } catch {
    // ignore - headers() not available during some build steps
  }

  if (!metadataBase) {
    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);
    metadataBase = siteUrl ? new URL(siteUrl) : new URL("http://localhost:3000");
  }

  return {
    metadataBase,
    title: "DM Stack Labs | Web Development & Digital Solutions",
    description,
    keywords: [
      "website development company",
      "web development agency",
      "full-stack development",
      "business websites",
      "business website development",
      "Next.js development",
      "custom web solutions",
      "scalable web applications",
      "software development agency",
      "digital solutions for businesses",
      "scalable solutions",
      "web development services",
      "affordable website development",
      "custom website development",
      "SEO optimized websites",
      "responsive website design",
      "small business website development",
      "startup website development",
      "web design and development services",
      "fast loading website development",
      "modern website design company",
      "freelance web developer India",
    ],
    applicationName: "DM Stack Labs",
    robots: { index: true, follow: true },
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: "DM Stack Labs | Web Development & Digital Solutions",
      description,
      type: "website",
      siteName: "DM Stack Labs",
      url: "/",
    },
    twitter: {
      card: "summary_large_image",
      title: "DM Stack Labs | Web Development & Digital Solutions",
      description,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DM Stack Labs",
    email: "dmstacklabs@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    description:
      "DM Stack Labs is a web development agency delivering Next.js development, full-stack development, custom web solutions, and scalable web applications for businesses.",
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Optimization" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Maintenance & Support" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tech Solutions" } },
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
