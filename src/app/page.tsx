"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Apple,
  BadgeDollarSign,
  CheckCircle2,
  CreditCard,
  Gift,
  Gamepad2,
  KeyRound,
  Play,
  ShieldCheck,
  Star,
  Wallet,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/ui/navbar";

const products = [
  {
    title: "Valorant Immortal Account",
    category: "Accounts",
    price: "$179",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "PlayStation Gift Card $100",
    category: "Gift Cards",
    price: "$94",
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "EA FC 26 Global Key",
    category: "Game Keys",
    price: "$49",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1171&auto=format&fit=crop",
  },
];

const categories = [
  { title: "Accounts", icon: Gamepad2, description: "Ranked and verified gaming accounts." },
  { title: "Gift Cards", icon: Gift, description: "Top-up cards for all major platforms." },
  { title: "Game Keys", icon: KeyRound, description: "Instant digital delivery game keys." },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
      <div className="pointer-events-none absolute -left-40 top-12 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-80 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />

      <Navbar />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 pb-20 pt-10">
        <section className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Badge className="border border-primary/40 bg-primary/15 text-primary shadow-[0_0_24px_rgba(139,92,246,0.3)]">
              Trusted Digital Gaming Store
            </Badge>
            <h1 className="text-balance text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Upgrade Your Library With Elite Digital Deals
            </h1>
            <p className="max-w-2xl text-zinc-300">
              ZETREX MARKET is your premium destination for gaming accounts, gift cards, and game
              keys. Fast checkout, verified stock, and secure support inspired by the top gaming
              commerce experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/80">
                <BadgeDollarSign className="mr-2 h-4 w-4" />
                Shop Best Sellers
              </Button>
              <Button size="lg" variant="outline" className="border-zinc-700 bg-zinc-900/70 hover:bg-zinc-800/90">
                <ShieldCheck className="mr-2 h-4 w-4" />
                Why Choose Us
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-5 text-sm text-zinc-300">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Instant Delivery
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Secure Payments
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                24/7 Support
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
            <div className="relative mb-4 flex items-center justify-between">
              <p className="text-sm text-primary">Live Store Promotions</p>
              <Badge className="border border-primary/40 bg-primary/20 text-primary">New Season</Badge>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1170&auto=format&fit=crop"
                alt="Gaming banner"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 w-full p-4">
                <p className="text-lg font-bold">Mega Weekend Sale</p>
                <p className="text-sm text-zinc-300">Up to 40% off on selected accounts and keys.</p>
              </div>
            </div>
            <div className="relative mt-4 grid gap-3 sm:grid-cols-2">
              {["Verified Inventory", "Fast Delivery"].map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-black/40 p-3 text-sm">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="categories" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Featured Categories</h2>
            <Badge className="border border-primary/40 bg-primary/15 text-primary">Collection</Badge>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full border-white/10 bg-white/5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]">
                  <CardHeader className="space-y-4">
                    <div className="w-fit rounded-lg bg-primary/20 p-2 text-primary">
                      <category.icon className="h-5 w-5" />
                    </div>
                    <CardTitle>{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-zinc-300">
                    <p>{category.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-primary text-white hover:bg-primary/80">Explore</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="products" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Trending Products</h2>
            <Badge className="border border-primary/40 bg-primary/15 text-primary">Best Sellers</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="group h-full overflow-hidden border-white/10 bg-white/5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                    <div className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs text-primary backdrop-blur-md">
                      {product.category}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-1">{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center justify-between text-sm text-zinc-300">
                    <div className="inline-flex items-center gap-1 text-yellow-400">
                      <Star className="h-4 w-4 fill-yellow-400" />
                      4.9
                    </div>
                    <p>Digital Delivery</p>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <p className="text-xl font-bold text-primary">{product.price}</p>
                    <Button className="bg-primary text-white hover:bg-primary/80">Buy Now</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <footer id="support" className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-bold">ZETREX MARKET</h3>
              <p className="mt-2 text-sm text-zinc-300">
                Premium digital gaming store for accounts, gift cards, and game keys.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Social Links</h4>
              <div className="mt-3 flex gap-3">
                {[Apple, Play, ShieldCheck].map((Icon, idx) => (
                  <div key={idx} className="rounded-lg border border-white/10 bg-black/40 p-2 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold">Payment Methods</h4>
              <div className="mt-3 flex gap-3">
                {[CreditCard, Wallet, BadgeDollarSign].map((Icon, idx) => (
                  <div key={idx} className="rounded-lg border border-white/10 bg-black/40 p-2 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
