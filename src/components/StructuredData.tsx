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
        "image": `${baseUrl}/images/nazmun-sakib.png`,
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
        "knowsAbout": portfolioData.skills.flatMap(category => 
            category.items.map(item => item.name)
        ),
        "hasOccupation": {
            "@type": "Occupation",
            "name": portfolioData.title,
            "occupationLocation": {
                "@type": "Country",
                "name": "Bangladesh"
            },
            "description": portfolioData.about.text,
            "skills": portfolioData.skills.flatMap(category => 
                category.items.map(item => item.name)
            ).join(", ")
        },
        "workLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "BD"
            }
        },
        "areaServed": [
            {
                "@type": "Country",
                "name": "Bangladesh"
            },
            {
                "@type": "Place",
                "name": "Worldwide"
            }
        ]
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": `${portfolioData.name} - ${portfolioData.title} Portfolio`,
        "description": portfolioData.summary,
        "author": { "@id": `${baseUrl}/#person` },
        "inLanguage": "en-BD"
    };

    const professionalServiceSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": `${baseUrl}/#service`,
        "name": `${portfolioData.name} - WordPress Development Services`,
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
        "areaServed": [
            {
                "@type": "Country",
                "name": "Bangladesh"
            },
            {
                "@type": "Place",
                "name": "Worldwide"
            }
        ],
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
                    "description": service.description,
                    "provider": { "@id": `${baseUrl}/#person` }
                }
            }))
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": (portfolioData as any).faq?.map((item: any) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        })) || []
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
        faqSchema,
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
