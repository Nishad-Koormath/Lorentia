import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: ButtonProps) => {
  // Base styles
  const baseStyles = "btn fw-light rounded-pill";

  // Variants
  const variants = {
    primary: "btn-primary",
    outline: "btn-outline-warning",
    ghost: "btn-link text-warning"
  };

  // Sizes
  const sizes = {
    sm: "btn-sm",
    md: "",
    lg: "btn-lg"
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
