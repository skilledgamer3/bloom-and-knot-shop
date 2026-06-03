import { Instagram, MessageCircle, MapPin, Flower2 } from "lucide-react";
import { BRAND, INSTAGRAM_URL, WHATSAPP_NUMBER } from "@/lib/config";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-gradient-bloom">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Flower2 className="h-5 w-5" />
            </span>
            <span className="font-display text-2xl font-semibold text-foreground">
              {BRAND.name}
            </span>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            {BRAND.tagline} — handmade crochet gifts crafted with love.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-background/70 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              <Instagram className="h-4 w-4" /> Instagram
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-background/70 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:text-accent-foreground"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <span className="flex items-center gap-2 rounded-full bg-background/70 px-4 py-2 text-sm font-medium text-muted-foreground">
              <MapPin className="h-4 w-4" /> {BRAND.location}
            </span>
          </div>

          <p className="pt-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} {BRAND.name}. Made by hand, sent with joy.
          </p>
        </div>
      </div>
    </footer>
  );
}