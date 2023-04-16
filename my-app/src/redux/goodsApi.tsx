import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UNSPLASH_API } from '../constants';
import { IProduct, IProductsRes, TGoodsSearchProps } from '../models';
import fetch from 'isomorphic-fetch';

export const goodsApi = createApi({
  reducerPath: 'goodsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.unsplash.com/', fetchFn: fetch }),
  endpoints: (build) => ({
    getGoods: build.query<IProductsRes | IProduct[], TGoodsSearchProps>({
      query: (searchParams: TGoodsSearchProps) => {
        const { submittedSearch, pageNum, sortBy } = searchParams;
        return submittedSearch
          ? `/search/photos?orientation=portrait&page=${pageNum}&per_page=12&query=${submittedSearch}&order_by=${sortBy}&client_id=${UNSPLASH_API}`
          : `/photos?page=${pageNum}&per_page=12&client_id=${UNSPLASH_API}`;
      },
    }),
    getProductById: build.query<IProduct, string>({
      query: (id: string) => `/photos/${id}?client_id=${UNSPLASH_API}`,
    }),
  }),
});

export const { useGetGoodsQuery, useGetProductByIdQuery } = goodsApi;
