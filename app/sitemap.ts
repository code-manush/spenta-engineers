import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.spentaengineers.com";

  const routes = [
    { path: "/", priority: 1.0, changeFreq: "weekly" },
    { path: "/about", priority: 0.7, changeFreq: "monthly" },
    { path: "/contact", priority: 0.7, changeFreq: "monthly" },
    { path: "/catalogue", priority: 0.7, changeFreq: "monthly" },
    { path: "/industries", priority: 0.7, changeFreq: "monthly" },
    { path: "/manufacturing-quality", priority: 0.7, changeFreq: "monthly" },

    { path: "/products", priority: 0.8, changeFreq: "monthly" },

    { path: "/products/core-drilling-system", priority: 0.8, changeFreq: "monthly" },
    { path: "/products/core-drilling-system/drill-rods", priority: 0.8, changeFreq: "monthly" },
    { path: "/products/core-drilling-system/core-barrels", priority: 0.8, changeFreq: "monthly" },
    { path: "/products/core-drilling-system/head-assembly", priority: 0.8, changeFreq: "monthly" },
    { path: "/products/core-drilling-system/overshot", priority: 0.8, changeFreq: "monthly" },
    { path: "/products/core-drilling-system/locking-coupling", priority: 0.8, changeFreq: "monthly" },
    { path: "/products/core-drilling-system/adapter-coupling", priority: 0.8, changeFreq: "monthly" },

    { path: "/products/drill-rigs", priority: 0.8, changeFreq: "monthly" },
    { path: "/products/diamond-tungsten-tools", priority: 0.8, changeFreq: "monthly" },
    { path: "/products/core-trays", priority: 0.8, changeFreq: "monthly" },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFreq as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: route.priority,
  }));
}
