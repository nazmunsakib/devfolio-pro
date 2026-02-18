import React from 'react';
import Button from './ui/Button';
import { portfolioData } from '@/data/portfolio';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-grid">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-primary/20 backdrop-blur-sm">
                            Welcome to my portfolio
                        </div>

                        <h1 className="text-6xl lg:text-7xl font-heading font-bold mb-6 text-white tracking-tight">
                            Nazmun <span className="text-primary italic">Sakib</span>
                        </h1>

                        <h2 className="text-xl lg:text-3xl font-heading font-medium text-white/90 mb-8 tracking-wide">
                            {portfolioData.title}
                        </h2>

                        <p className="text-base lg:text-lg text-text-secondary mb-10 leading-relaxed max-w-lg">
                            I craft premium, scalable web solutions that convert visitors into customers.
                            Specialized in building high-performance WordPress sites and custom web applications for international clients.
                        </p>

                        <div className="flex flex-wrap gap-5">
                            <Button size="lg" variant="primary" className="group">
                                <span>Let&apos;s Work Together</span>
                                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Button>
                            <Button size="lg" variant="outline" className="group">
                                <span>Download CV</span>
                                <svg className="w-4 h-4 ml-2 transform group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </Button>
                        </div>
                    </div>

                    <div className="hidden lg:flex justify-center relative">
                        <div className="relative w-[500px] h-[500px] flex items-center justify-center">
                            {/* Concentric Circles */}
                            <div className="absolute w-[400px] h-[400px] rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]" />
                            <div className="absolute w-[300px] h-[300px] rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]" />
                            <div className="absolute w-[200px] h-[200px] rounded-full border border-primary/10 animate-[spin_10s_linear_infinite]" />

                            {/* Center Icon */}
                            <div className="relative z-10 w-32 h-32 rounded-full bg-surface-hover/80 border border-white/10 flex items-center justify-center backdrop-blur-xl shadow-[0_0_50px_rgba(4,232,185,0.1)]">
                                <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>

                            {/* Floating particles or accents */}
                            <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary rounded-full blur-[2px] animate-pulse" />
                            <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-secondary rounded-full blur-[3px] animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom scroll indicator - centered as in image */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                <div className="w-1 h-1 rounded-full bg-primary animate-bounce" />
                <div className="w-[1px] h-8 bg-gradient-to-b from-primary to-transparent" />
            </div>
        </section>
    );
};

export default Hero;
