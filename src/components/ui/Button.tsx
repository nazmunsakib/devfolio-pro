import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-heading font-semibold transition-all duration-300 rounded-lg active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-primary text-[#0b0f14] hover:shadow-[0_0_25px_rgba(4,232,185,0.5)] hover:brightness-110",
        secondary: "bg-secondary text-[#0b0f14] hover:shadow-[0_0_25px_rgba(236,145,255,0.5)] hover:brightness-110",
        outline: "border border-border-subtle text-secondary/80 hover:bg-primary/5 hover:border-secondary/80 backdrop-blur-sm bg-secondary/10"
    };


    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-2.5 text-sm",
        lg: "px-8 py-3.5 text-base"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
