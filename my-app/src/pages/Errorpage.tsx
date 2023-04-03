import React, { useEffect } from 'react';
import { TPropsHandle } from '../models';
import { PAGES } from '../constants/pages';

export function Errorpage(props: TPropsHandle): JSX.Element {
  useEffect(() => {
    const showPageName = (page: string) => props.handleOpenPage(page);
    showPageName(PAGES.error);
  }, [props]);

  return (
    <div className="container error-page">
      <p>Error 404</p>
      <h1>Oops! Specified page not found</h1>
    </div>
  );
}
