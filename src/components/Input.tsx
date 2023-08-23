import { cn } from '@/helpers';
import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({ className, ...props }: Props) {
  return (
    <div>
      <input
        className={cn(
          'text-gray-900 px-3 py-2 rounded-md w-full disabled:cursor-not-allowed disabled:opacity-90',
          className
        )}
        {...props}
      />
    </div>
  );
}
