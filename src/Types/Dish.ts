export interface Dish {
  id: string;
  name: string;
  danishName?: string;
  price: string;
  description: string;
  ingredients: string;
  category: string;
  image: string;
  story?: string;
  pairing?: string;
}