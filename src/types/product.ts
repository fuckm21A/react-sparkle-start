export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
  category_product: string;
  type_product: string;
  itemgroup_product: string;
  material?: string;
  color?: string;
  size?: string;
  personalization?: string;
  sizes?: string[];
}