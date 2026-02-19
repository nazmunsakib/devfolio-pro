import React from 'react';
import Button from './ui/Button';
import { portfolioData } from '@/data/portfolio';
import { Linkedin, Github, Instagram, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
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
                            <div className="flex flex-wrap gap-5 mb-12">
                                <a href="https://www.linkedin.com/in/nazmunsakib/" className="w-14 h-14 rounded-full bg-surface border border-border-subtle flex items-center justify-center hover:border-primary hover:text-primary hover:-translate-y-1 transition-all shadow-lg group">
                                    <Linkedin className="w-6 h-6 group-hover:drop-shadow-[0_0_8px_rgba(4,232,185,0.4)]" />
                                </a>
                                <a href="https://github.com/nazmunsakib" className="w-14 h-14 rounded-full bg-surface border border-border-subtle flex items-center justify-center hover:border-primary hover:text-primary hover:-translate-y-1 transition-all shadow-lg group">
                                    <Github className="w-6 h-6 group-hover:drop-shadow-[0_0_8px_rgba(4,232,185,0.4)]" />
                                </a>
                                <a href="https://www.instagram.com/sakib_aura/" className="w-14 h-14 rounded-full bg-surface border border-border-subtle flex items-center justify-center hover:border-primary hover:text-primary hover:-translate-y-1 transition-all shadow-lg group">
                                    <Instagram className="w-6 h-6 group-hover:drop-shadow-[0_0_8px_rgba(4,232,185,0.4)]" />
                                </a>
                            </div>
                            <Button size="lg" className="w-full">Download Resume</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
