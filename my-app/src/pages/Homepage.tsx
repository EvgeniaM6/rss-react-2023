import React, { Component } from 'react';
import { Search } from '../components/goods/Search';
import { GoodsList } from '../components/goods/GoodsList';
import { TPropsHandle } from '../models';
import { PAGES } from '../constants/pages';

export class Homepage extends Component<TPropsHandle> {
  componentDidMount(): void {
    this.props.handleOpenPage(PAGES.home);
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
