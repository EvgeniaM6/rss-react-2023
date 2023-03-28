import React from 'react';
import { GoodCard } from './GoodCard';
import { dataBase } from '../../data/data';

export function GoodsList() {
  return (
    <div className="goods">
      {dataBase.goods.map((goodObj) => (
        <GoodCard key={goodObj.id} good={goodObj} />
      ))}
    </div>
  );
}
