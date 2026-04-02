import SeoContentPage from "../../components/SeoContentPage";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata({
  title: "Business Website Development for Local Businesses | DM Stack Labs",
  description:
    "Get a business website built for local visibility, better trust, and more inquiries with DM Stack Labs.",
  path: "/industries/local-business-websites",
  keywords: [
    "business website development company",
    "local business website development",
    "responsive website design for business",
  ],
});

export default function LocalBusinessWebsitesPage() {
  return (
    <SeoContentPage
      eyebrow="Industry"
      title="Business Website Development for Local Businesses That Need More Leads"
      intro="We help local businesses launch professional websites that improve trust, explain services clearly, and make it easier for prospects to contact, book, or request a quote."
      offerItems={[
        "Service-focused websites with clearer messaging, contact flows, and conversion-ready page structure.",
        "Responsive design that works across mobile, tablet, and desktop without clutter.",
        "SEO-friendly setup for service pages, metadata, and internal linking.",
        "Expandable website foundations that support future landing pages and marketing campaigns.",
      ]}
      audienceItems={[
        "Local service businesses that need a stronger online presence to compete.",
        "Owners relying too heavily on word of mouth or social media alone.",
        "Teams replacing outdated sites that no longer reflect service quality.",
        "Businesses that need a simple but premium website to support daily inquiries and growth.",
      ]}
      benefits={[
        "A more credible first impression for potential clients and partners.",
        "Better mobile usability for local visitors who contact businesses from their phones.",
        "Cleaner service presentation that supports quoting, booking, or consultation requests.",
        "SEO structure that helps your website support local discovery over time.",
      ]}
      relatedLinks={[
        { href: "/services/website-development", label: "Website Development" },
        { href: "/services/landing-page-design", label: "Landing Page Design" },
        { href: "/services/business-automation-tools", label: "Automation Tools" },
        { href: "/industries/coaching-institute-websites", label: "Coaching Institute Websites" },
      ]}
      ctaTitle="Need a local business website that feels trustworthy and modern?"
      ctaDescription="We can help you build a cleaner online presence with better messaging, responsive design, and inquiry-driven page structure."
    />
  );
}
