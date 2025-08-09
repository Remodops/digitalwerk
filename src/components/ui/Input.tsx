import * as React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`block w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 shadow-sm focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 ${className}`}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";


