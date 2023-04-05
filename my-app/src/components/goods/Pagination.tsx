import React from 'react';
import { TPaginationProps } from 'models';

export function Pagination(props: TPaginationProps): JSX.Element {
  const { pageNum, setPageNum, pageAmount, haveNextPage, havePrevPage } = props;

  function prevPage() {
    if (!havePrevPage) return;
    setPageNum(pageNum - 1);
  }

  function nextPage() {
    if (!haveNextPage) return;
    setPageNum(pageNum + 1);
  }

  return (
    <div className="page">
      <div className="page__next">
        <button
          className={
            havePrevPage ? 'page__prev-btn page-btn page-btn-active' : 'page__prev-btn page-btn'
          }
          onClick={prevPage}
        >
          prev
        </button>
      </div>
      <div>{pageNum}</div>
      <div> / </div>
      <div>{pageAmount}</div>
      <div className="page__prev">
        <button
          className={
            haveNextPage ? 'page__next-btn page-btn page-btn-active' : 'page__next-btn page-btn'
          }
          onClick={nextPage}
        >
          next
        </button>
      </div>
    </div>
  );
}
