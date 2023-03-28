import React from 'react';
import { IGood } from '../../models';

export function GoodCard(props: { good: Readonly<IGood> }) {
  const {
    imageUrl,
    name,
    colors,
    price,
    sizes,
    composition: { short },
    brand,
    country,
    category,
  } = props.good;

  return (
    <div className="card" data-testid="good-card">
      <div className="card__container">
        <img src={imageUrl} alt={name} className="card__image" />
        <div className="card__description description">
          <div className="description__main">
            <h3 className="card__name">{name.toLowerCase() || ''}</h3>
          </div>
          <div className="description__other">
            <div className="card__colors">
              <p className="card__colors-title card-title">Colors:</p>
              <div className="card__colors-block">
                {colors.map((colorObj) => (
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
              <span>{price}</span>
              <span> UAH</span>
            </div>
            <div className="card__sizes">
              <span className="card__sizes-title card-title">Sizes:</span>
              <span className="card__sizes-signs">{sizes.join(' ')}</span>
            </div>
            <div className="card__composition">
              <span className="card-title">Fabric structure:</span>
              <span>{short}</span>
            </div>
            <div className="card__producer">
              <span className="card-title">Producer:</span>
              <span>{brand}</span>
              <span>, </span>
              <span>{country}</span>
            </div>
            <div className="card__category">
              <span className="card-title">Category:</span>
              <span>{category}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
