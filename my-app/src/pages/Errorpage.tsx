import React, { Component } from 'react';
import { TPropsHandle } from '../models';
import { PAGES } from '../constants/pages';

export class Errorpage extends Component<TPropsHandle> {
  componentDidMount(): void {
    this.props.handleOpenPage(PAGES.error);
  }

  render() {
    return (
      <div className="container error-page">
        <p>Error 404</p>
        <h1>Oops! Specified page not found</h1>
      </div>
    );
  }
}
