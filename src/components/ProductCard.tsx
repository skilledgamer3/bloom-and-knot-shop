import { Link } from "@tanstack/react-router";
import { formatPKR } from "@/lib/config";
import type { Product } from "@/lib/types";
import { QuickView } from "./QuickView";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-glow">
      <div className="relative aspect-square overflow-hidden bg-secondary/40">
        <Link
          to="/product/$slug"
          params={{ slug: product.product_slug }}
          aria-label={product.product_name}
        >
          <img
            src={product.main_image_url ?? ""}
            alt={product.product_name}
            loading="lazy"
            width={1024}
            height={1024}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </Link>
        <QuickView product={product} />
      </div>
      <Link
        to="/product/$slug"
        params={{ slug: product.product_slug }}
        className="flex flex-1 flex-col gap-1 p-5"
      >
        {product.category && (
          <span className="text-[11px] font-medium uppercase tracking-wider text-accent-foreground">
            {product.category}
          </span>
        )}
        <h3 className="font-display text-lg font-semibold leading-tight text-foreground transition-colors group-hover:text-primary">
          {product.product_name}
        </h3>
        <p className="mt-1 text-base font-semibold text-primary">
          {formatPKR(product.price_pkr)}
        </p>
      </Link>
    </div>
  );
}