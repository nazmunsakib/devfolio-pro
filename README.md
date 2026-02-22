# DevFolio Pro - Web Developer Portfolio Template & Software Engineers Portfolio Template

**DevFolio Pro** is a premium **web developer portfolio template** and **software engineers portfolio template** built with Next.js 15. Perfect for developers, software engineers, and tech professionals who want a modern, dark-themed portfolio that's 100% easy to customize—no coding experience required!

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

### 🔗 [Live Demo](https://nazmunsakib.com/) | [Download](https://github.com/nazmunsakib/devfolio-pro/archive/refs/heads/main.zip)

![DevFolio Pro Preview](public/preview.png)

## ✨ Why Choose This Web Developer Portfolio Template?

- ✅ **100% Easy to Use**: Change all content in ONE file—no React knowledge needed
- 🌑 **Premium Dark Design**: Modern, professional aesthetic that stands out
- ✨ **Unique Signature Elements**: Morphing gradient blobs & custom cursor effect
- 🚀 **Lightning Fast**: Built with Next.js 15 for top performance and SEO
- 📱 **Mobile-First Responsive**: Perfect on phones, tablets, and desktops
- 🔍 **SEO & GEO Optimized**: Pre-configured for Google search visibility
- ⚡ **One-Click Deploy**: Live on Vercel in under 5 minutes
- 🎨 **Fully Customizable**: Colors, fonts, and layout—all easily adjustable
- 🆓 **Free & Open Source**: MIT License—use for personal or commercial projects

## 🚀 Quick Start - Software Engineers Portfolio Template (5 Minutes Setup)

### Step 1: Download & Install
**Option A: Using Git**
```bash
git clone https://github.com/nazmunsakib/devfolio-pro.git
cd devfolio-pro
npm install
```

**Option B: Direct Download**
1. [Download ZIP](https://github.com/nazmunsakib/devfolio-pro/archive/refs/heads/main.zip)
2. Extract the folder
3. Open terminal in the folder and run: `npm install`

**Requirements**: Node.js 18.18+ ([Download here](https://nodejs.org/))

### Step 2: Start Development Server
```bash
npm run dev
```
✅ Open [http://localhost:3000](http://localhost:3000) to see your portfolio!

### Step 3: Customize Your Content
Edit `src/data/portfolio.ts` and save—changes appear instantly!

## 📝 Easy Customization Guide for Your Portfolio Template (No Coding Required!)

### ⚙️ Change Your Portfolio Content
**Everything is in ONE file**: `src/data/portfolio.ts`

#### 1️⃣ Update Your Personal Info
```typescript
name: "Your Name",
title: "Your Job Title",
summary: "Your bio here...",
email: "your@email.com",
```

#### 2️⃣ Add Your Skills
```typescript
skills: [
  { name: "JavaScript", icon: "Code" },
  { name: "React", icon: "Layers" },
]
```
💡 Find icons at [Lucide Icons](https://lucide.dev/icons)

#### 3️⃣ Add Work Experience
```typescript
experience: [
  {
    company: "Company Name",
    role: "Your Position",
    period: "2020 - Present",
    description: "What you did...",
  },
]
```

#### 4️⃣ Showcase Your Projects
```typescript
projects: [
  {
    name: "Project Name",
    description: "What it does...",
    tech: ["React", "Node.js"],
    image: "/images/project.jpg",
    link: "https://yourproject.com",
  },
]
```

✅ **Save the file** → Changes appear instantly (no restart needed)!

### 🎨 Change Colors & Branding
Edit `src/app/globals.css` to match your brand:

```css
:root {
  --primary: #04e8b9;   /* Main color (buttons, links) */
  --secondary: #ec91ff; /* Accent color (highlights) */
}
```

**Popular Color Schemes:**
- Blue Tech: `--primary: #3b82f6;` `--secondary: #8b5cf6;`
- Green Dev: `--primary: #10b981;` `--secondary: #06b6d4;`
- Red Bold: `--primary: #ef4444;` `--secondary: #f59e0b;`

## 🏗️ Folder Structure

```
├── src/
│   ├── app/           # App Router, layouts, and global styles
│   ├── components/    # Reusable sections and UI components
│   ├── data/          # Central Data Store (portfolio.ts)
│   └── lib/           # Utility functions
├── public/            # Static assets and icons
└── tailwind.config.ts # Tailwind CSS configuration
```

## 🚀 Deploy Your Web Developer Portfolio Template to Vercel (Free Hosting - 5 Minutes)

### Step-by-Step Deployment:

**1. Push to GitHub**
```bash
git add .
git commit -m "My portfolio"
git push origin main
```

**2. Deploy on Vercel**
- Go to [vercel.com](https://vercel.com) → Sign up with GitHub
- Click "Add New Project" → Import your repository
- Click "Deploy" (no configuration needed!)
- Get your live URL: `https://yourname.vercel.app`

**3. Add Custom Domain (Optional)**
- Project Settings → Domains → Add `yourdomain.com`
- Update DNS records:
  - **A Record**: `@` → `76.76.21.21` (use IP shown in Vercel)
  - **CNAME**: `www` → `cname.vercel-dns.com`
- Wait 5-30 minutes for DNS propagation

✅ **Auto-Deploy**: Every `git push` updates your live site automatically!

## 🌍 SEO & GEO Optimization for Software Engineers Portfolio Template

This **web developer portfolio template** is pre-optimized for:
- ✅ Google Search (structured data, meta tags)
- ✅ Social Media (Open Graph, Twitter Cards)
- ✅ Geographic targeting (GEO meta tags)
- ✅ Fast loading (Next.js optimization)
- ✅ Mobile-first indexing

**Customize SEO**: Edit `src/app/layout.tsx` metadata

## 🎯 Perfect For:
- Software engineers portfolio template
- Web developer portfolio template  
- Full-stack developer portfolios
- Frontend/Backend developer showcases
- Freelance developer websites
- Tech professional personal branding

## 🤝 Contributing
Contributions welcome! Open an issue or submit a pull request.

## 📄 License
Distributed under the **MIT License**. See `LICENSE` for more information.

## 📞 Need Help?
- 📖 [Full Documentation](https://github.com/nazmunsakib/devfolio-pro/wiki)
- 🐛 [Report Issues](https://github.com/nazmunsakib/devfolio-pro/issues)
- 💬 [Discussions](https://github.com/nazmunsakib/devfolio-pro/discussions)

## ⭐ Show Your Support
If this **software engineers portfolio template** helped you, give it a ⭐ on GitHub!

---

**Keywords**: web developer portfolio template, software engineers portfolio template, developer portfolio, Next.js portfolio, React portfolio template, dark portfolio theme, free portfolio template, responsive portfolio, SEO optimized portfolio

Built with ❤️ by [Nazmun Sakib](https://github.com/nazmunsakib) | [Live Demo](https://nazmunsakib.com/)
