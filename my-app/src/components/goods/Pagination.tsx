import React from 'react';
import { TPaginationProps } from 'models';

export function Pagination(props: TPaginationProps): JSX.Element {
  const { pageNum, setPageNum, pageAmount } = props;

  const havePrevPage = pageNum > 1;
  const haveNextPage = pageNum < pageAmount;

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
        <button className="page__prev-btn page-btn" disabled={!havePrevPage} onClick={prevPage}>
          &#129120;
        </button>
      </div>
      <div className="page__number">
        <div>{!!pageAmount ? pageNum : 0}</div>
        <div> / </div>
        <div>{pageAmount ? (pageAmount === Infinity ? '...' : pageAmount) : 0}</div>
      </div>
      <div className="page__prev">
        <button className="page__next-btn page-btn" disabled={!haveNextPage} onClick={nextPage}>
          &#129122;
        </button>
      </div>
    </div>
  );
}
