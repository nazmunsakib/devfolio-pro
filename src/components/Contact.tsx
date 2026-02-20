import React from 'react';
import Button from './ui/Button';
import { portfolioData } from '@/data/portfolio';
import { Linkedin, Github, Instagram, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-16 lg:py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-secondary/5 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto rounded-3xl bg-surface border border-border-subtle overflow-hidden relative shadow-2xl">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />

                    <div className="grid md:grid-cols-2">
                        {/* Left side: Info */}
                        <div className="p-8 md:p-16 border-b md:border-b-0 md:border-r border-border-subtle">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Let&apos;s Connect</h2>
                            <h3 className="text-[32px] font-heading font-bold mb-8 leading-tight text-white">
                                Ready to elevate your <span className="text-secondary italic">Digital Presence?</span>
                            </h3>
                            <p className="text-text-secondary text-lg mb-12">
                                I am available for WordPress plugin development, WooCommerce customization, AI automation, and full-stack projects worldwide. Let’s build a fast, scalable, and business-focused solution tailored to your needs.
                            </p>

                            <div className="space-y-6">
                                <a href={`mailto:${portfolioData.socials.email}`} className="flex items-center group">
                                    <div className="w-12 h-12 rounded-xl bg-surface-hover border border-border-subtle flex items-center justify-center mr-4 group-hover:border-primary/50 transition-colors shadow-lg">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-1">Email Me</p>
                                        <p className="text-lg font-medium text-white group-hover:text-primary transition-colors">{portfolioData.socials.email}</p>
                                    </div>
                                </a>

                                <a href={portfolioData.socials.whatsapp} className="flex items-center group">
                                    <div className="w-12 h-12 rounded-xl bg-surface-hover border border-border-subtle flex items-center justify-center mr-4 group-hover:border-primary/50 transition-colors shadow-lg">
                                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-1">Chat on WhatsApp</p>
                                        <p className="text-lg font-medium text-white group-hover:text-primary transition-colors">Start Conversation</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Right side: Socials/CTA */}
                        <div className="p-8 md:p-16 bg-surface-hover/50 flex flex-col justify-center items-center text-center md:items-start md:text-left">
                            <p className="text-sm font-bold text-white uppercase tracking-widest mb-8">Follow My Work</p>
                            <div className="flex flex-nowrap md:flex-wrap gap-3 sm:gap-5 mb-12 overflow-x-auto pb-4 max-w-full no-scrollbar">
                                <a href={portfolioData.socials.linkedin} className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-surface border border-border-subtle flex items-center justify-center hover:border-primary hover:text-primary hover:-translate-y-1 transition-all shadow-lg group">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6 group-hover:drop-shadow-[0_0_8px_rgba(4,232,185,0.4)]">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a href={portfolioData.socials.github} className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-surface border border-border-subtle flex items-center justify-center hover:border-primary hover:text-primary hover:-translate-y-1 transition-all shadow-lg group">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6 group-hover:drop-shadow-[0_0_8px_rgba(4,232,185,0.4)]">
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                    </svg>
                                </a>
                                <a href={portfolioData.socials.instagram} className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-surface border border-border-subtle flex items-center justify-center hover:border-primary hover:text-primary hover:-translate-y-1 transition-all shadow-lg group">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6 group-hover:drop-shadow-[0_0_8px_rgba(4,232,185,0.4)]">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.351-.2 6.77-2.618 6.97-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.351-2.618-6.77-6.98-6.97C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                    </svg>
                                </a>
                                <a href={portfolioData.socials.twitter} className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-surface border border-border-subtle flex items-center justify-center hover:border-primary hover:text-primary hover:-translate-y-1 transition-all shadow-lg group">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6 group-hover:drop-shadow-[0_0_8px_rgba(4,232,185,0.4)]">
                                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
                                    </svg>
                                </a>
                                <a href={portfolioData.socials.wordpress} className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-surface border border-border-subtle flex items-center justify-center hover:border-primary hover:text-primary hover:-translate-y-1 transition-all shadow-lg group">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-7 md:h-7 group-hover:drop-shadow-[0_0_8px_rgba(4,232,185,0.4)]">
                                        <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.615 0 12 0" />
                                    </svg>
                                </a>
                            </div>
                            <Button size="lg" className="w-full md:w-auto">Download Resume</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
