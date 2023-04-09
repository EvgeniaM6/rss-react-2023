import React, { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import { IProductsRes, TGoodsListProps } from 'models';
import { LoadingAnimation } from '../../utils/LoadingAnimation';
import { getPhotoByParameters } from '../../data/dataRequest';

export function GoodsList(props: TGoodsListProps): JSX.Element {
  const { searchValue, pageNum, setPageAmount, sortBy } = props;
  const [data, setData] = useState<IProductsRes | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [respError, setRespError] = useState('');

  useEffect(() => {
    setData(null);
    setRespError('');
    setIsLoading(true);

    getPhotoByParameters(searchValue, pageNum, sortBy)
      .then((dataObj) => {
        setData(dataObj);
        setPageAmount(dataObj.total_pages);
        setRespError('');
      })
      .catch((err) => {
        setRespError(err.message);
        setData(null);
        setPageAmount(0);
      })
      .finally(() => setIsLoading(false));
  }, [searchValue, pageNum, setPageAmount, sortBy]);

  return (
    <div className="goods" data-testid="goods">
      {respError && <h2>{`Error: ${respError}`}</h2>}
      {isLoading && <div>{<LoadingAnimation />}</div>}
      {!isLoading &&
        !respError &&
        (data && !!data.results?.length ? (
          data.results.map((productObj) => <ProductCard key={productObj.id} product={productObj} />)
        ) : (
          <h2>No data</h2>
        ))}
    </div>
  );
}
