import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { formatPKR, SHIPPING_FEE } from "@/lib/config";
import { submitOrder, type OrderResult } from "@/lib/order";
import type { CartItem } from "@/lib/types";
import { OrderConfirmation } from "./OrderConfirmation";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid WhatsApp number")
    .max(20)
    .regex(/^[0-9+\-\s]+$/, "Enter a valid phone number"),
  address: z.string().trim().min(8, "Please enter your full address").max(300),
  notes: z.string().trim().max(400).optional(),
});

export function CheckoutForm({
  items,
  onPlaced,
}: {
  items: CartItem[];
  onPlaced?: () => void;
}) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<OrderResult | null>(null);

  const subtotal = items.reduce((s, i) => s + i.price_pkr * i.quantity, 0);
  const total = subtotal + SHIPPING_FEE;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        if (issue.path[0]) fieldErrors[String(issue.path[0])] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      const res = await submitOrder(
        {
          name: parsed.data.name,
          phone: parsed.data.phone,
          address: parsed.data.address,
          notes: parsed.data.notes,
        },
        items,
      );
      setResult(res);
      onPlaced?.();
      // open WhatsApp automatically
      window.open(res.whatsappUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Something went wrong. Try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  if (result) {
    return (
      <OrderConfirmation
        whatsappUrl={result.whatsappUrl}
        orderRef={result.orderRef}
      />
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-card p-6 shadow-card sm:p-7"
    >
      <h3 className="font-display text-xl">Place your order</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        No online payment — we confirm every order personally on WhatsApp.
      </p>

      <div className="mt-5 space-y-4">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            className="mt-1.5"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-destructive">{errors.name}</p>
          )}
        </div>
        <div>
          <Label htmlFor="phone">WhatsApp number</Label>
          <Input
            id="phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="03XX XXXXXXX"
            inputMode="tel"
            className="mt-1.5"
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-destructive">{errors.phone}</p>
          )}
        </div>
        <div>
          <Label htmlFor="address">Delivery address</Label>
          <Textarea
            id="address"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            placeholder="House, street, area, city"
            className="mt-1.5"
            rows={3}
          />
          {errors.address && (
            <p className="mt-1 text-xs text-destructive">{errors.address}</p>
          )}
        </div>
        <div>
          <Label htmlFor="notes">Notes (optional)</Label>
          <Textarea
            id="notes"
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
            placeholder="Gift wrapping, color preference, etc."
            className="mt-1.5"
            rows={2}
          />
        </div>
      </div>

      <div className="mt-5 space-y-2 rounded-2xl bg-secondary/50 p-4 text-sm">
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

      <Button
        type="submit"
        size="lg"
        className="mt-5 w-full"
        disabled={loading || items.length === 0}
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        Place Order
      </Button>
    </form>
  );
}