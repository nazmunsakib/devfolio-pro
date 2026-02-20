'use client';

import { useEffect, useRef, ReactNode } from 'react';

type AnimationType = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'zoom-in';

interface AnimateOnScrollProps {
    children: ReactNode;
    animation?: AnimationType;
    delay?: number; // in ms
    className?: string;
    threshold?: number;
    once?: boolean; // if true, only animate once; default false = replay every scroll
}

const AnimateOnScroll = ({
    children,
    animation = 'fade-up',
    delay = 0,
    className = '',
    threshold = 0.12,
    once = false,
}: AnimateOnScrollProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.style.transitionDelay = `${delay}ms`;
                    el.classList.add('aos-animate');
                    if (once) observer.unobserve(el);
                } else {
                    // Reset so it replays next time the element scrolls into view
                    el.style.transitionDelay = '0ms';
                    el.classList.remove('aos-animate');
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.unobserve(el);
    }, [delay, threshold, once]);

    return (
        <div ref={ref} className={`aos-init aos-${animation} ${className}`}>
            {children}
        </div>
    );
};

export default AnimateOnScroll;
