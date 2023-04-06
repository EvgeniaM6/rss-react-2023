import React, { useEffect, useState } from 'react';
import { Search } from '../components/goods/Search';
import { GoodsList } from '../components/goods/GoodsList';
import { TPropsHandle } from '../models';
import { PAGES } from '../constants/pages';
import { Pagination } from '../components/goods/Pagination';
import { SortingData } from '../components/goods/SortingData';

export function Homepage(props: TPropsHandle): JSX.Element {
  const savedSearchVal: string = localStorage.getItem('searchValue') || '';
  const [searchValue, setSearchVal] = useState(savedSearchVal);
  const [pageNum, setPageNum] = useState(1);
  const [pageAmount, setPageAmount] = useState(1);
  const [sortBy, setSortBy] = useState('relevant');

  useEffect(() => {
    const showPageName = (page: string) => props.handleOpenPage(page);
    showPageName(PAGES.home);
  }, [props]);

  return (
    <div className="container home">
      <div className="user-managing">
        <Pagination pageNum={pageNum} setPageNum={setPageNum} pageAmount={pageAmount} />
        <Search changeSearch={setSearchVal} searchValue={searchValue} setPageNum={setPageNum} />
        <SortingData sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      <GoodsList
        searchValue={searchValue}
        pageNum={pageNum}
        setPageAmount={setPageAmount}
        sortBy={sortBy}
      />
      <div className="home__pagination">
        <Pagination pageNum={pageNum} setPageNum={setPageNum} pageAmount={pageAmount} />
      </div>
    </div>
  );
}
