'use client';
import React from 'react';
import Button from './ui/Button';
import { portfolioData } from '@/data/portfolio';
import AnimateOnScroll from './AnimateOnScroll';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-10 lg:pt-20 overflow-hidden bg-grid">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="max-w-2xl text-center lg:text-left">
                        <AnimateOnScroll animation="fade-up" delay={0}>
                            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-primary/20 backdrop-blur-sm">
                                Building Your Next Web Solution
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fade-up" delay={100}>
                            <h1 className="mb-8">
                                <span className="block text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 lg:mb-6 text-white tracking-tight leading-tight">
                                    Nazmun <span className="text-primary italic">Sakib</span>
                                </span>
                                <span className="block text-lg lg:text-3xl font-heading font-medium text-white/90 tracking-wide">
                                    {portfolioData.title}
                                </span>
                            </h1>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fade-up" delay={200}>
                            <p className="text-sm lg:text-lg text-text-secondary mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                                {portfolioData.summary}
                            </p>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fade-up" delay={300}>
                            <ul className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-10">
                                {['WordPress', 'WooCommerce', 'Laravel', 'Ai Automation'].map((item) => (
                                    <li key={item} className="flex items-center space-x-3 group cursor-default">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/40 group-hover:bg-secondary group-hover:border-secondary transition-all duration-300 shadow-[0_0_10px_rgba(236,145,255,0.1)] group-hover:shadow-[0_0_15px_rgba(236,145,255,0.4)]">
                                            <svg className="w-3.5 h-3.5 text-secondary group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 12l5 5L20 7" />
                                            </svg>
                                        </div>
                                        <span className="text-[10px] sm:text-sm font-bold uppercase tracking-[0.1em] text-white/70 group-hover:text-secondary transition-colors duration-300">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fade-up" delay={400}>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-5">
                                <Button
                                    href="#contact"
                                    size="lg"
                                    variant="primary"
                                    className="group px-6 sm:px-8"
                                >
                                    <span>Let&apos;s Work Together</span>
                                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Button>
                                <Button
                                    href={portfolioData.socials.resumeUrl}
                                    size="lg"
                                    variant="outline"
                                    className="group px-6 sm:px-8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    download
                                >
                                    <span>Download CV</span>
                                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                </Button>
                            </div>
                        </AnimateOnScroll>
                    </div>

                    <AnimateOnScroll animation="zoom-in" delay={200} className="hidden lg:flex justify-center relative">
                        <div className="relative w-[500px] h-[500px] flex items-center justify-center">
                            {/* Concentric Circles */}
                            <div className="absolute w-[450px] h-[450px] rounded-full border-4 border-primary/20 animate-[spin_20s_linear_infinite]" />
                            <div className="absolute w-[350px] h-[350px] rounded-full border-2 border-secondary/15 animate-[spin_15s_linear_infinite_reverse]" />
                            <div className="absolute w-[250px] h-[250px] rounded-full border-2 border-primary/10 animate-[spin_10s_linear_infinite]" />

                            {/* Center Icon */}
                            <div className="relative z-10 w-32 h-32 rounded-full bg-surface-hover/80 border border-white/10 flex items-center justify-center backdrop-blur-xl shadow-[0_0_50px_rgba(4,232,185,0.1)]">
                                <svg className="w-24 h-24 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>

                            {/* Floating particles or accents */}
                            <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary rounded-full blur-[2px] animate-pulse" />
                            <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-secondary rounded-full blur-[3px] animate-pulse" />
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>

            {/* Bottom scroll indicator - centered as in image */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                <div className="w-[8px] h-[8px] rounded-full bg-primary animate-bounce" />
                <div className="w-[2px] h-8 bg-gradient-to-b from-primary to-transparent" />
            </div>
        </section>
    );
};

export default Hero;
