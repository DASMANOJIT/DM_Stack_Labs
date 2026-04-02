import SeoContentPage from "../../components/SeoContentPage";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata({
  title: "School Software Development Company | DM Stack Labs",
  description:
    "Build school software with DM Stack Labs for fee workflows, student data, admin dashboards, and custom portals for educational institutions.",
  path: "/industries/school-software-development",
  keywords: [
    "school management software development company",
    "school software development",
    "fee management software development",
  ],
});

export default function SchoolSoftwareDevelopmentPage() {
  return (
    <SeoContentPage
      eyebrow="Industry"
      title="School Software Development for Administrative Clarity and Better Operations"
      intro="We help schools and educational institutions build software systems for fee tracking, student data, internal dashboards, and operational workflows when manual tools are no longer enough."
      offerItems={[
        "Custom school portals and dashboards for administration, staff, or management access.",
        "Fee-related workflows, reminders, reporting views, and process automation.",
        "Role-based web applications for structured data handling and visibility.",
        "Scalable software foundations that can expand as institutional requirements grow.",
      ]}
      audienceItems={[
        "Schools and institutes with growing operational complexity and manual admin processes.",
        "Management teams that need clearer reporting and systemized fee workflows.",
        "Institutions planning to replace fragmented tools with one tailored platform.",
        "Educational businesses building internal software around their own policies and processes.",
      ]}
      benefits={[
        "More organized operations and less dependence on disconnected spreadsheets.",
        "Better visibility into fee, student, and admin workflows.",
        "Software tailored to your process instead of generic tools with unnecessary bloat.",
        "A stronger foundation for long-term digital transformation inside the institution.",
      ]}
      relatedLinks={[
        { href: "/services/full-stack-web-app-development", label: "Full-Stack Web Apps" },
        { href: "/services/saas-product-development", label: "SaaS Product Development" },
        { href: "/services/business-automation-tools", label: "Automation Tools" },
        { href: "/industries/coaching-institute-websites", label: "Coaching Institute Websites" },
      ]}
      ctaTitle="Planning custom software for your school or institute?"
      ctaDescription="We can help define the right portal, dashboard, or fee workflow system based on your institution’s actual operational needs."
    />
  );
}
