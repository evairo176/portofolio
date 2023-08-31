import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = process.env.NEXT_PUBLIC_SITE_URL as string;

  return [
    {
      url: baseURL,
      lastModified: new Date(),
    },
  ];
}
