import { HTMLAttributes } from "react";
import { clsx } from "../../lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx("rounded-2xl border border-border bg-surface/80 p-5", className)} {...props} />;
}
