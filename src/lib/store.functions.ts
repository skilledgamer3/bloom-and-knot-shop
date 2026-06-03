import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import type { Product, ProductImage } from "./types";

export const getProducts = createServerFn({ method: "GET" }).handler(
  async (): Promise<Product[]> => {
    const { supabaseAdmin } = await import(
      "@/integrations/supabase/client.server"
    );
    const { data, error } = await supabaseAdmin
      .from("products")
      .select("*")
      .order("created_at", { ascending: true });
    if (error) throw new Error(error.message);
    return (data ?? []) as Product[];
  },
);

export const getProductBySlug = createServerFn({ method: "GET" })
  .inputValidator((data: { slug: string }) =>
    z.object({ slug: z.string().min(1).max(120) }).parse(data),
  )
  .handler(
    async ({
      data,
    }): Promise<{ product: Product; images: ProductImage[] } | null> => {
      const { supabaseAdmin } = await import(
        "@/integrations/supabase/client.server"
      );
      const { data: product, error } = await supabaseAdmin
        .from("products")
        .select("*")
        .eq("product_slug", data.slug)
        .maybeSingle();
      if (error) throw new Error(error.message);
      if (!product) return null;

      const { data: images } = await supabaseAdmin
        .from("product_images")
        .select("*")
        .eq("product_id", product.id)
        .order("image_order", { ascending: true });

      return {
        product: product as Product,
        images: (images ?? []) as ProductImage[],
      };
    },
  );