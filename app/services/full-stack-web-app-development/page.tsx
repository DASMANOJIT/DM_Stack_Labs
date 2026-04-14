import SeoContentPage from "../../components/SeoContentPage";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata({
  title: "Full-Stack Web App Development India | DM Stack Labs",
  description:
    "Build custom web apps in India with DM Stack Labs. We create full-stack dashboards, portals, employee management systems, and scalable business software.",
  path: "/services/full-stack-web-app-development",
  keywords: [
    "full stack development company India",
    "custom web application development India",
    "full stack web app development",
    "custom web apps",
    "employee management systems",
  ],
});

export default function FullStackWebAppDevelopmentPage() {
  return (
    <SeoContentPage
      eyebrow="Service"
      title="Full-Stack Web Application Development for Scalable Business Systems"
      intro="We design and build full-stack web applications for companies that need more than a brochure website — from internal dashboards and portals to workflow systems that support real operations, reporting, and growth."
      offerItems={[
        "Custom admin dashboards, role-based portals, and business workflow software built around your process.",
        "Secure frontend and backend implementation with scalable database-driven architecture.",
        "Integrations for payments, notifications, CRM flows, inquiry systems, and operational dashboards.",
        "Launch support and iterative improvements so your application can evolve with your team.",
      ]}
      audienceItems={[
        "SMEs replacing spreadsheets and disconnected tools with one working platform.",
        "Institutions that need portals for staff, students, management, or reporting.",
        "Businesses building internal systems to reduce repetitive admin work.",
        "Founders validating a product idea that needs real users, data, and workflows.",
      ]}
      benefits={[
        "More operational clarity through centralized dashboards and structured data.",
        "Less manual work through automation-ready processes and cleaner system ownership.",
        "A codebase designed to scale from MVP to production use without throwing away the foundation.",
        "Faster iteration compared with piecing together multiple off-the-shelf tools.",
      ]}
      relatedLinks={[
        { href: "/services/saas-product-development", label: "SaaS Product Development" },
        { href: "/services/business-automation-tools", label: "Business Automation Tools" },
        { href: "/industries/school-software-development", label: "School Software Development" },
        { href: "/industries/startup-mvp-development-india", label: "Startup MVP Development" },
      ]}
      ctaTitle="Planning a custom web application for your business?"
      ctaDescription="We can turn your workflow, dashboard, or product concept into a practical scope with the right architecture, launch milestones, and next steps."
    />
  );
}
