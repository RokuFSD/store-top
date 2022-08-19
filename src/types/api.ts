interface Category {
  id: number;
  image: string;
  name: string;
}

export interface IProduct {
  category: Category;
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}
