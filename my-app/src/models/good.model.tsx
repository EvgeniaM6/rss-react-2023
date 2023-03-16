export interface IGood {
  id: number;
  name: string;
  category: string;
  brand: string;
  country: string;
  imageUrl: string;
  description: string;
  colors: TGoodColor[];
  composition: string;
  care: string;
  price: string;
  sizes: string[];
}

type TGoodColor = {
  title: string;
  code: string;
};
