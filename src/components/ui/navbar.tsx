import Link from "next/link";
import { Gamepad2, LayoutGrid, ShieldCheck, ShoppingBag, Tags } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-7xl px-4">
      <div className="flex items-center justify-between rounded-2xl border border-white/15 bg-black/35 px-4 py-3 shadow-[0_0_40px_rgba(139,92,246,0.2)] backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-xl bg-primary/20 p-2 text-primary">
            <Gamepad2 className="h-5 w-5" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-black tracking-[0.2em] text-white">ZETREX</span>
            <Badge variant="secondary" className="border border-primary/30 bg-primary/10 text-primary">
              MARKET
            </Badge>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-zinc-300 md:flex">
          <a href="#categories" className="inline-flex items-center gap-2 transition hover:text-white">
            <LayoutGrid className="h-4 w-4" />
            Categories
          </a>
          <a href="#products" className="inline-flex items-center gap-2 transition hover:text-white">
            <Tags className="h-4 w-4" />
            Top Deals
          </a>
          <a href="#support" className="inline-flex items-center gap-2 transition hover:text-white">
            <ShieldCheck className="h-4 w-4" />
            Support
          </a>
        </nav>

        <Button className="bg-primary text-white shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:bg-primary/80">
          <ShoppingBag className="mr-2 h-4 w-4" />
          Shop Now
        </Button>
      </div>
    </header>
  );
}
