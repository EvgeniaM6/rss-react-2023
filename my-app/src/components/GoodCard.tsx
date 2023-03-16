import React, { Component } from 'react';
import { IGood, TProps } from '../models';

export class GoodCard extends Component<{ good: Readonly<IGood> }, TProps> {
  render() {
    return (
      <div className="card">
        <h1>{this.props.good.name}</h1>
      </div>
    );
  }
}
