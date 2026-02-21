import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://nazmunsakib.com',
            lastModified: "2026-02-21",
            changeFrequency: 'monthly',
            priority: 1,
        },
    ];
}
