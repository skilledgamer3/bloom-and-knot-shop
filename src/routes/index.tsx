import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Heart, Loader2, Flower, Gift } from "lucide-react";
import { useProducts } from "@/lib/use-products";
import { FeaturedSlider } from "@/components/FeaturedSlider";
import { ProductCard } from "@/components/ProductCard";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Knot & Bloom — Handmade Crochet Gifts" },
      {
        name: "description",
        content:
          "Tiny knots, blooming joy. Shop handmade crochet keychains, flowers and cozy accessories — soft, cute gifts crafted with love in Pakistan.",
      },
      { property: "og:title", content: "Knot & Bloom — Handmade Crochet Gifts" },
      {
        property: "og:description",
        content: "Tiny knots, blooming joy. Handmade crochet gifts made with love.",
      },
      { property: "og:image", content: "/hero-bg.jpg" },
    ],
  }),
  component: Home,
});

const floats = [
  { src: "/products/cherry-keychain.jpg", cls: "left-[6%] top-[18%] h-20 w-20 animate-float-slow" },
  { src: "/products/rose-keychain.jpg", cls: "right-[8%] top-[14%] h-24 w-24 animate-drift" },
  { src: "/products/sunflower-keychain.jpg", cls: "left-[12%] bottom-[14%] h-16 w-16 animate-float-soft" },
  { src: "/products/octopus-keychain.jpg", cls: "right-[12%] bottom-[16%] h-20 w-20 animate-float-slow" },
];

function Home() {
  const { data: products = [], isLoading } = useProducts();
  const featured = products.slice(0, 6);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-warm">
        <div className="pointer-events-none absolute inset-0">
          {floats.map((f, i) => (
            <div
              key={i}
              className={`absolute hidden overflow-hidden rounded-full opacity-90 shadow-card md:block ${f.cls}`}
            >
              <img src={f.src} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>

        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 py-24 text-center sm:py-32">
          <motion.h1
            initial={{ opacity: 0, y: 18, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-balance font-display text-5xl font-semibold leading-[1.05] text-foreground sm:text-7xl"
          >
            {BRAND.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 max-w-md text-lg text-muted-foreground"
          >
            {BRAND.tagline}. Soft, cute crochet treasures handmade for the people
            you love.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8"
          >
            <Button asChild size="lg" className="rounded-full px-8 shadow-glow">
              <a href="#shop">
                Shop Collection <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FEATURED SLIDER */}
      {featured.length > 0 && (
        <section className="relative mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <FadeIn className="mb-12 flex flex-col items-center text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent-foreground"
            >
              <Flower className="h-4 w-4" /> Loved by everyone
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-3 font-display text-3xl sm:text-4xl"
            >
              Featured Blooms
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-2 text-sm text-muted-foreground"
            >
              Hand-picked treasures for that special someone
            </motion.p>
          </FadeIn>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FeaturedSlider products={featured} />
          </motion.div>
        </section>
      )}

      {/* ANIMATED SHOWCASE SECTION */}
      {featured.length > 3 && (
        <section className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.slice(0, 4).map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-background to-muted"
              >
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <img
                    src={product.main_image_url ?? ""}
                    alt={product.product_name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm"
                  >
                    <Button size="sm" variant="secondary" className="rounded-full">
                      View
                    </Button>
                  </motion.div>
                </div>
                <div className="p-3">
                  <p className="font-semibold line-clamp-1">{product.product_name}</p>
                  <p className="text-sm text-primary">
                    PKR {product.price_pkr?.toLocaleString()}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* SECOND FEATURED SLIDER */}
      {featured.length > 6 && (
        <section className="relative mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <FadeIn className="mb-12 flex flex-col items-center text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent-foreground"
            >
              <Gift className="h-4 w-4" /> More Treasures
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-3 font-display text-3xl sm:text-4xl"
            >
              Explore More
            </motion.h2>
          </FadeIn>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FeaturedSlider products={featured.slice(0, 6)} />
          </motion.div>
        </section>
      )}

      {/* PRODUCT GRID */}
      <section id="shop" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16 sm:py-24">
        <FadeIn className="mb-12 flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-wider text-accent-foreground"
          >
            The Collection
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-3 font-display text-3xl sm:text-4xl"
          >
            Shop Every Little Joy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-2 max-w-md text-sm text-muted-foreground"
          >
            Each piece is crocheted by hand, one stitch at a time.
          </motion.p>
        </FadeIn>

        {isLoading ? (
          <div className="flex justify-center py-16 text-muted-foreground">
            <Loader2 className="h-6 w-6 animate-spin" />
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {products.map((product, i) => (
              <FadeIn key={product.id} delay={(i % 3) * 0.08}>
                <ProductCard product={product} />
              </FadeIn>
            ))}
          </motion.div>
        )}
      </section>

      {/* BRAND SECTION */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="grid items-center gap-10 rounded-3xl bg-gradient-bloom p-8 sm:p-12 md:grid-cols-2">
          <FadeIn>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl shadow-soft"
            >
              <img
                src="/brand-craft.jpg"
                alt="Hands crocheting a small pastel flower"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                <Heart className="h-3.5 w-3.5" /> Our story
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">
                Handmade crochet gifts made with love
              </h2>
              <p className="mt-4 text-muted-foreground">
                Every Knot & Bloom piece begins as a single thread and a little
                daydream. We crochet slowly and carefully, so each gift carries a
                bit of warmth, softness and joy — ready to bloom in someone's day.
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Button asChild variant="outline" className="mt-6 rounded-full">
                  <a href="#shop">Discover the collection</a>
                </Button>
              </motion.div>
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
