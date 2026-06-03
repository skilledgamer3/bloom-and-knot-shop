import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Product } from "@/lib/types";
import { ProductCard } from "./ProductCard";

export function FeaturedSlider({ products }: { products: Product[] }) {
  const autoplay = useRef(
    Autoplay({ delay: 3200, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  if (!products.length) return null;

  return (
    <Carousel
      opts={{ loop: true, align: "start" }}
      plugins={[autoplay.current]}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className="basis-4/5 pl-4 sm:basis-1/2 lg:basis-1/3"
          >
            <ProductCard product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden border-border bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground sm:flex" />
      <CarouselNext className="hidden border-border bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground sm:flex" />
    </Carousel>
  );
}