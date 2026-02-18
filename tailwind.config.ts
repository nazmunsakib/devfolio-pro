import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#04e8b9",
                secondary: "#ec91ff",
                surface: "#111827",
                "surface-hover": "#141c26",
                "text-secondary": "#9aa4b2",
                "border-subtle": "rgba(31, 41, 55, 0.5)",
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
                heading: ["var(--font-space-grotesk)"],
            },
        },
    },
    plugins: [],
};
export default config;
