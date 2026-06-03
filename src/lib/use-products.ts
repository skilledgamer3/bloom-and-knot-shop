import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Product, ProductImage } from "./types";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: async (): Promise<Product[]> => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: true });
      if (error) throw new Error(error.message);
      return (data ?? []) as Product[];
    },
  });
}

export function useProduct(slug: string) {
  return useQuery({
    queryKey: ["product", slug],
    queryFn: async (): Promise<{
      product: Product;
      images: ProductImage[];
    } | null> => {
      const { data: product, error } = await supabase
        .from("products")
        .select("*")
        .eq("product_slug", slug)
        .maybeSingle();
      if (error) throw new Error(error.message);
      if (!product) return null;
      const { data: images } = await supabase
        .from("product_images")
        .select("*")
        .eq("product_id", (product as Product).id)
        .order("image_order", { ascending: true });
      return {
        product: product as Product,
        images: (images ?? []) as ProductImage[],
      };
    },
  });
}