import SeoContentPage from "../../components/SeoContentPage";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata({
  title: "Business Automation Tools India | DM Stack Labs",
  description:
    "DM Stack Labs creates automation tools for small businesses and institutes in India, from lead workflows to fee reminders and operational dashboards.",
  path: "/services/business-automation-tools",
  keywords: [
    "automation tools for small business India",
    "business workflow automation India",
    "custom automation tools",
  ],
});

export default function BusinessAutomationToolsPage() {
  return (
    <SeoContentPage
      eyebrow="Service"
      title="Business Automation Tools for Small Businesses and Educational Institutions"
      intro="We build custom automation tools that reduce repetitive admin work, improve lead follow-up, and centralize operations for businesses, coaching centers, and institutions that have outgrown manual processes."
      offerItems={[
        "Lead intake and routing systems that reduce missed inquiries and manual follow-up.",
        "Custom workflows for reminders, fee tracking, notifications, and internal approvals.",
        "Operational dashboards that show business activity, pending actions, and reporting at a glance.",
        "Automation-friendly systems that can integrate with websites, forms, or internal tools.",
      ]}
      audienceItems={[
        "Small businesses spending too much time on repetitive operational tasks.",
        "Coaching centers and schools managing inquiries, follow-ups, or fee reminders manually.",
        "Teams that need a custom alternative to patching together multiple SaaS tools.",
        "Owners who want better visibility and control over leads, payments, or internal workflows.",
      ]}
      benefits={[
        "Less admin overhead and fewer process bottlenecks.",
        "Higher response consistency for inquiries, reminders, and key tasks.",
        "Cleaner visibility into business activity and team workflows.",
        "Automation systems built around your exact process instead of generic templates.",
      ]}
      relatedLinks={[
        { href: "/services/full-stack-web-app-development", label: "Full-Stack Web Apps" },
        { href: "/services/saas-product-development", label: "SaaS Product Development" },
        { href: "/industries/coaching-institute-websites", label: "Coaching Institute Solutions" },
        { href: "/industries/school-software-development", label: "School Software Development" },
      ]}
      ctaTitle="Want to replace manual workflows with custom automation?"
      ctaDescription="Share the process that slows your team down, and we’ll help map the right automation flow, interface, and delivery scope for it."
    />
  );
}
