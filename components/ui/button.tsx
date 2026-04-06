import { ButtonHTMLAttributes } from "react";
import { clsx } from "../../lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "danger";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition disabled:opacity-60",
        variant === "primary" &&
          "bg-emerald text-black hover:bg-emerald-glow shadow-emerald",
        variant === "ghost" && "border border-border bg-surface text-foreground hover:border-emerald",
        variant === "danger" && "bg-red-500 text-white hover:bg-red-600",
        className
      )}
      {...props}
    />
  );
}
