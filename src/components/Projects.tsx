'use client';
import React from 'react';
import { portfolioData } from '@/data/portfolio';
import Button from './ui/Button';
import Image from 'next/image';
import { Star, ArrowUpRight, Lock } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const Projects = () => {
    return (
        <section id="projects" className="py-16 lg:py-24 bg-surface/20">
            <div className="container mx-auto px-6">
                <AnimateOnScroll animation="fade-up" className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-secondary mb-4">Case Studies</h2>
                        <h3 className="text-[32px] font-heading font-bold">Featured Projects</h3>
                    </div>
                    <p className="text-text-secondary max-w-md md:text-right">
                        A selection of my recent work building high-performance web applications and premium digital experiences.
                    </p>
                </AnimateOnScroll>

                <div className="grid lg:grid-cols-2 gap-10">
                    {portfolioData.projects.map((project) => (
                        <AnimateOnScroll key={project.id} animation="fade-up" delay={100}>
                            <div className="group relative flex flex-col bg-[#111827] border border-border-subtle rounded-3xl overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-2xl h-full">
                                {/* Image Container with Featured Badge */}
                                <a href={project.link} target="_blank" rel={`noopener noreferrer ${(project as any).nofollow ? 'nofollow' : ''}`.trim()} className="relative block aspect-[16/10] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 group/img">
                                    {/* Mockup Background Style */}
                                    <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6 transition-transform duration-500 group-hover/img:scale-105">
                                        <div className="w-full h-full bg-surface-hover rounded-xl border border-white/5 shadow-2xl overflow-hidden relative">
                                            {/* Project Preview Content */}
                                            <div className="absolute inset-0 pt-6">
                                                <Image
                                                    src={project.image}
                                                    alt={project.name}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                    className="object-cover object-top opacity-70 group-hover/img:opacity-100 transition-opacity duration-500"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Featured Badge */}
                                    {(project as any).featured && (
                                        <div className="absolute top-6 right-6 z-20 flex items-center px-3 py-1 bg-primary rounded-full shadow-lg">
                                            <Star className="w-3 h-3 text-[#0b0f14] fill-current mr-1" />
                                            <span className="text-[10px] font-bold text-[#0b0f14] uppercase tracking-wider">
                                                Featured
                                            </span>
                                        </div>
                                    )}
                                </a>

                                {/* Content */}
                                <div className="p-4 md:p-6 flex flex-col flex-grow">
                                    <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">
                                        {project.role}
                                    </span>

                                    <h4 className="text-xl md:text-2xl font-heading font-bold mb-4 text-white group-hover:text-primary transition-colors">
                                        {project.name}
                                    </h4>

                                    <p className="text-text-secondary text-base leading-relaxed mb-4 line-clamp-2 md:line-clamp-none">
                                        {project.description}
                                    </p>

                                    <a href={project.link} target="_blank" rel={`noopener noreferrer ${(project as any).nofollow ? 'nofollow' : ''}`.trim()} className="mb-5 group/link inline-block">
                                        <div className="inline-flex items-center text-sm font-bold uppercase tracking-[0.2em] text-white group-hover/link:text-primary transition-colors duration-300">
                                            <span>View Project</span>
                                            <ArrowUpRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                                        </div>
                                    </a>

                                    <div className="flex flex-wrap gap-3 mt-auto">
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
                        </AnimateOnScroll>
                    ))}
                </div>

                {/* NDA Notice */}
                <AnimateOnScroll animation="fade-up" delay={100} className="mt-16 max-w-3xl mx-auto">
                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 backdrop-blur-sm">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Lock className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-grow text-center md:text-left">
                            <h4 className="text-white font-bold mb-2">Notice Regarding NDA Projects</h4>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                I have developed many interesting and complex projects that I cannot display publicly due to Non-Disclosure Agreements (NDA). If you are interested in seeing more examples of my technical capabilities, please <a href="#contact" className="text-primary hover:underline font-bold">contact me</a> and I can share relevant details privately.
                            </p>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
};


export default Projects;
