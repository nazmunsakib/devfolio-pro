import React from 'react';
import { portfolioData } from '@/data/portfolio';

const Experience = () => {
    return (
        <section id="experience" className="py-16 lg:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-secondary mb-4">Professional Journey</h2>
                    <h3 className="text-[32px] font-heading font-bold">Work Experience</h3>
                </div>

                <div className="max-w-4xl mx-auto space-y-12">
                    {portfolioData.experience.map((exp, idx) => (
                        <div key={idx} className="relative pl-8 md:pl-0">
                            {/* Timeline Line */}
                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border-subtle -translate-x-1/2" />

                            <div className={`flex flex-col md:flex-row items-center justify-between mb-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="md:w-[45%]">
                                    <div className={`p-8 rounded-2xl bg-surface border border-border-subtle transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_20px_rgba(4,232,185,0.03)] ${idx % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 uppercase tracking-wider">
                                            {exp.range}
                                        </span>
                                        <h4 className="text-[22px] font-heading font-bold text-white mb-1 group-hover:text-primary transition-colors">
                                            {exp.role}
                                        </h4>
                                        <p className="text-primary font-medium mb-6 uppercase tracking-widest text-sm">
                                            {exp.company}
                                        </p>
                                        <ul className={`space-y-3 text-text-secondary text-sm leading-relaxed ${idx % 2 !== 0 ? 'md:items-end flex flex-col' : ''}`}>
                                            {exp.achievements.map((item, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className={`w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0 ${idx % 2 !== 0 ? 'md:ml-3 md:order-last' : 'mr-3'}`} />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-4 w-4 h-4 rounded-full bg-[#0b0f14] border-4 border-primary -translate-x-1/2 z-10 hidden md:block" />

                                <div className="md:w-[45%]" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
