import React, { Component } from 'react';
import { Search } from '../components/goods/Search';
import { GoodsList } from '../components/goods/GoodsList';
import { TPropsHandle } from '../models';

export class Homepage extends Component<TPropsHandle> {
  componentDidMount(): void {
    this.props.handleOpenPage();
  }

  render() {
    return (
      <div className="container">
        <Search />
        <GoodsList />
      </div>
    );
  }
}
