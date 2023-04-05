import React, { useEffect, useState } from 'react';
import { Search } from '../components/goods/Search';
import { GoodsList } from '../components/goods/GoodsList';
import { TPropsHandle } from '../models';
import { PAGES } from '../constants/pages';
import { Pagination } from '../components/goods/Pagination';

export function Homepage(props: TPropsHandle): JSX.Element {
  const savedSearchVal: string = localStorage.getItem('searchValue') || '';
  const [searchValue, setSearchVal] = useState(savedSearchVal);
  const [pageNum, setPageNum] = useState(1);
  const [pageAmount, setPageAmount] = useState(1);
  const [havePrevPage, setHavePrevPage] = useState(false);
  const [haveNextPage, setHaveNextPage] = useState(false);

  useEffect(() => {
    const showPageName = (page: string) => props.handleOpenPage(page);
    showPageName(PAGES.home);
  }, [props]);

  useEffect(() => {
    setHavePrevPage(pageNum > 1);
    setHaveNextPage(pageNum < pageAmount);
  }, [pageNum, pageAmount]);

  return (
    <div className="container">
      <div>
        <Pagination
          pageNum={pageNum}
          setPageNum={setPageNum}
          pageAmount={pageAmount}
          havePrevPage={havePrevPage}
          haveNextPage={haveNextPage}
        />
        <Search changeSearch={setSearchVal} searchValue={searchValue} setPageNum={setPageNum} />
      </div>
      <GoodsList searchValue={searchValue} pageNum={pageNum} setPageAmount={setPageAmount} />
    </div>
  );
}
