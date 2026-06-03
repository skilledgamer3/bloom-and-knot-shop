import { Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { formatPKR, SHIPPING_FEE } from "@/lib/config";

export function CartDrawer() {
  const {
    items,
    isOpen,
    setOpen,
    subtotal,
    updateQuantity,
    removeItem,
  } = useCart();
  const total = subtotal + (items.length ? SHIPPING_FEE : 0);

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent className="flex w-full flex-col gap-0 bg-background p-0 sm:max-w-md">
        <SheetHeader className="border-b border-border/60 px-6 py-5">
          <SheetTitle className="font-display text-2xl">Your basket</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary">
              <ShoppingBag className="h-7 w-7" />
            </span>
            <p className="text-muted-foreground">Your basket is empty.</p>
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              asChild
            >
              <a href="/#shop">Browse the collection</a>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-secondary/40">
                    <img
                      src={item.main_image_url ?? ""}
                      alt={item.product_name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-semibold leading-tight text-foreground">
                        {item.product_name}
                      </p>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        aria-label="Remove item"
                        className="text-muted-foreground transition-colors hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm font-medium text-primary">
                      {formatPKR(item.price_pkr)}
                    </p>
                    <div className="mt-auto flex items-center rounded-full border border-border bg-background self-start">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="flex h-8 w-8 items-center justify-center rounded-full hover:text-primary"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-7 text-center text-sm font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="flex h-8 w-8 items-center justify-center rounded-full hover:text-primary"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <SheetFooter className="gap-0 border-t border-border/60 px-6 py-5">
              <div className="mb-4 w-full space-y-2 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>{formatPKR(subtotal)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span>{formatPKR(SHIPPING_FEE)}</span>
                </div>
                <div className="flex justify-between border-t border-border/60 pt-2 text-base font-semibold text-foreground">
                  <span>Total</span>
                  <span>{formatPKR(total)}</span>
                </div>
              </div>
              <Button asChild className="w-full" size="lg">
                <Link to="/checkout" onClick={() => setOpen(false)}>
                  Checkout
                </Link>
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}