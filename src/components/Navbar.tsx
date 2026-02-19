"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
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
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-text-secondary hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="#contact"
                        className="px-5 py-2 rounded-lg border border-primary text-primary text-sm font-medium hover:bg-primary/10 transition-all"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile menu button could go here */}
            </div>
        </nav>
    );
};

export default Navbar;
