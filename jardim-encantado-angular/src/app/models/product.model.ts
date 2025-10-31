export interface Product {
  title: string;
  image: string;
  oldPrice: number;
  price: number;
  bestSeller: boolean;
  __deleted?: boolean;
}

export interface CustomProducts {
  buques?: Product[];
  arranjos?: Product[];
  presentes?: Product[];
}

