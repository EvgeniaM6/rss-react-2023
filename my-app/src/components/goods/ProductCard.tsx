import React, { Dispatch, SetStateAction } from 'react';
import { IProduct } from '../../models';

export function ProductCard(props: {
  product: Readonly<IProduct>;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setModalId: Dispatch<SetStateAction<string>>;
}): JSX.Element {
  const { product, setIsModalOpen, setModalId } = props;
  const {
    urls: { regular },
  } = product;

  const openModalWindow = () => {
    setIsModalOpen(true);
    setModalId(product.id);
  };

  return (
    <div className="card" data-testid="good-card">
      <div className="card__container" onClick={openModalWindow}>
        <img src={regular} className="card__image" />
      </div>
    </div>
  );
}
