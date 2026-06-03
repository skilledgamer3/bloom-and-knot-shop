import { Link } from "@tanstack/react-router";
import { MessageCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function OrderConfirmation({
  whatsappUrl,
  orderRef,
}: {
  whatsappUrl: string;
  orderRef: string;
}) {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-5 rounded-3xl bg-card p-8 text-center shadow-card">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/40 text-accent-foreground">
        <Check className="h-8 w-8" />
      </span>
      <div>
        <h2 className="font-display text-2xl">Thank you for your order 🌸</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          We will contact you on WhatsApp shortly for confirmation. Tap below to
          send us your order details now.
        </p>
        <p className="mt-3 text-xs font-medium text-muted-foreground">
          Order Ref: #{orderRef}
        </p>
      </div>
      <Button asChild size="lg" className="w-full">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="h-4 w-4" /> Confirm on WhatsApp
        </a>
      </Button>
      <Button asChild variant="ghost">
        <Link to="/">Continue shopping</Link>
      </Button>
    </div>
  );
}