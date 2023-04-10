import React, { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import { IProduct, TGoodsListProps } from 'models';
import { LoadingAnimation } from '../../utils/LoadingAnimation';
import { getPhotoByParameters } from '../../data/dataRequest';

export function GoodsList(props: TGoodsListProps): JSX.Element {
  const { searchValue, pageNum, setPageAmount, sortBy } = props;
  const [data, setData] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [respError, setRespError] = useState('');

  useEffect(() => {
    setData([]);
    setRespError('');
    setIsLoading(true);

    getPhotoByParameters(searchValue, pageNum, sortBy)
      .then((dataObj) => {
        if (Array.isArray(dataObj)) {
          setData(dataObj);
          setPageAmount(Infinity);
        } else {
          setData(dataObj.results);
          setPageAmount(dataObj.total_pages);
        }
        setRespError('');
      })
      .catch((err) => {
        setRespError(err.message);
        setData([]);
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
        (!!data?.length ? (
          data.map((productObj) => <ProductCard key={productObj.id} product={productObj} />)
        ) : (
          <h2>No data</h2>
        ))}
    </div>
  );
}
