import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { TProps } from 'models';

export default class Layout extends Component<TProps> {
  render() {
    return (
      <header className="header">
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
        <div className="header__current">current page: {this.props.currentPage}</div>
      </header>
    );
  }
}
