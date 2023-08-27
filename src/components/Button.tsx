import { cn } from '@/helpers';
import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes, ReactNode } from 'react';

const buttonVariants = cva(
  'text-white py-2 px-3 rounded-md transition-colors duration-300 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-blue-800 hover:bg-blue-800/80',
        secondary: 'bg-blue-900 hover:bg-blue-900/80',
        destructive: 'bg-red-800 hover:bg-red-800/80',
        link: 'text-blue-500 underline-offset-4 hover:underline',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  className?: string;
}

export default function Button({ children, className, variant, ...props }: Props) {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant, className }))}
    >
      {children}
    </button>
  );
}
