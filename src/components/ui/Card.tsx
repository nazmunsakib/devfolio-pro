import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = true }) => {
    return (
        <div className={`
      bg-surface border border-border-subtle rounded-xl p-6 transition-all duration-300
      ${hoverEffect ? 'hover:border-primary/30 hover:shadow-[0_0_30px_rgba(4,232,185,0.05)] hover:-translate-y-1' : ''}
      ${className}
    `}>
            {children}
        </div>
    );
};

export default Card;
