import React from 'react';
import { Metadata } from 'next';
import { portfolioData } from '@/data/portfolio';
import Image from 'next/image';
import { Star, ArrowUpRight, Lock, TrendingUp, Zap, Clock, Users, CheckCircle, MessageSquare, Download } from 'lucide-react';
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";

// Ensure this page is never indexed by search engines
export const metadata: Metadata = {
    title: 'Featured Projects | Nazmun Sakib',
    description: 'Featured projects of Nazmun Sakib.',
    robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function NDAProjectsPage() {
    return (
        <>
            <CustomCursor />
            <Navbar />

            <main id="main-content" className="pt-24 lg:pt-32 pb-16 min-h-screen flex flex-col bg-[#0b0f14]">
                <section className="flex-grow container mx-auto px-6 relative z-10">

                    {/* Header Section */}
                    <div className="max-w-3xl mb-16 mt-8">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white leading-tight">
                            Featured <span className="text-primary">Projects</span>
                        </h1>
                        <p className="text-lg text-text-secondary leading-relaxed">
                            Here is a selection of my most notable work. Each project highlights a different aspect of my technical expertise and problem-solving capabilities.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    {portfolioData.ndaProjects && portfolioData.ndaProjects.length > 0 ? (
                        <div className="grid lg:grid-cols-2 gap-10">
                            {portfolioData.ndaProjects.map((project) => (
                                <div key={project.id} className="group relative flex flex-col bg-[#111827] border border-border-subtle rounded-3xl overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-2xl h-full">

                                    {/* Image Container */}
                                    <div className="relative block aspect-[16/10] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 group/img">
                                        <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6 transition-transform duration-500 group-hover/img:scale-105">
                                            <div className="w-full h-full bg-surface-hover rounded-xl border border-white/5 shadow-2xl overflow-hidden relative flex items-center justify-center bg-[#1a2235]">
                                                {project.image ? (
                                                    <Image
                                                        src={project.image}
                                                        alt={project.name}
                                                        fill
                                                        sizes="(max-width: 768px) 100vw, 50vw"
                                                        className="object-cover object-top opacity-80 group-hover/img:opacity-100 transition-opacity duration-500"
                                                    />
                                                ) : (
                                                    <div className="flex flex-col items-center justify-center text-text-secondary opacity-50">
                                                        <Lock className="w-12 h-12 mb-3" />
                                                        <span className="text-sm font-bold uppercase tracking-widest">Protected Image</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                                        <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">
                                            {project.role}
                                        </span>

                                        <h4 className="text-2xl font-heading font-bold mb-4 text-white">
                                            {project.name}
                                        </h4>

                                        <p className="text-text-secondary text-base leading-relaxed mb-6 flex-grow">
                                            {project.description}
                                        </p>

                                        {/* Metrics (if any) */}
                                        {(project as any).metrics && (project as any).metrics.length > 0 && (
                                            <div className="grid grid-cols-3 gap-3 mb-6 p-4 bg-surface/50 rounded-xl border border-primary/10">
                                                {(project as any).metrics.map((metric: any, idx: number) => {
                                                    const iconMap: Record<string, any> = {
                                                        TrendingUp, Star, Zap, Clock, Users, CheckCircle, MessageSquare, Download
                                                    };
                                                    const IconComponent = iconMap[metric.icon] || TrendingUp;
                                                    return (
                                                        <div key={idx} className="text-center">
                                                            <IconComponent className="w-4 h-4 text-primary mx-auto mb-1" />
                                                            <div className="text-xs font-bold text-white">{metric.value}</div>
                                                            <div className="text-[10px] text-text-secondary uppercase tracking-wider line-clamp-1">{metric.label}</div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )}

                                        <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-border-subtle/50">
                                            {project.tech.map((t) => (
                                                <div key={t} className="flex items-center space-x-2 group/tag">
                                                    <div className="w-4 h-4 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center group-hover/tag:bg-secondary group-hover/tag:border-secondary transition-all">
                                                        <svg className="w-2.5 h-2.5 text-secondary group-hover/tag:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 12l5 5L20 7" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-[11px] font-bold text-white/60 group-hover/tag:text-secondary uppercase tracking-wider transition-colors">
                                                        {t}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 text-center border border-border-subtle rounded-3xl bg-surface/20">
                            <h3 className="text-xl font-heading font-bold text-white mb-2">No Featured Projects Yet</h3>
                        </div>
                    )}
                </section>
            </main>

            <Footer />
        </>
    );
}
