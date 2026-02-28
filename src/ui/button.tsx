import * as React from 'react';

type ButtonVariant = 'default' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

function classNames(...values: Array<string | undefined | false>) {
  return values.filter(Boolean).join(' ');
}

export const Button = ({
  variant = 'default',
  size = 'md',
  asChild,
  className,
  children,
  ...rest
}: ButtonProps) => {
  const base =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none';

  const variantClass =
    variant === 'ghost'
      ? 'bg-transparent hover:bg-gray-800 text-gray-200'
      : 'bg-blue-600 hover:bg-blue-700 text-white';

  const sizeClass =
    size === 'sm' ? 'h-8 px-3 text-xs' : size === 'lg' ? 'h-11 px-6 text-base' : 'h-9 px-4 text-sm';

  const combined = classNames(base, variantClass, sizeClass, className);

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>;
    return React.cloneElement(child, {
      className: classNames(combined, child.props.className),
    });
  }

  return (
    <button type="button" className={combined} {...rest}>
      {children}
    </button>
  );
};

