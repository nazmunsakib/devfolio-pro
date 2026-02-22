export const portfolioData = {
    name: "Nazmun Sakib",
    title: "Sr. WordPress Developer | Software Architect",
    summary: "I build high-performance WordPress plugins, scalable WooCommerce systems, and intelligent AI automation solutions that help businesses grow faster. With strong expertise in PHP, Laravel, React, and system architecture, I deliver secure, SEO-optimized, and conversion-focused web applications for global clients.",
    about: {
        text: "I am Nazmun Sakib, a professional full-stack software developer and WordPress plugin specialist with 8+ years of experience building scalable web applications and automation systems for international clients. My expertise covers custom WordPress plugin development, advanced WooCommerce backend engineering, Laravel applications, and AI-powered business automation. I focus on clean architecture, high performance, and technical SEO to ensure every product is fast, secure, and built for long-term scalability.",
        highlights: [
            "Custom WordPress Plugin Development",
            "WooCommerce Backend Engineering",
            "Website Design & Maintenance",
            "Laravel Web Applications",
            "AI Automation & Workflow Systems",
            "RESTful API Development",
            "Technical SEO & Performance Optimization",
            "POS, Booking & ERP Solutions",
        ]
    },
    services: [
        {
            title: "WordPress Plugin Development",
            description: "Custom, lightweight, and scalable plugins built with modern architecture and WordPress best practices.",
            icon: "wordpress"
        },
        {
            title: "WooCommerce Development",
            description: "Advanced WooCommerce backend solutions including custom checkout, automation, subscriptions, and performance optimization.",
            icon: "woocommerce"
        },
        {
            title: "Website Design & Development",
            description: "Secure and scalable Website designed and SaaS platforms and complex business logic.",
            icon: "laravel"
        },
        {
            title: "Software Architecture",
            description: "Efficient database design, system planning, and scalable backend architecture for long-term growth.",
            icon: "layout"
        },
        {
            title: "AI Automation Solutions",
            description: "Smart business automation using AI workflows to reduce manual work and improve operational efficiency.",
            icon: "bot"
        },
        {
            title: "Technical SEO & Performance",
            description: "Core Web Vitals optimization, database tuning, and technical SEO implementation to improve rankings and speed.",
            icon: "zap"
        }
    ],
    skills: [
        {
            category: "eCommerce",
            items: [
                { name: "WooCommerce", icon: "woocommerce" },
                { name: "Subscription Systems", icon: "repeat" },
                { name: "POS Systems", icon: "monitor" },
                { name: "Booking Systems", icon: "calendar" }
            ]
        },
        {
            category: "Backend",
            items: [
                { name: "WordPress Core", icon: "wordpress" },
                { name: "PHP", icon: "php" },
                { name: "MySQL", icon: "mysql" },
                { name: "Laravel", icon: "laravel" }
            ]
        },
        {
            category: "Frontend",
            items: [
                { name: "React / Next.js", icon: "react" },
                { name: "HTML5 / CSS3", icon: "typescript" },
                { name: "Tailwind CSS", icon: "tailwind" },
                { name: "JavaScript (ES6+)", icon: "javascript" }
            ]
        },
        {
            category: "Automation",
            items: [
                { name: "AI Automation", icon: "bot" },
                { name: "Workflow Automation", icon: "workflow" },
                { name: "Webhooks", icon: "webhook" },
                { name: "API Integration", icon: "api" }
            ]
        }
    ],
    experience: [
        {
            role: "Full-stack Developer (Team Lead)",
            company: "Dynamic Web Lab",
            range: "2022 - Present",
            achievements: [
                "Led a team of developers in building premium WordPress themes for international clients.",
                "Implemented high-performance solutions using Headless WordPress and Laravel.",
                "Optimized site loading speeds by 40% across major client portfolios."
            ]
        },
        {
            role: "WordPress Developer",
            company: "Spider Devs",
            range: "2021 — Jun, 2022",
            achievements: [
                "Building premium WordPress themes for Envato.",
                "Developed premium WordPress plugins.",
                "Collaborated with designers to ensure pixel-perfect user experience."
            ]
        },
        {
            role: "Sr. Software Developer",
            company: "Serenity IT",
            range: "2018 — Jun, 2022",
            achievements: [
                "Developed custom web applications.",
                "WordPress Plugin Development.",
                "Collaborated with designers to ensure pixel-perfect responsive implementations."
            ]
        }
    ],
    projects: [
        {
            id: 1,
            name: "Docy - Documentation Theme",
            description: "Docy is the perfect WordPress theme for creating comprehensive documentation, knowledge base, and LMS websites.",
            tech: ["WordPress", "PHP", "jQuery", "LMS", "Elementor"],
            role: "Developer",
            image: "/images/projects/docy-theme.png",
            link: "https://wordpress-theme.spider-themes.net/docy/",
            featured: false,
            nofollow: true,
            metrics: [
                { icon: "TrendingUp", label: "Sales", value: "2,500+ copies" },
                { icon: "Star", label: "Rating", value: "4.8/5.0" },
                { icon: "Zap", label: "Performance", value: "95+ PageSpeed" }
            ]
        },
        {
            id: 2,
            name: "Booking System for Francesca’s Place",
            description: "Developed a custom booking system for Francesca’s Place, streamlining reservations and improving operational efficiency for British Airways crew accommodation.",
            tech: ["WordPress", "PHP", "MySQL", "jQuery"],
            role: "Full-Stack Developer",
            image: "/images/projects/francescasplace.png",
            link: "https://www.francescasplace.co.uk/",
            featured: false,
            nofollow: true,
            metrics: [
                { icon: "Clock", label: "Time Saved", value: "60% faster" },
                { icon: "Users", label: "Bookings", value: "500+/month" },
                { icon: "CheckCircle", label: "Accuracy", value: "99.8%" }
            ]
        },
        {
            id: 3,
            name: "BuyOrSell24 - Classifieds Web Application",
            description: "Built BuyOrSell24, a scalable classifieds web application enabling seamless ad posting, user management, secure messaging, and advanced search functionality.",
            tech: ["Laravel", "Next.js", "TypeScript", "Tailwind", "AI Chatbot"],
            role: "Lead Frontend Engineer",
            image: "/images/projects/buyorsell24.png",
            link: "https://buyorsell24.com/",
            featured: false,
            nofollow: true,
            metrics: [
                { icon: "Users", label: "Active Users", value: "10K+" },
                { icon: "Zap", label: "Load Time", value: "<1.2s" },
                { icon: "MessageSquare", label: "Messages", value: "50K+/month" }
            ]
        },
        {
            id: 4,
            name: "NivoSearch - WooCommerce Ajax Search Plugin",
            description: "NivoSearch is a high-performance Ajax Product Search for WooCommerce built to deliver speed, accuracy, and scalability for modern online stores.",
            tech: ["WordPress", "PHP", "MySQL", "WooCommerce", "jQuery", "Ajax"],
            role: "Backend Architect",
            image: "/images/projects/nivosearch.png",
            link: "https://wordpress.org/plugins/nivo-ajax-search-for-woocommerce/",
            featured: false,
            nofollow: false,
            metrics: [
                { icon: "Download", label: "Downloads", value: "5,000+" },
                { icon: "Zap", label: "Search Speed", value: "<100ms" },
                { icon: "TrendingUp", label: "Conversion", value: "+35%" }
            ]
        }
    ],
    socials: {
        website: "https://nazmunsakib.com",
        github: "https://github.com/nazmunsakib/",
        whatsapp: "https://wa.me/+8801792637781",
        email: "nazmunsakib81@gmail.com",
        linkedin: "https://www.linkedin.com/in/nazmunsakib/",
        instagram: "https://www.instagram.com/sakib_aura/",
        twitter: "https://x.com/nazmunsakib81",
        wordpress: "https://profiles.wordpress.org/nazmunsakib/",
        resumeUrl: "/nazmun-sakib-resume.pdf"
    }
};
