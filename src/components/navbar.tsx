import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="https://yt3.googleusercontent.com/JmYcIQrwa_m-qvjAophMy4uY_uP7XriMtidwY64MWtqSqXlogkQHuadkaKdhuexb_f-jvkfh3w=s900-c-k-c0x00ffffff-no-rj"
            alt="ZETREX MARKET Logo"
            width={40}
            height={40}
            className="rounded-full border border-emerald-400/50"
          />
          <div>
            <p className="text-sm text-emerald-300">Digital Products</p>
            <p className="text-lg font-extrabold tracking-wide text-white">
              ZETREX MARKET
            </p>
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <Link href="/admin/login">
            <Button variant="outline">Admin</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
