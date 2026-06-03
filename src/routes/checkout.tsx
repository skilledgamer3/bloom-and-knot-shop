import { createFileRoute, Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { CheckoutForm } from "@/components/CheckoutForm";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { formatPKR } from "@/lib/config";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Knot & Bloom" },
      { name: "description", content: "Complete your handmade crochet order." },
    ],
  }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const { items, subtotal, clear } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center gap-4 px-5 py-24 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary">
          <ShoppingBag className="h-7 w-7" />
        </span>
        <h1 className="font-display text-3xl">Your basket is empty</h1>
        <p className="text-muted-foreground">
          Add a little bloom or two before checking out.
        </p>
        <Button asChild className="rounded-full">
          <Link to="/">Browse the collection</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-5 py-10">
      <h1 className="mb-8 font-display text-3xl sm:text-4xl">Checkout</h1>
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 font-display text-xl">Your order</h2>
          <div className="space-y-4 rounded-3xl bg-card p-5 shadow-card">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-secondary/40">
                  <img
                    src={item.main_image_url ?? ""}
                    alt={item.product_name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold">{item.product_name}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.quantity} × {formatPKR(item.price_pkr)}
                  </p>
                </div>
                <p className="text-sm font-semibold text-primary">
                  {formatPKR(item.price_pkr * item.quantity)}
                </p>
              </div>
            ))}
            <div className="border-t border-border/60 pt-3 text-sm text-muted-foreground">
              Subtotal: {formatPKR(subtotal)}
            </div>
          </div>
        </div>

        <CheckoutForm items={items} onPlaced={clear} />
      </div>
    </div>
  );
}