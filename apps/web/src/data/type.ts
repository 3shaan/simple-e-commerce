interface ProductType {
  id: number;
  category: string;
  name: string;
  image: string;
  price: number;
  oldPrice: number;
  rating: number;
  description: string;
  brand: string;
  flavor: string;
  weight: string;
  speciality: string;
  longDescription: string;
}

interface CategoryType {
  id: string;
  label: string;
}

export type { CategoryType, ProductType };
