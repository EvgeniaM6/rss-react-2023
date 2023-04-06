import React, { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import { IProductsRes, TGoodsListProps } from 'models';
import { LoadingAnimation } from '../../utils/LoadingAnimation';

export function GoodsList(props: TGoodsListProps): JSX.Element {
  const { searchValue, pageNum, setPageAmount, sortBy } = props;
  const [data, setData] = useState<IProductsRes | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [respError, setRespError] = useState('');

  useEffect(() => {
    setData(null);
    setRespError('');
    setIsLoading(true);

    const url = `https://api.unsplash.com/search/photos?orientation=portrait&page=${pageNum}&per_page=12&query=${searchValue}&order_by=${sortBy}&client_id=v5XgTy0t56zK48fAbSktE_YlmfNMaDoLcScy57Tyc28`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((dataObj) => {
        setData(dataObj);
        setPageAmount(dataObj.total_pages);
        setRespError('');
      })
      .catch((err) => {
        console.log('err=', err);
        setRespError(err.message);
        setData(null);
        setPageAmount(0);
      })
      .finally(() => setIsLoading(false));
  }, [searchValue, pageNum, setPageAmount, sortBy]);

  return (
    <div className="goods">
      {respError && <h2>{`Error: ${respError}`}</h2>}
      {isLoading && <div>{<LoadingAnimation />}</div>}
      {!isLoading &&
        !respError &&
        (data && !!data.results.length ? (
          data.results.map((productObj) => <ProductCard key={productObj.id} product={productObj} />)
        ) : (
          <h2>No data</h2>
        ))}
    </div>
  );
}
