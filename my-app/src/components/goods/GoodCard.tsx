import React, { Component } from 'react';
import { IGood, TProps } from '../../models';

export class GoodCard extends Component<{ good: Readonly<IGood> }, TProps> {
  render() {
    return (
      <div className="card" data-testid="good-card">
        <div className="card__container">
          <img src={this.props.good.imageUrl} alt={this.props.good.name} className="card__image" />
          <div className="card__description description">
            <div className="description__main">
              <h3 className="card__name">{this.props.good.name.toLowerCase()}</h3>
            </div>
            <div className="description__other">
              <div className="card__colors">
                <p className="card__colors-title card-title">Colors:</p>
                <div className="card__colors-block">
                  {this.props.good.colors.map((colorObj) => (
                    <div
                      className="card__colors-palette"
                      key={colorObj.title}
                      title={colorObj.title}
                      style={{ backgroundColor: colorObj.code }}
                      data-testid="colors-palette"
                    ></div>
                  ))}
                </div>
              </div>
              <div className="card__price">
                <span className="card-title">Price:</span>
                <span>{this.props.good.price}</span>
                <span> UAH</span>
              </div>
              <div className="card__sizes">
                <span className="card__sizes-title card-title">Sizes:</span>
                <span className="card__sizes-signs">{this.props.good.sizes.join(' ')}</span>
              </div>
              <div className="card__composition">
                <span className="card-title">Fabric structure:</span>
                <span>{this.props.good.composition.short}</span>
              </div>
              <div className="card__producer">
                <span className="card-title">Producer:</span>
                <span>{this.props.good.brand}</span>
                <span>, </span>
                <span>{this.props.good.country}</span>
              </div>
              <div className="card__category">
                <span className="card-title">Category:</span>
                <span>{this.props.good.category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
