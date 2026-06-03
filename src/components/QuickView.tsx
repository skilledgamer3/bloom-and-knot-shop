import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Eye, Minus, Plus, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { formatPKR } from "@/lib/config";
import type { Product } from "@/lib/types";

export function QuickView({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="absolute bottom-3 left-1/2 flex -translate-x-1/2 translate-y-3 items-center gap-1.5 rounded-full bg-background/90 px-4 py-2 text-xs font-semibold text-foreground opacity-0 shadow-card backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-primary hover:text-primary-foreground"
        >
          <Eye className="h-3.5 w-3.5" /> Quick view
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl overflow-hidden rounded-3xl border-border/60 p-0">
        <div className="grid gap-0 sm:grid-cols-2">
          <div className="aspect-square bg-secondary/40">
            <img
              src={product.main_image_url ?? ""}
              alt={product.product_name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 p-6">
            <div>
              {product.category && (
                <span className="text-xs font-medium uppercase tracking-wider text-accent-foreground">
                  {product.category}
                </span>
              )}
              <DialogTitle className="font-display text-2xl">
                {product.product_name}
              </DialogTitle>
              <p className="mt-1 text-lg font-semibold text-primary">
                {formatPKR(product.price_pkr)}
              </p>
            </div>
            <p className="line-clamp-4 text-sm text-muted-foreground">
              {product.description}
            </p>

            <div className="mt-auto flex items-center gap-3">
              <div className="flex items-center rounded-full border border-border bg-background">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-foreground hover:text-primary"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center text-sm font-semibold">
                  {qty}
                </span>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-foreground hover:text-primary"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Button
                onClick={() => {
                  addItem(product, qty);
                  toast.success(`Added ${product.product_name} to cart 🌸`);
                  setOpen(false);
                  setQty(1);
                }}
              >
                <ShoppingBag className="h-4 w-4" /> Add to cart
              </Button>
              <Button asChild variant="outline">
                <Link
                  to="/product/$slug"
                  params={{ slug: product.product_slug }}
                >
                  View full details
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}