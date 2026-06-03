import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { u as useProducts, F as FadeIn, C as Carousel, a as CarouselContent, b as CarouselItem, c as CarouselPrevious, d as CarouselNext, D as Dialog, e as DialogTrigger, f as DialogContent, g as DialogTitle } from "./FadeIn-DkhABs-i.mjs";
import { A as Autoplay } from "../_libs/embla-carousel-autoplay.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as BRAND, B as Button, f as formatPKR, u as useCart } from "./router-CuFaKRm_.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { A as ArrowRight, F as Flower, G as Gift, L as LoaderCircle, H as Heart, E as Eye, b as Minus, P as Plus, S as ShoppingBag } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__query-core.mjs";
import "./client-EqBt9629.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/embla-carousel-react.mjs";
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function QuickView({ product }) {
  const { addItem } = useCart();
  const [qty, setQty] = reactExports.useState(1);
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: "absolute bottom-3 left-1/2 flex -translate-x-1/2 translate-y-3 items-center gap-1.5 rounded-full bg-background/90 px-4 py-2 text-xs font-semibold text-foreground opacity-0 shadow-card backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-primary hover:text-primary-foreground",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3.5 w-3.5" }),
          " Quick view"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "max-w-2xl overflow-hidden rounded-3xl border-border/60 p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-0 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: product.main_image_url ?? "",
          alt: product.product_name,
          className: "h-full w-full object-cover"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          product.category && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium uppercase tracking-wider text-accent-foreground", children: product.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display text-2xl", children: product.product_name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-lg font-semibold text-primary", children: formatPKR(product.price_pkr) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "line-clamp-4 text-sm text-muted-foreground", children: product.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center rounded-full border border-border bg-background", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setQty((q) => Math.max(1, q - 1)),
              className: "flex h-9 w-9 items-center justify-center rounded-full text-foreground hover:text-primary",
              "aria-label": "Decrease quantity",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 text-center text-sm font-semibold", children: qty }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setQty((q) => q + 1),
              className: "flex h-9 w-9 items-center justify-center rounded-full text-foreground hover:text-primary",
              "aria-label": "Increase quantity",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" })
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: () => {
                addItem(product, qty);
                toast.success(`Added ${product.product_name} to cart 🌸`);
                setOpen(false);
                setQty(1);
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-4 w-4" }),
                " Add to cart"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/product/$slug",
              params: { slug: product.product_slug },
              children: "View full details"
            }
          ) })
        ] })
      ] })
    ] }) })
  ] });
}
function ProductCard({ product }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex flex-col overflow-hidden rounded-3xl bg-card shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-glow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square overflow-hidden bg-secondary/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/product/$slug",
          params: { slug: product.product_slug },
          "aria-label": product.product_name,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product.main_image_url ?? "",
              alt: product.product_name,
              loading: "lazy",
              width: 1024,
              height: 1024,
              className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(QuickView, { product })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/product/$slug",
        params: { slug: product.product_slug },
        className: "flex flex-1 flex-col gap-1 p-5",
        children: [
          product.category && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium uppercase tracking-wider text-accent-foreground", children: product.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold leading-tight text-foreground transition-colors group-hover:text-primary", children: product.product_name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-base font-semibold text-primary", children: formatPKR(product.price_pkr) })
        ]
      }
    )
  ] });
}
function FeaturedSlider({ products }) {
  const autoplay = reactExports.useRef(
    Autoplay({ delay: 3200, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  if (!products.length) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Carousel,
    {
      opts: { loop: true, align: "start" },
      plugins: [autoplay.current],
      className: "w-full",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselContent, { className: "-ml-4", children: products.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          CarouselItem,
          {
            className: "basis-4/5 pl-4 sm:basis-1/2 lg:basis-1/3",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product })
          },
          product.id
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselPrevious, { className: "hidden border-border bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground sm:flex" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselNext, { className: "hidden border-border bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground sm:flex" })
      ]
    }
  );
}
const floats = [{
  src: "/products/cherry-keychain.jpg",
  cls: "left-[6%] top-[18%] h-20 w-20 animate-float-slow"
}, {
  src: "/products/rose-keychain.jpg",
  cls: "right-[8%] top-[14%] h-24 w-24 animate-drift"
}, {
  src: "/products/sunflower-keychain.jpg",
  cls: "left-[12%] bottom-[14%] h-16 w-16 animate-float-soft"
}, {
  src: "/products/octopus-keychain.jpg",
  cls: "right-[12%] bottom-[16%] h-20 w-20 animate-float-slow"
}];
function Home() {
  const {
    data: products = [],
    isLoading
  } = useProducts();
  const featured = products.slice(0, 6);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-warm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0", children: floats.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute hidden overflow-hidden rounded-full opacity-90 shadow-card md:block ${f.cls}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: f.src, alt: "", className: "h-full w-full object-cover" }) }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto flex max-w-4xl flex-col items-center px-5 py-24 text-center sm:py-32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { initial: {
          opacity: 0,
          y: 18,
          scale: 0.95
        }, animate: {
          opacity: 1,
          y: 0,
          scale: 1
        }, transition: {
          duration: 0.7,
          delay: 0.1
        }, className: "text-balance font-display text-5xl font-semibold leading-[1.05] text-foreground sm:text-7xl", children: BRAND.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.p, { initial: {
          opacity: 0,
          y: 18
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.6,
          delay: 0.25
        }, className: "mt-4 max-w-md text-lg text-muted-foreground", children: [
          BRAND.tagline,
          ". Soft, cute crochet treasures handmade for the people you love."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 18
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.6,
          delay: 0.35
        }, className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "rounded-full px-8 shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#shop", children: [
          "Shop Collection ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) }) })
      ] })
    ] }),
    featured.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative mx-auto max-w-6xl px-5 py-16 sm:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { className: "mb-12 flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.span, { initial: {
          opacity: 0
        }, whileInView: {
          opacity: 1
        }, transition: {
          duration: 0.5
        }, viewport: {
          once: true
        }, className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Flower, { className: "h-4 w-4" }),
          " Loved by everyone"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h2, { initial: {
          opacity: 0,
          y: 10
        }, whileInView: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.5,
          delay: 0.1
        }, viewport: {
          once: true
        }, className: "mt-3 font-display text-3xl sm:text-4xl", children: "Featured Blooms" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0
        }, whileInView: {
          opacity: 1
        }, transition: {
          duration: 0.5,
          delay: 0.2
        }, viewport: {
          once: true
        }, className: "mt-2 text-sm text-muted-foreground", children: "Hand-picked treasures for that special someone" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0
      }, whileInView: {
        opacity: 1
      }, transition: {
        duration: 0.5,
        delay: 0.2
      }, viewport: {
        once: true
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedSlider, { products: featured }) })
    ] }),
    featured.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-6xl px-5 py-12 sm:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: featured.slice(0, 4).map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, whileInView: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.5,
      delay: i * 0.1
    }, viewport: {
      once: true
    }, className: "group relative overflow-hidden rounded-2xl bg-gradient-to-br from-background to-muted", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square overflow-hidden rounded-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.main_image_url ?? "", alt: product.product_name, className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0
        }, whileHover: {
          opacity: 1
        }, transition: {
          duration: 0.3
        }, className: "absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", className: "rounded-full", children: "View" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold line-clamp-1", children: product.product_name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-primary", children: [
          "PKR ",
          product.price_pkr?.toLocaleString()
        ] })
      ] })
    ] }, product.id)) }) }),
    featured.length > 6 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative mx-auto max-w-6xl px-5 py-16 sm:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { className: "mb-12 flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.span, { initial: {
          opacity: 0
        }, whileInView: {
          opacity: 1
        }, transition: {
          duration: 0.5
        }, viewport: {
          once: true
        }, className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "h-4 w-4" }),
          " More Treasures"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h2, { initial: {
          opacity: 0,
          y: 10
        }, whileInView: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.5,
          delay: 0.1
        }, viewport: {
          once: true
        }, className: "mt-3 font-display text-3xl sm:text-4xl", children: "Explore More" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0
      }, whileInView: {
        opacity: 1
      }, transition: {
        duration: 0.5,
        delay: 0.2
      }, viewport: {
        once: true
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedSlider, { products: featured.slice(0, 6) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "shop", className: "mx-auto max-w-6xl scroll-mt-20 px-5 py-16 sm:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { className: "mb-12 flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { initial: {
          opacity: 0
        }, whileInView: {
          opacity: 1
        }, transition: {
          duration: 0.5
        }, viewport: {
          once: true
        }, className: "text-xs font-semibold uppercase tracking-wider text-accent-foreground", children: "The Collection" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h2, { initial: {
          opacity: 0,
          y: 10
        }, whileInView: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.5,
          delay: 0.1
        }, viewport: {
          once: true
        }, className: "mt-3 font-display text-3xl sm:text-4xl", children: "Shop Every Little Joy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0
        }, whileInView: {
          opacity: 1
        }, transition: {
          duration: 0.5,
          delay: 0.2
        }, viewport: {
          once: true
        }, className: "mt-2 max-w-md text-sm text-muted-foreground", children: "Each piece is crocheted by hand, one stitch at a time." })
      ] }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-16 text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0
      }, whileInView: {
        opacity: 1
      }, transition: {
        duration: 0.5,
        delay: 0.2
      }, viewport: {
        once: true
      }, className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3", children: products.map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i % 3 * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product }) }, product.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-6xl px-5 py-16 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-10 rounded-3xl bg-gradient-bloom p-8 sm:p-12 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        scale: 0.95
      }, whileInView: {
        opacity: 1,
        scale: 1
      }, transition: {
        duration: 0.6
      }, viewport: {
        once: true
      }, className: "overflow-hidden rounded-3xl shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/brand-craft.jpg", alt: "Hands crocheting a small pastel flower", loading: "lazy", className: "h-full w-full object-cover transition-transform duration-500 hover:scale-105" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.6,
        delay: 0.2
      }, viewport: {
        once: true
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-3.5 w-3.5" }),
          " Our story"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-3xl sm:text-4xl", children: "Handmade crochet gifts made with love" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Every Knot & Bloom piece begins as a single thread and a little daydream. We crochet slowly and carefully, so each gift carries a bit of warmth, softness and joy — ready to bloom in someone's day." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0
        }, whileInView: {
          opacity: 1
        }, transition: {
          duration: 0.5,
          delay: 0.4
        }, viewport: {
          once: true
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "mt-6 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#shop", children: "Discover the collection" }) }) })
      ] }) })
    ] }) })
  ] });
}
export {
  Home as component
};
