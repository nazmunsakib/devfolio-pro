import React from 'react';
import { portfolioData } from '@/data/portfolio';

const StructuredData = () => {
    const baseUrl = portfolioData.socials.website;

    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        "name": portfolioData.name,
        "url": baseUrl,
        "image": `${baseUrl}/images/nazmunsakib.jpg`,
        "jobTitle": portfolioData.title,
        "description": portfolioData.summary,
        "email": `mailto:${portfolioData.socials.email}`,
        "telephone": "+8801792637781",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Cumilla",
            "addressRegion": "Chittagong",
            "addressCountry": "BD"
        },
        "sameAs": [
            portfolioData.socials.linkedin,
            portfolioData.socials.github,
            portfolioData.socials.twitter,
            portfolioData.socials.wordpress,
            portfolioData.socials.instagram
        ],
        "knowsAbout": [
            "WordPress Plugin Development",
            "Software Architecture",
            "AI Automation",
            "Laravel",
            "WooCommerce",
            "Technical SEO",
            "React",
            "MySQL",
            "PHP"
        ],
        "hasOccupation": {
            "@type": "Occupation",
            "name": "WordPress Plugin Developer",
            "occupationLocation": {
                "@type": "Country",
                "name": "Bangladesh"
            },
            "description": "Building custom WordPress plugins, WooCommerce systems, and AI automation solutions for global clients."
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": "Nazmun Sakib Portfolio",
        "description": "Senior WordPress Plugin Developer & Software Architect portfolio",
        "author": { "@id": `${baseUrl}/#person` }
    };

    const professionalServiceSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": `${baseUrl}/#service`,
        "name": portfolioData.name,
        "image": `${baseUrl}/preview.png`,
        "url": baseUrl,
        "telephone": "+8801792637781",
        "email": portfolioData.socials.email,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Cumilla",
            "addressRegion": "Chittagong",
            "addressCountry": "BD"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 23.4607,
            "longitude": 91.1809
        },
        "areaServed": "Worldwide",
        "priceRange": "$$",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday",
                "Thursday", "Friday", "Saturday", "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Development Services",
            "itemListElement": portfolioData.services.map((service, index) => ({
                "@type": "Offer",
                "position": index + 1,
                "itemOffered": {
                    "@type": "Service",
                    "name": service.title,
                    "description": service.description
                }
            }))
        }
    };

    const projectListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Portfolio Projects",
        "itemListElement": portfolioData.projects.map((project, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "CreativeWork",
                "name": project.name,
                "description": project.description,
                "url": project.link,
                "author": { "@id": `${baseUrl}/#person` },
                "keywords": project.tech.join(", ")
            }
        }))
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": baseUrl
            }
        ]
    };

    const schemas = [
        personSchema,
        websiteSchema,
        professionalServiceSchema,
        projectListSchema,
        breadcrumbSchema
    ];

    return (
        <>
            {schemas.map((schema, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </>
    );
};

export default StructuredData;
