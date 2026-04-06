export function Footer() {
  return (
    <footer className="border-t border-emerald-500/20 bg-black/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-emerald-100/70 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} ZETREX MARKET. All rights reserved.</p>
        <p>Gaming Digital Assets - Secure instant delivery.</p>
      </div>
    </footer>
  );
}
