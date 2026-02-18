import React from 'react';
import { portfolioData } from '@/data/portfolio';
import Button from './ui/Button';
import { Star, ArrowUpRight } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-surface/20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Case Studies</h2>
                        <h3 className="text-[32px] font-heading font-bold">Featured Projects</h3>
                    </div>
                    <p className="text-text-secondary max-w-md md:text-right">
                        A selection of my recent work building high-performance web applications and premium digital experiences.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {portfolioData.projects.map((project) => (
                        <div key={project.id} className="group relative flex flex-col bg-[#111827] border border-border-subtle rounded-3xl overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-2xl">
                            {/* Image Container with Featured Badge */}
                            <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                                {/* Mockup Background Style */}
                                <div className="absolute inset-0 flex items-center justify-center p-6 md:p-10">
                                    <div className="w-full h-full bg-surface-hover rounded-xl border border-white/5 shadow-2xl overflow-hidden relative">
                                        {/* Browser Header Mock */}
                                        <div className="h-6 bg-white/5 border-b border-white/5 flex items-center px-3 gap-1.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-400/50" />
                                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/50" />
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-400/50" />
                                        </div>
                                        {/* Project Preview Content */}
                                        <div className="flex items-center justify-center h-full bg-white/5 opacity-20">
                                            <span className="text-6xl font-black">.com</span>
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
                            </div>

                            {/* Content */}
                            <div className="p-8 md:p-10 flex flex-col flex-grow">
                                <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4">
                                    {project.role}
                                </span>

                                <h4 className="text-2xl md:text-3xl font-heading font-bold mb-5 text-white group-hover:text-primary transition-colors">
                                    {project.name}
                                </h4>

                                <p className="text-text-secondary text-base leading-relaxed mb-6 line-clamp-2 md:line-clamp-none">
                                    {project.description}
                                </p>

                                <div className="mb-8 group/link">
                                    <div className="inline-flex items-center text-sm font-bold uppercase tracking-[0.2em] text-white group-hover/link:text-primary transition-colors duration-300">
                                        <span>View Project</span>
                                        <ArrowUpRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2.5 mt-auto">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-[11px] font-semibold text-primary px-4 py-1.5 border border-primary/20 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Link logic if needed - currently interactive but staying on same card style */}
                            <a href={project.link} className="absolute inset-0 z-10" />
                        </div>
                    ))}
                </div>

                <div className="text-center mt-20">
                    <Button variant="outline" size="lg">Review All Work</Button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
