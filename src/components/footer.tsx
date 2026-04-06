export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-muted">
        <p className="font-semibold text-foreground">ZETREX MARKET</p>
        <p className="mt-1">Premium digital store for keys, subscriptions, and software.</p>
        <p className="mt-4 text-xs text-white/50">
          Copyright {new Date().getFullYear()} ZETREX MARKET. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
