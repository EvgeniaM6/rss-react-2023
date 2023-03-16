import React, { Component } from 'react';
import { Search } from '../components/Search';
import { GoodsList } from '../components/GoodsList';

export class Homepage extends Component {
  render() {
    return (
      <div className="container">
        <h1>Welcome to our site!</h1>
        <Search />
        <GoodsList />
      </div>
    );
  }
}
