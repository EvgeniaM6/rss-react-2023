import { UNSPLASH_API } from '../constants';
import { IProduct, IProductsRes } from '../models';

export async function getPhotoByParameters(
  searchValue: string,
  pageNum: number,
  sortBy: string
): Promise<IProductsRes> {
  const url = `https://api.unsplash.com/search/photos?orientation=portrait&page=${pageNum}&per_page=12&query=${searchValue}&order_by=${sortBy}&client_id=${UNSPLASH_API}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getPhotoById(id: string): Promise<IProduct> {
  const url = `https://api.unsplash.com/photos/${id}?client_id=${UNSPLASH_API}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
}
