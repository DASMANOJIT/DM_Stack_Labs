import type { MetadataRoute } from "next";
import { siteUrl } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: siteUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    {
      url: `${siteUrl}/services/website-development`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/services/full-stack-web-app-development`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteUrl}/services/saas-product-development`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteUrl}/services/landing-page-design`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services/business-automation-tools`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/industries/coaching-institute-websites`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/industries/school-software-development`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${siteUrl}/industries/startup-mvp-development-india`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${siteUrl}/industries/local-business-websites`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.65,
    },
  ];
}
