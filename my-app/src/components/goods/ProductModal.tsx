import React from 'react';
import { IProduct } from '../../models';

export function ProductModal(props: {
  product: Readonly<IProduct>;
  onClose: () => void;
}): JSX.Element {
  const { product, onClose } = props;

  return (
    <div className="confirm">
      <div className="confirm__content">
        <h2>{product.description}</h2>
        <h3>{product.alt_description}</h3>
        <button className="confirm__button" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
}
