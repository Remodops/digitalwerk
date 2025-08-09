import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ className = "", variant = "primary", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed";
  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary: "bg-black text-white hover:bg-neutral-800",
    secondary: "bg-white text-black border border-neutral-200 hover:bg-neutral-50",
    ghost: "bg-transparent text-black hover:bg-neutral-100",
  };
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}


