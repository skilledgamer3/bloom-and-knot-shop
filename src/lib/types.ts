export interface Product {
  id: string;
  product_name: string;
  price_pkr: number;
  description: string | null;
  category: string | null;
  tags: string[] | null;
  material: string | null;
  stock_quantity: number;
  product_slug: string;
  main_image_url: string | null;
  created_at: string;
}

export interface ProductImage {
  id: string;
  product_id: string;
  image_url: string;
  image_order: number;
}

export interface CartItem {
  id: string;
  product_name: string;
  product_slug: string;
  price_pkr: number;
  main_image_url: string | null;
  quantity: number;
}