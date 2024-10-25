'use client';

import cn from 'classnames';

interface ButtonProps {
  href: string;
  text: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'white' | 'black';
  className?: string; // Add className prop for external customization
}

export const Button = ({ href, text, size = 'medium', variant = 'white', className }: ButtonProps) => {
  const sizeClasses = cn({
    'py-1 px-4 text-sm': size === 'small',
    'py-2 px-4 text-sm md:py-3 md:px-6 md:text-base lg:py-4 lg:px-8 lg:text-lg': size === 'medium',
    'py-3 px-8 text-lg': size === 'large',
  });

  const variantClasses = cn({
    'bg-black text-white': variant === 'black',
    'bg-white text-gray-800': variant === 'white',
  });

  return (
    <a
      href={href}
      className={cn('rounded-full font-bold inline-block', sizeClasses, variantClasses, className)} // Merge external className
      target="_blank"
      rel="noreferrer noopener"
    >
      {text}
    </a>
  );
};