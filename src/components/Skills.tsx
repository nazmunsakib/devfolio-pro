import React from 'react';
import Card from './ui/Card';
import { portfolioData } from '@/data/portfolio';
import * as LucideIcons from 'lucide-react';

const Skills = () => {
    // Helper to render Lucide icon safely
    const renderIcon = (iconName: string) => {
        // Map custom keys to Lucide icons if they don't match exactly
        const iconMap: { [key: string]: any } = {
            'plugin': LucideIcons.Blocks,
            'layout': LucideIcons.Layout,
            'shopping-cart': LucideIcons.ShoppingCart,
            'zap': LucideIcons.Zap,
            'code': LucideIcons.Code2,
            'file-code': LucideIcons.FileCode,
            'palette': LucideIcons.Palette,
            'terminal': LucideIcons.Terminal,
            'server': LucideIcons.Server,
            'database': LucideIcons.Database,
            'hard-drive': LucideIcons.HardDrive,
            'globe': LucideIcons.Globe,
            'github': LucideIcons.Github,
            'box': LucideIcons.Box,
            'figma': LucideIcons.Framer, // Using Framer as a professional placeholder for Figma if Figma icon is not available in standard Lucide
            'cloud': LucideIcons.Cloud,
        };

        const IconComponent = iconMap[iconName] || LucideIcons.HelpCircle;
        return <IconComponent className="w-6 h-6 text-primary group-hover:drop-shadow-[0_0_8px_rgba(4,232,185,0.4)]" />;
    };

    return (
        <section id="skills" className="py-24 bg-surface/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Technical Expertise</h2>
                    <h3 className="text-[32px] font-heading font-bold">Skills & Technologies</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {portfolioData.skills.map((skillGroup, groupIdx) => (
                        <div key={groupIdx} className="space-y-6">
                            <h4 className="text-xl font-heading font-semibold px-2 border-l-2 border-primary/50 text-white/90">
                                {skillGroup.category}
                            </h4>
                            <div className="space-y-4">
                                {skillGroup.items.map((skill, idx) => (
                                    <Card key={idx} className="p-[10px] flex items-center space-x-4 group">
                                        <div className="w-10 h-10 rounded-lg bg-[#0b0f14] flex items-center justify-center group-hover:scale-110 transition-transform">
                                            {renderIcon(skill.icon)}
                                        </div>
                                        <div>
                                            <h5 className="font-medium text-sm text-white/90 group-hover:text-primary transition-colors">
                                                {skill.name}
                                            </h5>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
