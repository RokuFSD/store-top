export interface IProduct {
  category: ICategory;
  _id: string;
  title: string;
  price: number;
  description: string;
  image: string;
}

export interface ICategory {
  _id: number;
  name: string;
  slug: string;
  products: IProduct[];
}
