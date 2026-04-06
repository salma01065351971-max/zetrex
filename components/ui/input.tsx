import { InputHTMLAttributes } from "react";
import { clsx } from "../../lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={clsx(
        "w-full rounded-lg border border-border bg-black/40 px-3 py-2 text-sm text-foreground outline-none ring-emerald/40 placeholder:text-muted focus:ring",
        className
      )}
      {...props}
    />
  );
}
