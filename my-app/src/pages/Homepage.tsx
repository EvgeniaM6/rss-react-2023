import React, { Component } from 'react';
import { Search } from '../components/Search';
import { GoodsList } from '../components/GoodsList';
import { TPropsHandle } from 'models';

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
