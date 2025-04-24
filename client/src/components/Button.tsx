import { cn } from "../utils/cn";
import { ButtonHTMLAttributes, FC } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent";
}

export const Button: FC<Props> = ({ variant = "primary", className, ...rest }) => {
  const base =
    "inline-flex items-center justify-center px-4 py-2 rounded-xl font-medium transition-colors disabled:opacity-60 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-accent text-white hover:bg-accent-light",
    secondary: "bg-card text-primary hover:bg-card/80",
    accent: "border border-accent text-accent hover:bg-accent hover:text-white",
  } as const;
  return <button className={cn(base, variants[variant], className)} {...rest} />;
};