import { ComponentPropsWithoutRef, Dispatch, SetStateAction } from 'react';

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

export type TSortingProps = {
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
};

export type TSearchProps = {
  setPageNum: Dispatch<SetStateAction<number>>;
};

export type TGoodsListProps = {
  pageNum: number;
  setPageAmount: Dispatch<SetStateAction<number>>;
  sortBy: string;
};

export type TGoodsSearchProps = {
  submittedSearch: string;
  pageNum: number;
  sortBy: string;
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
  likes: number;
  downloads: number;
  user: TUserData;
  location: TLocation;
}

type TUrls = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
};

type TUserData = {
  username: string;
  name: string;
  instagram_username: string;
  twitter_username: string;
  portfolio_url: string;
  profile_image: TProfileImg;
};

type TProfileImg = {
  small: string;
  medium: string;
  large: string;
};

type TLocation = {
  city: string;
  country: string;
};

export type TModalProps = ComponentPropsWithoutRef<'div'> & {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
};

export type TSearchState = {
  changedSearch: '';
  submittedSearch: '';
};

export type TSearchForm = {
  search: string;
};
