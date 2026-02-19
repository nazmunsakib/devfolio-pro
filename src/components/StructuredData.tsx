import React from 'react';
import { portfolioData } from '@/data/portfolio';

const StructuredData = () => {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": portfolioData.name,
        "url": portfolioData.socials.website,
        "jobTitle": portfolioData.title,
        "description": portfolioData.summary,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bogura",
            "addressRegion": "Rajshahi",
            "addressCountry": "Bangladesh"
        },
        "sameAs": [
            portfolioData.socials.linkedin,
            portfolioData.socials.github,
            portfolioData.socials.twitter,
            portfolioData.socials.wordpress,
            portfolioData.socials.instagram
        ],
        "knowsAbout": [
            "WordPress Development",
            "Software Architecture",
            "AI Automation",
            "Laravel",
            "WooCommerce",
            "Technical SEO",
            "React",
            "MySQL"
        ]
    };

    const serviceSchemas = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": portfolioData.services.map((service, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Service",
                "name": service.title,
                "description": service.description,
                "provider": {
                    "@type": "Person",
                    "name": portfolioData.name
                },
                "areaServed": "Worldwide"
            }
        }))
    };

    const projectSchemas = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": portfolioData.projects.map((project, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "CreativeWork",
                "name": project.name,
                "description": project.description,
                "url": portfolioData.socials.website,
                "author": {
                    "@type": "Person",
                    "name": portfolioData.name
                },
                "keywords": project.tech.join(", ")
            }
        }))
    };

    const professionalServiceSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": portfolioData.name,
        "image": `${portfolioData.socials.website}/og-image.jpg`,
        "url": portfolioData.socials.website,
        "telephone": "+8801792637781",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bogura",
            "addressRegion": "Rajshahi",
            "addressCountry": "Bangladesh"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 24.8481,
            "longitude": 89.3730
        },
        "priceRange": "$$",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchemas) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
            />
        </>
    );
};

export default StructuredData;
