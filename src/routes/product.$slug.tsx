import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus, ShoppingBag, ChevronLeft, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useProduct } from "@/lib/use-products";
import { ProductGallery } from "@/components/ProductGallery";
import { CheckoutForm } from "@/components/CheckoutForm";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/lib/cart";
import { formatPKR } from "@/lib/config";
import type { CartItem } from "@/lib/types";

export const Route = createFileRoute("/product/$slug")({
  head: () => ({
    meta: [{ title: "Product — Knot & Bloom" }],
  }),
  component: ProductPage,
});

function ProductPage() {
  const { slug } = Route.useParams();
  const { data, isLoading } = useProduct(slug);
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  if (isLoading) {
    return (
      <div className="flex justify-center py-32 text-muted-foreground">
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="px-5 py-24 text-center">
        <h1 className="font-display text-3xl">Product not found</h1>
        <p className="mt-2 text-muted-foreground">
          This little bloom may have wandered off.
        </p>
        <Button asChild className="mt-6 rounded-full">
          <Link to="/">Back to shop</Link>
        </Button>
      </div>
    );
  }

  const { product, images } = data;
  const gallery = images.length
    ? images.map((i) => i.image_url)
    : product.main_image_url
      ? [product.main_image_url]
      : [];

  const orderItem: CartItem = {
    id: product.id,
    product_name: product.product_name,
    product_slug: product.product_slug,
    price_pkr: product.price_pkr,
    main_image_url: product.main_image_url,
    quantity: qty,
  };

  return (
    <div className="mx-auto max-w-6xl px-5 py-8 sm:py-12">
      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <ChevronLeft className="h-4 w-4" /> Back to shop
      </Link>

      <div className="grid gap-10 lg:grid-cols-2">
        <FadeIn>
          <ProductGallery images={gallery} alt={product.product_name} />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="lg:sticky lg:top-24">
            {product.category && (
              <span className="text-xs font-semibold uppercase tracking-wider text-accent-foreground">
                {product.category}
              </span>
            )}
            <h1 className="mt-1 font-display text-3xl sm:text-4xl">
              {product.product_name}
            </h1>
            <p className="mt-2 text-2xl font-semibold text-primary">
              {formatPKR(product.price_pkr)}
            </p>

            <p className="mt-5 text-muted-foreground">{product.description}</p>

            <div className="mt-6 space-y-3 rounded-2xl bg-secondary/50 p-4 text-sm">
              {product.material && (
                <div className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground" />
                  <span>
                    <span className="font-semibold">Material:</span>{" "}
                    {product.material}
                  </span>
                </div>
              )}
              <div className="flex gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground" />
                <span>Lovingly handmade, one stitch at a time</span>
              </div>
              <div className="flex gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground" />
                <span>Perfect little gift, ready to bloom</span>
              </div>
            </div>

            {product.tags && product.tags.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="rounded-full font-normal"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            )}

            <div className="mt-7 flex items-center gap-4">
              <div className="flex items-center rounded-full border border-border bg-background">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="flex h-11 w-11 items-center justify-center rounded-full hover:text-primary"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center font-semibold">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full hover:text-primary"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 rounded-full"
                onClick={() => {
                  addItem(product, qty);
                  toast.success(`Added to cart 🌸`);
                }}
              >
                <ShoppingBag className="h-4 w-4" /> Add to cart
              </Button>
            </div>

            <div className="mt-8">
              <CheckoutForm items={[orderItem]} />
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
