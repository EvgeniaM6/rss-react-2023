import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Layout extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <NavLink to="/" className="header__link">
            Home
          </NavLink>
          <NavLink to="/about" className="header__link">
            About us
          </NavLink>
        </div>
      </header>
    );
  }
}
