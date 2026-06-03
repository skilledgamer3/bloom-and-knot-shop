import { supabase } from "@/integrations/supabase/client";
import { SHIPPING_FEE, WHATSAPP_NUMBER, formatPKR, BRAND } from "./config";
import type { CartItem } from "./types";

export interface CustomerInfo {
  name: string;
  phone: string;
  address: string;
  notes?: string;
}

export interface OrderResult {
  orderRef: string;
  whatsappUrl: string;
  total: number;
}

function buildWhatsappMessage(
  customer: CustomerInfo,
  items: CartItem[],
  subtotal: number,
  total: number,
  orderRef: string,
) {
  const lines: string[] = [];
  lines.push(`🌸 New Order — ${BRAND.name}`);
  lines.push(`Order Ref: #${orderRef}`);
  lines.push("");
  lines.push(`Name: ${customer.name}`);
  lines.push(`Phone: ${customer.phone}`);
  lines.push(`Address: ${customer.address}`);
  lines.push("");
  lines.push("Items:");
  items.forEach((i) => {
    lines.push(
      `• ${i.product_name} ×${i.quantity} — ${formatPKR(i.price_pkr * i.quantity)}`,
    );
  });
  lines.push("");
  lines.push(`Subtotal: ${formatPKR(subtotal)}`);
  lines.push(`Shipping: ${formatPKR(SHIPPING_FEE)}`);
  lines.push(`Total: ${formatPKR(total)}`);
  if (customer.notes?.trim()) {
    lines.push("");
    lines.push(`Notes: ${customer.notes.trim()}`);
  }
  return lines.join("\n");
}

export async function submitOrder(
  customer: CustomerInfo,
  items: CartItem[],
): Promise<OrderResult> {
  if (!items.length) throw new Error("Your cart is empty.");

  const subtotal = items.reduce((s, i) => s + i.price_pkr * i.quantity, 0);
  const total = subtotal + SHIPPING_FEE;
  const orderId = crypto.randomUUID();
  const orderRef = orderId.slice(0, 8);

  const { error: orderError } = await supabase.from("orders").insert({
    id: orderId,
    customer_name: customer.name.trim(),
    phone_number: customer.phone.trim(),
    address: customer.address.trim(),
    items: items.map((i) => ({ product_id: i.id, quantity: i.quantity })),
    total_price_pkr: total,
    shipping_fee: SHIPPING_FEE,
  });
  if (orderError) throw new Error(orderError.message);

  const { error: itemsError } = await supabase.from("order_items").insert(
    items.map((i) => ({
      order_id: orderId,
      product_id: i.id,
      product_name: i.product_name,
      quantity: i.quantity,
      price_snapshot: i.price_pkr,
    })),
  );
  if (itemsError) throw new Error(itemsError.message);

  const message = buildWhatsappMessage(
    customer,
    items,
    subtotal,
    total,
    orderRef,
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return { orderRef, whatsappUrl, total };
}