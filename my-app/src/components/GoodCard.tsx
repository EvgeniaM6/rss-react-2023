import React, { Component } from 'react';
import { IGood, TProps } from '../models';

export class GoodCard extends Component<{ good: Readonly<IGood> }, TProps> {
  render() {
    return (
      <div className="card">
        <div className="card__container">
          <img src={this.props.good.imageUrl} alt={this.props.good.name} className="card__image" />
          <div className="card__description">
            <h3>{this.props.good.name.toLowerCase()}</h3>
            <div className="card__colors">
              <p className="card__colors-title">Colors:</p>
              <div className="card__colors-block">
                {this.props.good.colors.map((colorObj) => (
                  <div
                    className="card__colors-palette"
                    key={colorObj.title}
                    title={colorObj.title}
                    style={{ backgroundColor: colorObj.code }}
                  ></div>
                ))}
              </div>
            </div>
            <p className="card__price">
              <span>Price:</span>
              <span>{this.props.good.price}</span>
              <span>UAH</span>
            </p>
            <div className="card__sizes">
              <span className="card__sizes-title">Sizes:</span>
              <span className="card__sizes-signs">{this.props.good.sizes.join(' ')}</span>
            </div>
            <p className="card__composition">{this.props.good.composition.short}</p>
            <div className="card__producer">
              <span>Producer:</span>
              <span>{this.props.good.brand}</span>
              <span>, </span>
              <span>{this.props.good.country}</span>
            </div>
            <p className="card__category">
              <span>Category:</span>
              <span>{this.props.good.category}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
