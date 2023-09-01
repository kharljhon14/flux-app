import { cn } from '@/helpers';
import { TextareaHTMLAttributes } from 'react';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export default function Textarea({ className, ...props }: Props) {
  return (
    <textarea
      {...props}
      className={cn(
        'text-white bg-gray-700 px-3 py-2 rounded-md w-full disabled:cursor-not-allowed disabled:opacity-90',
        className
      )}
    />
  );
}
