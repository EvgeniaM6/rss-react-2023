import React, { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import { IProduct, TGoodsListProps } from 'models';
import { LoadingAnimation } from '../../utils/LoadingAnimation';
import { goodsApi, useGetGoodsQuery } from '../../redux/goodsApi';
import { useAppSelector } from '../../hooks';
import { Modal } from './Modal';
import { ProductModal } from './ProductModal';
import { useAppDispatch } from '../../hooks';

export function GoodsList(props: TGoodsListProps): JSX.Element {
  const { pageNum, setPageAmount, sortBy } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productId, setProductId] = useState('');
  const [goodsArr, setGoodsArr] = useState<IProduct[]>([]);
  const { submittedSearch } = useAppSelector((state) => state.search);
  const [searchValue, setSearchValue] = useState(submittedSearch);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setSearchValue(submittedSearch);
  }, [submittedSearch]);

  const {
    data = {
      total: 0,
      total_pages: 0,
      results: [],
    },
    isLoading,
    error,
    isError,
  } = useGetGoodsQuery({ submittedSearch: searchValue, pageNum, sortBy });

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
    async function fetchData() {
      await Promise.all(dispatch(goodsApi.util.getRunningQueriesThunk()));
      if (Array.isArray(data)) {
        setGoodsArr(data);
      } else {
        setGoodsArr(data.results);
      }
    }
    fetchData();
  }, [isError, data, setPageAmount, dispatch, setGoodsArr]);

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
          goodsArr.map((productObj) => (
            <ProductCard
              key={productObj.id}
              product={productObj}
              setIsModalOpen={setIsModalOpen}
              setModalId={setProductId}
            />
          ))
        : !isError && !isLoading && <h2>No data</h2>}
      <Modal isActive={isModalOpen} setIsActive={setIsModalOpen}>
        {isModalOpen && <ProductModal productId={productId} />}
      </Modal>
    </div>
  );
}
