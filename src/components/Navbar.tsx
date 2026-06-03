import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";
import { BRAND } from "@/lib/config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { count, setOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-card"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="/products/knotandbloom.png"
            alt={BRAND.name}
            className="h-9 w-9 transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-display text-xl font-semibold tracking-tight text-foreground">
            {BRAND.name}
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-4">
          <Link
            to="/"
            className="hidden rounded-full px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-primary sm:block"
          >
            Home
          </Link>
          <a
            href="/#shop"
            className="hidden rounded-full px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-primary sm:block"
          >
            Shop
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-secondary/70 text-foreground transition-all hover:bg-primary/15 hover:text-primary"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}