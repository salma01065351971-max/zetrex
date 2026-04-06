import { HTMLAttributes } from "react";
import { clsx } from "../../lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border border-emerald/50 bg-emerald/10 px-3 py-1 text-xs font-semibold text-emerald-glow",
        className
      )}
      {...props}
    />
  );
}
