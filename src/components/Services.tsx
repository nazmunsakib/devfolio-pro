import React from 'react';
import Card from './ui/Card';
import { portfolioData } from '@/data/portfolio';
import * as LucideIcons from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const Services = () => {
    // Helper to render icon safely
    const renderIcon = (iconName: string) => {

        const brandIcons: { [key: string]: string } = {
            wordpress: 'M320 72C183 72 72 183 72 320C72 457 183 568 320 568C457 568 568 457 568 320C568 183 457 72 320 72zM97 320C97 287.7 103.9 257 116.3 229.3L222.7 520.7C148.3 484.5 97 408.2 97 320zM320 543C298.1 543 277 539.8 257 533.9L323.9 339.5L392.4 527.3C392.9 528.4 393.4 529.4 394 530.4C370.9 538.5 346 543 320 543zM350.7 215.5C364.1 214.8 376.2 213.4 376.2 213.4C388.2 212 386.8 194.3 374.8 195C374.8 195 338.7 197.8 315.4 197.8C293.5 197.8 256.7 195 256.7 195C244.7 194.3 243.3 212.7 255.3 213.4C255.3 213.4 266.7 214.8 278.7 215.5L313.4 310.7L264.6 457L183.4 215.5C196.8 214.8 208.9 213.4 208.9 213.4C220.9 212 219.5 194.3 207.5 195C207.5 195 171.4 197.8 148.1 197.8C143.9 197.8 139 197.7 133.7 197.5C173.6 137 242.1 97 320 97C378 97 430.9 119.2 470.6 155.5C469.6 155.4 468.7 155.3 467.7 155.3C445.8 155.3 430.3 174.4 430.3 194.9C430.3 213.3 440.9 228.8 452.2 247.2C460.7 262 470.6 281.1 470.6 308.7C470.6 327.8 463.3 349.9 453.6 380.8L431.4 455.1L350.7 215.5zM432.1 512.7L500.2 315.8C512.9 284 517.2 258.6 517.2 235.9C517.2 227.7 516.7 220.1 515.7 213C533.1 244.8 543 281.2 543 320C543 402.3 498.4 474.1 432.1 512.7z',
            woocommerce: 'M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z',
            laravel: 'M568.6 179.8C568.5 179.6 568.4 179.3 568.3 179.1C568.2 178.7 568 178.3 567.8 177.9C567.6 177.7 567.5 177.4 567.3 177.2C567.1 176.9 566.8 176.6 566.6 176.3C566.4 176.1 566.1 175.9 565.8 175.7C565.5 175.5 565.2 175.2 564.9 175L468.6 119.5C467.4 118.8 466 118.4 464.6 118.4C463.2 118.4 461.8 118.8 460.6 119.5L364.3 175C364 175.2 363.7 175.4 363.4 175.7C363.1 175.9 362.9 176.1 362.6 176.3C362.3 176.6 362.1 176.9 361.9 177.2C361.7 177.4 361.5 177.6 361.4 177.9C361.2 178.3 361 178.7 360.9 179.1C360.8 179.3 360.7 179.5 360.6 179.8C360.4 180.5 360.3 181.2 360.3 181.9L360.3 287.1L280.1 333.3L280.1 127.4C280.1 126.7 280 126 279.8 125.3C279.7 125.1 279.6 124.9 279.5 124.6C279.4 124.2 279.2 123.8 279 123.4C278.9 123.1 278.6 122.9 278.5 122.7C278.3 122.4 278 122.1 277.8 121.8C277.6 121.6 277.3 121.4 277 121.2C276.7 121 276.4 120.7 276.1 120.5L179.8 65.1C178.6 64.4 177.2 64 175.8 64C174.4 64 173 64.4 171.8 65.1L75.5 120.5C75.2 120.7 74.9 120.9 74.6 121.2C74.3 121.4 74.1 121.6 73.8 121.8C73.5 122.1 73.3 122.4 73.1 122.7C72.9 123 72.7 123.2 72.5 123.4C72.3 123.8 72.1 124.2 72 124.6C71.9 124.8 71.8 125 71.7 125.3C71.5 126 71.4 126.7 71.4 127.4L71.4 457.1C71.4 458.5 71.8 459.9 72.5 461.1C73.2 462.3 74.2 463.3 75.4 464L268 574.9C268.4 575.1 268.9 575.3 269.3 575.4C269.5 575.5 269.7 575.6 269.9 575.7C271.2 576.1 272.7 576.1 274 575.7C274.2 575.6 274.4 575.5 274.6 575.5C275.1 575.3 275.6 575.2 276 574.9L468.6 464.1C469.8 463.4 470.8 462.4 471.5 461.2C472.2 460 472.6 458.6 472.6 457.2L472.6 351.9L564.8 298.8C566 298.1 567 297.1 567.7 295.8C568.4 294.5 568.8 293.2 568.8 291.8L568.8 182C568.8 181.3 568.7 180.6 568.6 179.9zM175.8 81.3L256 127.4L175.8 173.6L95.6 127.4L175.8 81.2zM264 141.3L264 342.6C230.8 361.7 204.1 377.1 183.8 388.8L183.8 187.5C217 168.4 243.7 153 264 141.3zM264 554.1L87.5 452.5L87.5 141.3C107.8 153 134.6 168.4 167.7 187.5L167.7 402.7C167.7 403 167.8 403.3 167.8 403.6C167.8 404 167.9 404.4 168 404.8C168.1 405.1 168.2 405.4 168.4 405.7C168.5 406 168.7 406.4 168.8 406.7C169 407 169.2 407.2 169.4 407.5C169.6 407.8 169.8 408.1 170.1 408.3C170.3 408.5 170.6 408.7 170.9 408.9C171.2 409.1 171.5 409.4 171.8 409.6L264 461.8L264.1 554.2zM272 447.9L192 402.6C246.7 371.1 305.5 337.3 368.3 301.1L448.4 347.2C419 364 360.2 397.5 272 447.9zM456.5 452.5L280 554.1L280 461.8C381.4 404 440.2 370.4 456.5 361L456.5 452.4zM456.5 333.4C436.2 321.8 409.4 306.4 376.3 287.3L376.3 195.9C396.6 207.6 423.4 223 456.5 242.1L456.5 333.4zM464.5 228.1L384.3 181.9L464.5 135.7L544.7 181.8L464.5 228zM472.5 333.4L472.5 242.1C505.7 223 532.5 207.6 552.8 195.9L552.8 287.3L472.5 333.5z',
        };

        const lucideMap: { [key: string]: any } = {
            'layout': LucideIcons.Layout,
            'bot': LucideIcons.Bot,
            'zap': LucideIcons.Zap,
        };

        if (brandIcons[iconName]) {
            return (
                <svg
                    viewBox="0 0 640 640"
                    fill="currentColor"
                    className="w-8 h-8 text-primary group-hover:drop-shadow-[0_0_15px_rgba(4,232,185,0.6)] transition-all duration-300"
                >
                    <path d={brandIcons[iconName]} />
                </svg>
            );
        }

        const IconComponent = lucideMap[iconName] || LucideIcons.HelpCircle;
        return <IconComponent className="w-8 h-8 text-primary group-hover:drop-shadow-[0_0_15px_rgba(4,232,185,0.6)] transition-all duration-300" />;
    };

    return (
        <section id="services" className="py-16 lg:py-24 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6">
                <AnimateOnScroll animation="fade-up" className="text-center mb-16">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-secondary mb-4">My Services</h2>
                    <h3 className="text-[32px] md:text-4xl font-heading font-bold max-w-2xl mx-auto leading-tight">
                        Premium Solutions Tailored to Your <span className="text-primary italic">Business Goals.</span>
                    </h3>
                </AnimateOnScroll>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.services.map((service, index) => (
                        <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                            <Card
                                className="p-8 group border-primary/20 shadow-[0_0_20px_rgba(4,232,185,0.03)] transition-all duration-500 relative overflow-hidden h-full"
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
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
