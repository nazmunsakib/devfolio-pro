import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://nazmunsakib.com',
            lastModified: "2026-03-06",
            changeFrequency: 'monthly',
            priority: 1,
        },
    ];
}
