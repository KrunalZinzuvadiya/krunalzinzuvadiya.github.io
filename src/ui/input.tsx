import * as React from 'react';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, ...props }: InputProps,
  ref: React.Ref<HTMLInputElement>,
) {
  return (
    <input
      ref={ref}
      className={`flex h-10 w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm text-white shadow-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${className ?? ''}`}
      {...props}
    />
  );
});

