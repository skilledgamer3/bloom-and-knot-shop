export const BRAND = {
  name: "Knot & Bloom",
  tagline: "Tiny knots, blooming joy",
  location: "Pakistan",
};

// Shipping
export const SHIPPING_FEE = 300;

// Contact — update these with the real brand accounts
// WhatsApp number in international format, digits only (no +, no spaces)
export const WHATSAPP_NUMBER = "923167568301";
export const INSTAGRAM_URL = "http://www.instagram.com/knotandbloom_crochet";

export const formatPKR = (amount: number) =>
  `Rs ${Math.round(amount).toLocaleString("en-PK")}`;