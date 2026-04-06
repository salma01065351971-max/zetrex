import Link from "next/link";
import { Gamepad2, ShoppingBag } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-4 z-40 mx-auto w-full max-w-6xl px-4">
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-xl bg-primary/20 p-2 text-primary">
            <Gamepad2 className="h-5 w-5" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold tracking-[0.2em] text-white">ZETREX</span>
            <Badge variant="secondary" className="border border-primary/30 bg-primary/10 text-primary">
              MARKET
            </Badge>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          <a href="#products" className="transition hover:text-white">
            Accounts
          </a>
          <a href="#products" className="transition hover:text-white">
            Top Deals
          </a>
        </nav>

        <Button className="bg-primary text-white hover:bg-primary/80">
          <ShoppingBag className="mr-2 h-4 w-4" />
          Browse
        </Button>
      </div>
    </header>
  );
}
