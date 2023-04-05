import React, { useState } from 'react';
import { IProduct } from '../../models';
import { ProductModal } from './ProductModal';

export function ProductCard(props: { product: Readonly<IProduct> }): JSX.Element {
  const { product } = props;
  const {
    urls: { regular },
  } = product;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="card" data-testid="good-card">
      <div className="card__container" onClick={() => setIsModalOpen(true)}>
        <img src={regular} className="card__image" />
      </div>
      {isModalOpen && <ProductModal product={product} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
