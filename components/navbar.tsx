import Image from "next/image";
import Link from "next/link";

const logoUrl =
  "https://yt3.googleusercontent.com/JmYcIQrwa_m-qvjAophMy4uY_uP7XriMtidwY64MWtqSqXlogkQHuadkaKdhuexb_f-jvkfh3w=s900-c-k-c0x00ffffff-no-rj";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logoUrl} alt="Zetrex Market logo" width={34} height={34} className="rounded-md" />
          <span className="text-sm font-bold tracking-wide text-emerald-glow">ZETREX MARKET</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm text-muted">
          <Link href="/" className="hover:text-emerald-glow">
            Store
          </Link>
          <Link href="/admin" className="hover:text-emerald-glow">
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}
