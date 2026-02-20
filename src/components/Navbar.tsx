"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        // Intersection Observer for scroll-spy
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0b0f14]/80 backdrop-blur-lg border-b border-border-subtle py-4' : 'bg-transparent py-6'
            }`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-heading font-bold tracking-tighter hover:text-primary transition-colors">
                    SAKIB<span className="text-primary">.</span>
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-all duration-300 relative group ${isActive ? 'text-primary' : 'text-text-secondary hover:text-white'
                                    }`}
                            >
                                {link.name}
                                {/* Active Indicator Dot */}
                                <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0 scale-0'}`} />
                            </Link>
                        );
                    })}
                    <Link
                        href="#contact"
                        className="px-5 py-2 rounded-lg border border-primary text-primary text-sm font-medium hover:bg-primary hover:text-black transition-all duration-300"
                    >
                        Hire Me
                    </Link>
                </div>

                {/* Mobile menu button could go here */}
            </div>
        </nav>
    );
};

export default Navbar;
