import SeoContentPage from "../../components/SeoContentPage";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata({
  title: "Website for Coaching Institutes | DM Stack Labs",
  description:
    "DM Stack Labs builds websites for coaching institutes with lead capture, course promotion, admissions-focused landing pages, and automation support.",
  path: "/industries/coaching-institute-websites",
  keywords: [
    "website for coaching institute",
    "coaching institute website development",
    "lead generation website for coaching centers",
  ],
});

export default function CoachingInstituteWebsitesPage() {
  return (
    <SeoContentPage
      eyebrow="Industry"
      title="Website Development for Coaching Institutes That Need Better Admissions Flow"
      intro="We build websites and landing pages for coaching institutes that need better course visibility, higher inquiry quality, and cleaner admissions workflows without depending on generic brochure-style sites."
      offerItems={[
        "Course and batch pages designed to help students and parents understand your offer quickly.",
        "Lead capture pages for admissions campaigns, WhatsApp inquiries, and consultation requests.",
        "SEO-ready content structure to help your institute rank for commercial local and subject-specific searches.",
        "Workflow support for inquiry handling, follow-up, and fee-related automation if needed.",
      ]}
      audienceItems={[
        "Coaching centers offering school subjects, competitive exam prep, or skills training.",
        "Institute owners who want better inquiry quality from ads, search, or referrals.",
        "Centers expanding to new courses, new locations, or more organized online admissions.",
        "Educational teams that need a more professional digital presence to build trust with parents and students.",
      ]}
      benefits={[
        "Stronger trust with parents and students through a modern, organized online presence.",
        "Better lead capture for admissions, demo classes, or course-specific campaigns.",
        "A scalable foundation for adding fee systems, portals, or student management later.",
        "Clearer communication of batches, results, faculty, and contact options.",
      ]}
      relatedLinks={[
        { href: "/services/website-development", label: "Website Development" },
        { href: "/services/landing-page-design", label: "Landing Page Design" },
        { href: "/services/business-automation-tools", label: "Automation Tools" },
        { href: "/industries/school-software-development", label: "School Software Development" },
      ]}
      ctaTitle="Need a coaching institute website that improves admissions quality?"
      ctaDescription="Let’s build a cleaner digital experience for your institute with course pages, strong inquiry capture, and room for future automation."
    />
  );
}
