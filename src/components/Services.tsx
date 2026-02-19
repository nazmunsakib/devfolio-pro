import React from 'react';
import Card from './ui/Card';
import { portfolioData } from '@/data/portfolio';
import * as LucideIcons from 'lucide-react';

const Services = () => {
    // Helper to render Lucide icon safely
    const renderIcon = (iconName: string) => {
        const iconMap: { [key: string]: any } = {
            'plugin': LucideIcons.Blocks,
            'layout': LucideIcons.Layout,
            'shopping-cart': LucideIcons.ShoppingCart,
            'zap': LucideIcons.Zap,
            'code': LucideIcons.Code2,
            'monitor': LucideIcons.Monitor,
        };

        const IconComponent = iconMap[iconName] || LucideIcons.HelpCircle;
        return <IconComponent className="w-8 h-8 text-primary group-hover:drop-shadow-[0_0_15px_rgba(4,232,185,0.6)] transition-all duration-300" />;
    };

    return (
        <section id="services" className="py-24 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-secondary mb-4">My Services</h2>
                    <h3 className="text-[32px] md:text-4xl font-heading font-bold max-w-2xl mx-auto leading-tight">
                        Premium Solutions Tailored to Your <span className="text-primary italic">Business Goals.</span>
                    </h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.services.map((service, index) => (
                        <Card
                            key={index}
                            className="p-8 group border-primary/20 shadow-[0_0_20px_rgba(4,232,185,0.03)] transition-all duration-500 relative overflow-hidden"
                        >
                            {/* Card Background Glow */}
                            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />

                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-surface-hover border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-500">
                                    {renderIcon(service.icon)}
                                </div>

                                <h4 className="text-xl font-heading font-bold mb-4 text-white group-hover:text-primary transition-colors">
                                    {service.title}
                                </h4>

                                <p className="text-text-secondary leading-relaxed group-hover:text-white/80 transition-colors">
                                    {service.description}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
