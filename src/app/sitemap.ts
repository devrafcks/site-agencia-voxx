import { MetadataRoute } from "next";

const siteUrl = "https://agenciavoxx.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2025-05-01"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/servicos`,
      lastModified: new Date("2025-05-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/sobre`,
      lastModified: new Date("2025-05-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/projetos`,
      lastModified: new Date("2025-05-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contato`,
      lastModified: new Date("2025-05-01"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
