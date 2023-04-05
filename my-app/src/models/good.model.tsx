import { Dispatch, SetStateAction } from 'react';

export interface IGood {
  id: number;
  name: string;
  category: string;
  brand: string;
  country: string;
  imageUrl: string;
  description: string;
  colors: TGoodColor[];
  composition: TGoodComposition;
  care: string;
  price: string;
  sizes: string[];
}

type TGoodColor = {
  title: string;
  code: string;
};

type TGoodComposition = {
  short: string;
  full: string;
};

export type TPaginationProps = {
  pageNum: number;
  setPageNum: Dispatch<SetStateAction<number>>;
  pageAmount: number;
};

export type TSearchProps = {
  changeSearch: Dispatch<SetStateAction<string>>;
  searchValue: string;
  setPageNum: Dispatch<SetStateAction<number>>;
};

export type TGoodsListProps = {
  searchValue: string;
  pageNum: number;
  setPageAmount: Dispatch<SetStateAction<number>>;
};

export interface IProductsRes {
  total: number;
  total_pages: number;
  results: IProduct[];
}

export interface IProduct {
  id: string;
  created_at: string;
  updated_at: string;
  urls: TUrls;
  description: string;
  alt_description: string;
}

type TUrls = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
};
