import React, { useEffect } from 'react';
import { Search } from '../components/goods/Search';
import { GoodsList } from '../components/goods/GoodsList';
import { TPropsHandle } from '../models';
import { PAGES } from '../constants/pages';

export function Homepage(props: TPropsHandle) {
  useEffect(() => {
    const showPageName = (page: string) => props.handleOpenPage(page);
    showPageName(PAGES.home);
  }, [props]);

  return (
    <div className="container">
      <Search />
      <GoodsList />
    </div>
  );
}
