"use client";

import { motion } from "framer-motion";
import { Search, ShieldCheck, Sparkles, Sword } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/ui/navbar";

const accounts = [
  {
    title: "Steam Elite Vault",
    game: "Steam",
    rank: "High Tier",
    price: "$129",
    features: ["Prime status", "80+ premium titles", "Full access"],
  },
  {
    title: "Valorant Radiant ID",
    game: "Valorant",
    rank: "Radiant",
    price: "$249",
    features: ["Rare skins", "Rank ready", "Region swap available"],
  },
  {
    title: "PSN Ultimate Pack",
    game: "PSN",
    rank: "Pro Plus",
    price: "$179",
    features: ["Plus subscription", "Exclusive bundles", "Instant delivery"],
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
      <div className="pointer-events-none absolute -left-32 top-24 h-64 w-64 rounded-full bg-primary/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-72 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

      <Navbar />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-20 pt-10">
        <section className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Badge className="border border-primary/40 bg-primary/15 text-primary">
              Next-Gen Gaming Accounts
            </Badge>
            <h1 className="text-balance text-4xl font-black leading-tight sm:text-5xl">
              Own The Meta With Premium Accounts At Warp Speed
            </h1>
            <p className="max-w-xl text-zinc-300">
              ZETREX MARKET delivers verified game accounts for Steam, Valorant, and PSN with fast
              delivery, secure transfer, and 24/7 support.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                className="bg-primary text-white hover:bg-primary/80"
                onClick={() => {
                  window.location.hash = "products";
                }}
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Browse Accounts
              </Button>
              <Button size="lg" variant="outline" className="border-zinc-700 bg-zinc-900/70">
                <ShieldCheck className="mr-2 h-4 w-4" />
                Trusted Sellers
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
          >
            <div className="mb-4 flex items-center gap-2 text-primary">
              <Sword className="h-4 w-4" />
              <p className="text-sm">Live Inventory Scan</p>
            </div>
            <div className="space-y-3">
              <Input
                placeholder="Search games, rank, skins..."
                className="border-zinc-700 bg-zinc-950/70 text-zinc-100"
              />
              <Button className="w-full bg-primary text-white hover:bg-primary/80">
                <Search className="mr-2 h-4 w-4" />
                Find Best Deal
              </Button>
            </div>
          </motion.div>
        </section>

        <section id="products" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Featured Accounts</h2>
            <Badge className="border border-primary/40 bg-primary/15 text-primary">Hot Drops</Badge>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {accounts.map((account, index) => (
              <motion.div
                key={account.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full border-white/10 bg-white/5 backdrop-blur-md">
                  <CardHeader className="space-y-3">
                    <Badge className="w-fit bg-primary/15 text-primary">{account.game}</Badge>
                    <CardTitle>{account.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-zinc-300">
                    <p className="font-medium text-white">{account.rank}</p>
                    {account.features.map((feature) => (
                      <p key={feature}>- {feature}</p>
                    ))}
                  </CardContent>
                  <CardFooter className="mt-auto flex items-center justify-between">
                    <p className="text-xl font-bold text-primary">{account.price}</p>
                    <Button className="bg-primary text-white hover:bg-primary/80">Buy Now</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
