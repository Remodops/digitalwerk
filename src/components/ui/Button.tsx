import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "accent";
};

export function Button({ className = "", variant = "primary", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-900";
  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary: "bg-black text-white hover:bg-neutral-900 focus:ring-black dark:bg-white dark:text-black dark:hover:bg-neutral-200",
    secondary: "bg-white text-black border border-neutral-300 hover:bg-neutral-50 focus:ring-neutral-400 dark:bg-neutral-900 dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-800",
    ghost: "bg-transparent text-black hover:bg-neutral-100 focus:ring-neutral-300 dark:text-white dark:hover:bg-neutral-800",
    accent: "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-600",
  };
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}


