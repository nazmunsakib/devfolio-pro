"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

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

    // Close mobile menu on scroll
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const navLinks = [
        { name: 'About Me', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleNavClick = () => setMobileOpen(false);

    return (
        <>
            <nav
                role="navigation"
                aria-label="Main navigation"
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0b0f14]/90 backdrop-blur border-b border-[#2e355a] py-4' : 'bg-transparent py-6'}`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <Link href="/" aria-label="Nazmun Sakib - Home" className="text-2xl font-heading font-bold tracking-tighter hover:text-primary transition-colors">
                        SAKIB<span className="text-primary">.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-sm font-medium transition-all duration-300 relative group ${isActive ? 'text-primary' : 'text-text-secondary hover:text-white'}`}
                                    aria-current={isActive ? 'page' : undefined}
                                >
                                    {link.name}
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

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-white/5 transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={mobileOpen}
                        aria-controls="mobile-menu"
                    >
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation"
                className={`fixed inset-0 z-40 flex flex-col bg-[#0b0f14]/97 backdrop-blur-xl transition-all duration-300 md:hidden ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                <div className="flex flex-col items-center justify-center flex-grow gap-2 pt-20 pb-10 px-6">
                    {navLinks.map((link, index) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={handleNavClick}
                                className={`w-full text-center py-4 text-2xl font-heading font-bold transition-all duration-300 border-b border-white/5 ${isActive ? 'text-primary' : 'text-white/80 hover:text-primary'}`}
                                style={{ transitionDelay: mobileOpen ? `${index * 50}ms` : '0ms' }}
                                aria-current={isActive ? 'page' : undefined}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                    <Link
                        href="#contact"
                        onClick={handleNavClick}
                        className="mt-6 w-full text-center py-4 rounded-xl border border-primary text-primary text-lg font-bold hover:bg-primary hover:text-black transition-all duration-300"
                    >
                        Hire Me
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
