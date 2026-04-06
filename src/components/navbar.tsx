import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-emerald-500/20 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="https://yt3.googleusercontent.com/JmYcIQrwa_m-qvjAophMy4uY_uP7XriMtidwY64MWtqSqXlogkQHuadkaKdhuexb_f-jvkfh3w=s900-c-k-c0x00ffffff-no-rj"
            alt="ZETREX MARKET"
            width={36}
            height={36}
            className="rounded-full border border-emerald-400/40"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">Digital Assets</p>
            <p className="font-bold text-white">ZETREX MARKET</p>
          </div>
        </Link>
      </div>
    </header>
  );
}
