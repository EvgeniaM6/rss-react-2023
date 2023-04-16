import React, { useEffect } from 'react';
import { ProductCard } from './ProductCard';
import { IProduct, TGoodsListProps } from 'models';
import { LoadingAnimation } from '../../utils/LoadingAnimation';
import { useGetGoodsQuery } from '../../redux/goodsApi';
import { useAppSelector } from '../../hooks';

export function GoodsList(props: TGoodsListProps): JSX.Element {
  const { pageNum, setPageAmount, sortBy } = props;
  const { submittedSearch } = useAppSelector((state) => state.search);

  const {
    data = {
      total: 0,
      total_pages: 0,
      results: [],
    },
    isLoading,
    error,
    isError,
  } = useGetGoodsQuery({ submittedSearch, pageNum, sortBy });

  useEffect(() => {
    if (isError) {
      setPageAmount(0);
      return;
    }

    if (Array.isArray(data)) {
      setPageAmount(Infinity);
    } else {
      setPageAmount(data.total_pages);
    }
  }, [isError, data, setPageAmount]);

  const goodsArr: IProduct[] = Array.isArray(data) ? data : data.results;

  return (
    <div className="goods" data-testid="goods">
      {isError && (
        <h2>{`Error: ${'status' in error && error.status} ${
          'data' in error && JSON.stringify(error.data)
        }`}</h2>
      )}
      {isLoading && <div>{<LoadingAnimation />}</div>}
      {goodsArr.length
        ? !isError &&
          !isLoading &&
          goodsArr.map((productObj) => <ProductCard key={productObj.id} product={productObj} />)
        : !isError && !isLoading && <h2>No data</h2>}
    </div>
  );
}
