import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { f as formatPKR, S as SHIPPING_FEE, B as Button, c as cn, W as WHATSAPP_NUMBER, a as BRAND } from "./router-CuFaKRm_.mjs";
import { R as Root } from "../_libs/radix-ui__react-label.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { s as supabase } from "./client-EqBt9629.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as LoaderCircle, c as Check, M as MessageCircle } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = Root.displayName;
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
function buildWhatsappMessage(customer, items, subtotal, total, orderRef) {
  const lines = [];
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
      `• ${i.product_name} ×${i.quantity} — ${formatPKR(i.price_pkr * i.quantity)}`
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
async function submitOrder(customer, items) {
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
    shipping_fee: SHIPPING_FEE
  });
  if (orderError) throw new Error(orderError.message);
  const { error: itemsError } = await supabase.from("order_items").insert(
    items.map((i) => ({
      order_id: orderId,
      product_id: i.id,
      product_name: i.product_name,
      quantity: i.quantity,
      price_snapshot: i.price_pkr
    }))
  );
  if (itemsError) throw new Error(itemsError.message);
  const message = buildWhatsappMessage(
    customer,
    items,
    subtotal,
    total,
    orderRef
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  return { orderRef, whatsappUrl, total };
}
function OrderConfirmation({
  whatsappUrl,
  orderRef
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-md flex-col items-center gap-5 rounded-3xl bg-card p-8 text-center shadow-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-16 w-16 items-center justify-center rounded-full bg-accent/40 text-accent-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-8 w-8" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl", children: "Thank you for your order 🌸" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "We will contact you on WhatsApp shortly for confirmation. Tap below to send us your order details now." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-xs font-medium text-muted-foreground", children: [
        "Order Ref: #",
        orderRef
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: whatsappUrl, target: "_blank", rel: "noopener noreferrer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
      " Confirm on WhatsApp"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "ghost", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: "Continue shopping" }) })
  ] });
}
const schema = objectType({
  name: stringType().trim().min(2, "Please enter your name").max(80),
  phone: stringType().trim().min(7, "Enter a valid WhatsApp number").max(20).regex(/^[0-9+\-\s]+$/, "Enter a valid phone number"),
  address: stringType().trim().min(8, "Please enter your full address").max(300),
  notes: stringType().trim().max(400).optional()
});
function CheckoutForm({
  items,
  onPlaced
}) {
  const [form, setForm] = reactExports.useState({
    name: "",
    phone: "",
    address: "",
    notes: ""
  });
  const [errors, setErrors] = reactExports.useState({});
  const [loading, setLoading] = reactExports.useState(false);
  const [result, setResult] = reactExports.useState(null);
  const subtotal = items.reduce((s, i) => s + i.price_pkr * i.quantity, 0);
  const total = subtotal + SHIPPING_FEE;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors = {};
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
          notes: parsed.data.notes
        },
        items
      );
      setResult(res);
      onPlaced?.();
      window.open(res.whatsappUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Something went wrong. Try again."
      );
    } finally {
      setLoading(false);
    }
  };
  if (result) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      OrderConfirmation,
      {
        whatsappUrl: result.whatsappUrl,
        orderRef: result.orderRef
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "form",
    {
      onSubmit: handleSubmit,
      className: "rounded-3xl bg-card p-6 shadow-card sm:p-7",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl", children: "Place your order" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "No online payment — we confirm every order personally on WhatsApp." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "name", children: "Full name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "name",
                value: form.name,
                onChange: (e) => setForm({ ...form, name: e.target.value }),
                placeholder: "Your name",
                className: "mt-1.5"
              }
            ),
            errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-destructive", children: errors.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "phone", children: "WhatsApp number" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "phone",
                value: form.phone,
                onChange: (e) => setForm({ ...form, phone: e.target.value }),
                placeholder: "03XX XXXXXXX",
                inputMode: "tel",
                className: "mt-1.5"
              }
            ),
            errors.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-destructive", children: errors.phone })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "address", children: "Delivery address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                id: "address",
                value: form.address,
                onChange: (e) => setForm({ ...form, address: e.target.value }),
                placeholder: "House, street, area, city",
                className: "mt-1.5",
                rows: 3
              }
            ),
            errors.address && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-destructive", children: errors.address })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "notes", children: "Notes (optional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                id: "notes",
                value: form.notes,
                onChange: (e) => setForm({ ...form, notes: e.target.value }),
                placeholder: "Gift wrapping, color preference, etc.",
                className: "mt-1.5",
                rows: 2
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-2 rounded-2xl bg-secondary/50 p-4 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Subtotal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatPKR(subtotal) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Shipping" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatPKR(SHIPPING_FEE) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t border-border/60 pt-2 text-base font-semibold text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatPKR(total) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "submit",
            size: "lg",
            className: "mt-5 w-full",
            disabled: loading || items.length === 0,
            children: [
              loading && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
              "Place Order"
            ]
          }
        )
      ]
    }
  );
}
export {
  CheckoutForm as C
};
