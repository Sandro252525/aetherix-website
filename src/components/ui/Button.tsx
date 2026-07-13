import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-blue-600 text-white shadow-lg hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl",
    secondary:
      "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const disabledStyles = disabled
    ? "cursor-not-allowed opacity-60 hover:translate-y-0 hover:shadow-lg"
    : "";

  const styles = `${baseStyle} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`;

  if (href && !disabled) {
    return (
      <a href={href} className={styles} onClick={onClick}>
        {children}
      </a>
    );
  }

  const buttonProps: ButtonHTMLAttributes<HTMLButtonElement> = {
    type,
    disabled,
    onClick,
  };

  return (
    <button {...buttonProps} className={styles}>
      {children}
    </button>
  );
}