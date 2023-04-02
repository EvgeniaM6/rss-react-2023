import React from 'react';
import { NavLink } from 'react-router-dom';
import { TProps } from '../../models';

export function Layout(props: TProps) {
  return (
    <header className="header" data-testid="header">
      <div className="container">
        <NavLink to="/" className="header__link">
          Home
        </NavLink>
        <NavLink to="/forms" className="header__link">
          Forms
        </NavLink>
        <NavLink to="/about" className="header__link">
          About us
        </NavLink>
      </div>
      <div className="header__current">current page: {props.currentPage}</div>
    </header>
  );
}
