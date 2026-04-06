import type { Metadata } from "next";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zetrex Market",
  description: "High-end digital storefront for game keys."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        <main className="mx-auto min-h-[calc(100vh-8rem)] max-w-6xl px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
