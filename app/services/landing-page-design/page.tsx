import SeoContentPage from "../../components/SeoContentPage";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata({
  title: "Landing Page Design Agency India | DM Stack Labs",
  description:
    "Get landing page design in India focused on lead generation, faster load times, clearer offers, and stronger conversion performance.",
  path: "/services/landing-page-design",
  keywords: [
    "landing page design agency India",
    "lead generation landing page design",
    "responsive landing page design",
  ],
});

export default function LandingPageDesignPage() {
  return (
    <SeoContentPage
      eyebrow="Service"
      title="Landing Page Design for Businesses That Need More Qualified Leads"
      intro="We create landing pages for launches, services, campaigns, and local businesses that need strong messaging, fast performance, and a cleaner path from visitor attention to inquiry or booking."
      offerItems={[
        "Conversion-focused landing pages for ad campaigns, service launches, consultations, and offer validation.",
        "Fast-loading layouts with clearer messaging hierarchy, CTA placement, and mobile-friendly structure.",
        "Design and development that supports lead capture forms, WhatsApp actions, and trust-building sections.",
        "Flexible page systems that can expand into multi-page websites as your business grows.",
      ]}
      audienceItems={[
        "Coaching centers and local businesses running ads or promotions.",
        "Founders testing a new offer before investing in a larger website.",
        "Agencies or teams that need dedicated campaign pages with strong UX.",
        "Businesses that want a focused conversion page instead of sending traffic to a generic homepage.",
      ]}
      benefits={[
        "Sharper CTA flow and lower friction for business inquiries.",
        "Better performance and readability across mobile devices.",
        "More control over offer-specific messaging and tracking.",
        "A cleaner setup for ad traffic, retargeting, and campaign reporting.",
      ]}
      relatedLinks={[
        { href: "/services/website-development", label: "Website Development" },
        { href: "/services/business-automation-tools", label: "Automation Tools" },
        { href: "/industries/coaching-institute-websites", label: "Coaching Institute Websites" },
        { href: "/industries/local-business-websites", label: "Local Business Websites" },
      ]}
      ctaTitle="Need a landing page built for conversion, not just design?"
      ctaDescription="We’ll help you structure the offer, CTA flow, trust sections, and lead capture so the page is useful for real campaigns and real customers."
    />
  );
}
