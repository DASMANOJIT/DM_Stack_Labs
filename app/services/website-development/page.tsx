import SeoContentPage from "../../components/SeoContentPage";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata({
  title: "Website Development Company in India | DM Stack Labs",
  description:
    "DM Stack Labs builds fast, SEO-ready business websites in India with modern frontend architecture, responsive design, and conversion-focused UX.",
  path: "/services/website-development",
  keywords: [
    "website development company India",
    "business website development",
    "responsive website design",
    "SEO optimized websites",
  ],
});

export default function WebsiteDevelopmentPage() {
  return (
    <SeoContentPage
      eyebrow="Service"
      title="Website Development Company in India for Businesses That Need Results"
      intro="We build modern business websites with Next.js, responsive website design, and SEO-ready structure so business owners can launch faster, convert better, and maintain credibility online without relying on bloated templates."
      offerItems={[
        "Custom website development for service businesses, startups, and brands that need a fast and credible online presence.",
        "Responsive pages built for mobile-first browsing, cleaner navigation, and stronger lead capture.",
        "SEO-friendly structure with semantic HTML, metadata setup, internal linking, and clean page performance.",
        "Landing pages, service websites, and business sites that support long-term growth instead of one-off redesign cycles.",
      ]}
      audienceItems={[
        "Business owners replacing outdated websites that no longer generate quality leads.",
        "Founders launching a new brand, offer, or market-ready digital product.",
        "Local businesses that need a premium website without enterprise complexity.",
        "Teams that want a website partner who understands conversion, performance, and maintainability.",
      ]}
      benefits={[
        "Faster load times and better user experience across desktop and mobile devices.",
        "Clearer trust signals, stronger CTA placement, and more inquiry-ready page flows.",
        "A scalable codebase that supports future landing pages, blogs, and integrations.",
        "Cleaner SEO foundations that help your website rank for commercial service terms.",
      ]}
      relatedLinks={[
        { href: "/services/landing-page-design", label: "Landing Page Design" },
        { href: "/services/full-stack-web-app-development", label: "Full-Stack Web Apps" },
        { href: "/industries/local-business-websites", label: "Websites for Local Businesses" },
        { href: "/industries/coaching-institute-websites", label: "Websites for Coaching Institutes" },
      ]}
      ctaTitle="Need a business website that looks credible and converts?"
      ctaDescription="Let’s scope your website around your services, audience, and growth goals so you get a launch-ready build instead of another redesign that underperforms."
    />
  );
}
