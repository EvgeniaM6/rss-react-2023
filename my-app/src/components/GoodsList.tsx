import React, { Component } from 'react';
import { GoodCard } from './GoodCard';
import { dataBase } from '../data/data';

export class GoodsList extends Component {
  render() {
    return (
      <div className="goods">
        {dataBase.goods.map((goodObj) => (
          <GoodCard key={goodObj.id} good={goodObj} />
        ))}
      </div>
    );
  }
}
