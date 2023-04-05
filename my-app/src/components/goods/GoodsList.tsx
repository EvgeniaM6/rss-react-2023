import React, { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import { IProductsRes, TGoodsListProps } from 'models';

export function GoodsList(props: TGoodsListProps): JSX.Element {
  const { searchValue, pageNum, setPageAmount } = props;
  const [data, setData] = useState<IProductsRes | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [respError, setRespError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    setData(null);

    const url = `https://api.unsplash.com/search/photos?orientation=portrait&page=${pageNum}&per_page=12&query=${searchValue}&client_id=v5XgTy0t56zK48fAbSktE_YlmfNMaDoLcScy57Tyc28`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((dataObj) => {
        setData(dataObj);
        setPageAmount(dataObj.total_pages);
      })
      .catch((err) => {
        setRespError(err.message);
      })
      .finally(() => setIsLoading(false));
  }, [searchValue, pageNum, setPageAmount]);

  return (
    <div className="goods">
      {respError && <div>{`Error: ${respError}`}</div>}
      {isLoading && <div>Loading...</div>}
      {!isLoading &&
        (data && !!data.results.length ? (
          data.results.map((productObj) => <ProductCard key={productObj.id} product={productObj} />)
        ) : (
          <div>No data</div>
        ))}
    </div>
  );
}
