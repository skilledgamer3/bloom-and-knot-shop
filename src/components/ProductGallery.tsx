import { useEffect, useState } from "react";
import { ZoomIn } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export function ProductGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    api.on("select", onSelect);
    onSelect();
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const list = images.length ? images : [""];

  return (
    <div className="space-y-4">
      <Carousel setApi={setApi} opts={{ loop: list.length > 1 }} className="w-full">
        <CarouselContent>
          {list.map((src, i) => (
            <CarouselItem key={i}>
              <button
                type="button"
                onClick={() => setZoomOpen(true)}
                className="group relative block aspect-square w-full overflow-hidden rounded-3xl bg-secondary/40"
                aria-label="Zoom image"
              >
                <img
                  src={src}
                  alt={`${alt} ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                  <ZoomIn className="h-4 w-4" />
                </span>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        {list.length > 1 && (
          <>
            <CarouselPrevious className="left-3 border-border bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="right-3 border-border bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground" />
          </>
        )}
      </Carousel>

      {list.length > 1 && (
        <div className="flex gap-3">
          {list.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => api?.scrollTo(i)}
              className={cn(
                "h-16 w-16 overflow-hidden rounded-2xl border-2 transition-all",
                selected === i
                  ? "border-primary"
                  : "border-transparent opacity-70 hover:opacity-100",
              )}
            >
              <img
                src={src}
                alt={`${alt} thumbnail ${i + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      <Dialog open={zoomOpen} onOpenChange={setZoomOpen}>
        <DialogContent className="max-w-3xl overflow-hidden rounded-3xl border-border/60 bg-background p-2">
          <DialogTitle className="sr-only">{alt}</DialogTitle>
          <img
            src={list[selected]}
            alt={alt}
            className="h-full w-full rounded-2xl object-contain"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}