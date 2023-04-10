import { BASE_URL, UNSPLASH_API } from '../constants';
import { IProduct, IProductsRes } from '../models';

export async function getPhotoByParameters(
  searchValue: string,
  pageNum: number,
  sortBy: string
): Promise<IProductsRes | IProduct[]> {
  const url = !!searchValue
    ? `${BASE_URL}/search/photos?orientation=portrait&page=${pageNum}&per_page=12&query=${searchValue}&order_by=${sortBy}&client_id=${UNSPLASH_API}`
    : `${BASE_URL}/photos?page=${pageNum}&per_page=12&client_id=${UNSPLASH_API}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getPhotoById(id: string): Promise<IProduct> {
  const url = `${BASE_URL}/photos/${id}?client_id=${UNSPLASH_API}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
}
