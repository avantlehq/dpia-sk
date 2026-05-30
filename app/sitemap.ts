import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/co-je-dpia",
    "/kedy-je-dpia-povinne",
    "/ako-vypracovat-dpia",
    "/sablona-dpia",
    "/priklady",
    "/slovnik",
    "/kontakt",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
