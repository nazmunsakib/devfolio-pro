import Image from 'next/image';
import { portfolioData } from '@/data/portfolio';

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Professional Photo */}
                    <div className="lg:w-1/2 relative group">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-secondary opacity-20 blur-3xl rounded-full group-hover:opacity-30 transition-opacity duration-500" />
                        <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-2xl border-2 border-border-subtle bg-surface">
                            <Image
                                src="/images/nazmunsakib.jpg"
                                alt="Nazmun Sakib"
                                fill
                                className="object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                priority
                            />
                        </div>
                        {/* Decorative Frame Element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-xl -z-10 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform" />
                    </div>

                    <div className="lg:w-1/2">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">About Me</h2>
                        <h3 className="text-[32px] font-heading font-bold mb-8 leading-tight">
                            Crafting Digital Solutions with <span className="text-secondary italic">Technical Precision.</span>
                        </h3>

                        <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                            {portfolioData.about.text}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
                            {portfolioData.about.highlights.map((highlight, index) => (
                                <div key={index} className="flex items-center space-x-3 group/item">
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover/item:bg-primary group-hover/item:border-primary transition-all duration-300">
                                        <svg className="w-3.5 h-3.5 text-primary group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 12l5 5L20 7" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-semibold text-white/70 group-hover/item:text-primary transition-colors duration-300">
                                        {highlight}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
