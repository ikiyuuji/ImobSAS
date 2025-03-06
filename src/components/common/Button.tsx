import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  children,
  className,
  disabled,
  ...props
}) => {
  const variantStyles = {
    primary: 'bg-primary hover:bg-primary-light text-white shadow-sm transition-all duration-300 ease-in-out',
    secondary: 'bg-secondary hover:bg-secondary/80 text-secondary-foreground shadow-sm',
    outline: 'border border-white/20 text-white hover:bg-white/10',
    ghost: 'hover:bg-white/10 text-white',
    link: 'text-primary underline-offset-4 hover:underline p-0 h-auto',
  };

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 rounded-md',
    md: 'text-sm px-4 py-2 rounded-md',
    lg: 'text-base px-6 py-3 rounded-md',
  };

  return (
    <button
      type="button"
      disabled={disabled || isLoading}
      className={cn(
        'font-medium relative inline-flex items-center justify-center gap-2 transition-all focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:opacity-60 disabled:pointer-events-none',
        variantStyles[variant],
        sizeStyles[size],
        fullWidth ? 'w-full' : '',
        className
      )}
      {...props}
    >
      {isLoading && (
        <Loader2 className="animate-spin h-4 w-4" />
      )}
      
      {!isLoading && icon && iconPosition === 'left' && (
        <span className="inline-flex">{icon}</span>
      )}
      
      <span className={isLoading ? 'opacity-0' : ''}>{children}</span>
      
      {!isLoading && icon && iconPosition === 'right' && (
        <span className="inline-flex">{icon}</span>
      )}
    </button>
  );
};

export default Button;
