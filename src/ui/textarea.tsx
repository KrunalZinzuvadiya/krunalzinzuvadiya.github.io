import * as React from 'react';

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, ...props }: TextareaProps,
  ref: React.Ref<HTMLTextAreaElement>,
) {
  return (
    <textarea
      ref={ref}
      className={`flex w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm text-white shadow-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${className ?? ''}`}
      {...props}
    />
  );
});

