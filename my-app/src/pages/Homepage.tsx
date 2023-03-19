import React, { Component } from 'react';
import { Search } from '../components/Search';
import { GoodsList } from '../components/GoodsList';

export class Homepage extends Component {
  render() {
    return (
      <div className="container">
        <Search />
        <GoodsList />
      </div>
    );
  }
}
