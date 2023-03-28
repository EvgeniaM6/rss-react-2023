import React, { useEffect } from 'react';
import { TPropsHandle } from '../models';
import { PAGES } from '../constants/pages';

export function Errorpage(props: TPropsHandle) {
  useEffect(() => {
    props.handleOpenPage(PAGES.error);
  }, []);

  return (
    <div className="container error-page">
      <p>Error 404</p>
      <h1>Oops! Specified page not found</h1>
    </div>
  );
}
