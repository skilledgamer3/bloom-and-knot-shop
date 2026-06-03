import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";

export function MobileShopBar() {
  const { count, setOpen } = useCart();

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border/60 bg-background/90 backdrop-blur-md sm:hidden">
      <div className="flex items-center gap-3 px-4 py-3">
        <a
          href="/#shop"
          className="flex flex-1 items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
        >
          Shop Collection
        </a>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open cart"
          className="relative flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-foreground"
        >
          <ShoppingBag className="h-5 w-5" />
          {count > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
              {count}
            </span>
          )}
        </button>
      </div>
    </div>
  );
}