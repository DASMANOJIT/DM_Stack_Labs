export const siteName = "DM Stack Labs";
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://dmstacklabs.com"
).replace(/\/$/, "");

export const siteDescription =
  "DM Stack Labs is a web development agency in India offering custom website development, full-stack web applications, UI/UX design, SaaS product development, landing page design, POS software, employee management systems, and business automation solutions.";

export const siteKeywords = [
  "web development agency India",
  "website development company India",
  "custom website development",
  "web development services",
  "full-stack web development",
  "Next.js development company",
  "full stack development company India",
  "SaaS development company India",
  "landing page design agency India",
  "business website development",
  "UI/UX design services",
  "custom web solutions",
  "custom web apps",
  "business automation solutions",
  "POS software development",
  "employee management system development",
  "EdTech platform development",
  "automation tools for small business India",
  "software development agency India",
];

export const indexableRoutes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/services/website-development", changeFrequency: "monthly", priority: 0.9 },
  {
    path: "/services/full-stack-web-app-development",
    changeFrequency: "monthly",
    priority: 0.88,
  },
  { path: "/services/saas-product-development", changeFrequency: "monthly", priority: 0.86 },
  { path: "/services/landing-page-design", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/business-automation-tools", changeFrequency: "monthly", priority: 0.84 },
  {
    path: "/industries/coaching-institute-websites",
    changeFrequency: "monthly",
    priority: 0.82,
  },
  {
    path: "/industries/school-software-development",
    changeFrequency: "monthly",
    priority: 0.78,
  },
  {
    path: "/industries/startup-mvp-development-india",
    changeFrequency: "monthly",
    priority: 0.78,
  },
  { path: "/industries/local-business-websites", changeFrequency: "monthly", priority: 0.76 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.65 },
] as const;
