import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type Variant = "primary" | "outline" | "ghost" | "danger";

const styleMap: Record<Variant, string> = {
  primary:
    "bg-primary text-black hover:brightness-110 shadow-[0_0_25px_rgba(16,185,129,.45)]",
  outline: "border border-border bg-transparent text-foreground hover:bg-white/5",
  ghost: "bg-transparent text-foreground hover:bg-white/5",
  danger: "bg-red-500/90 text-white hover:bg-red-500"
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function Button({ className, variant = "primary", ...props }: Props) {
  return (
    <button
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-xl px-4 text-sm font-semibold transition duration-300 disabled:cursor-not-allowed disabled:opacity-60",
        styleMap[variant],
        className
      )}
      {...props}
    />
  );
}
