import React, { Component } from 'react';
import { Search } from '../components/Search';

export class Homepage extends Component {
  render() {
    return (
      <div className="container">
        <h1>Welcome to our site!</h1>
        <Search />
      </div>
    );
  }
}
