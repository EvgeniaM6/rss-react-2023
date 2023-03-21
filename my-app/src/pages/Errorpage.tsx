import React, { Component } from 'react';
import { TPropsHandle } from 'models';

export class Errorpage extends Component<TPropsHandle> {
  componentDidMount(): void {
    this.props.handleOpenPage();
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
