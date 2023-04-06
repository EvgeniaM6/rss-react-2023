import React, { useState } from 'react';
import { IProduct } from '../../models';
import { Modal } from './Modal';
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
      <Modal isActive={isModalOpen} setIsActive={setIsModalOpen}>
        <ProductModal isActive={isModalOpen} product={product.id} />
      </Modal>
    </div>
  );
}
