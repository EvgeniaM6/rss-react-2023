import React from 'react';
import { render, screen } from '@testing-library/react';
import { GoodsList } from '../components/goods/GoodsList';
import { dataBase } from '../data/data';

describe('GoodsList', () => {
  beforeEach(() => {
    render(<GoodsList />);
  });

  it('should render all good cards', () => {
    const goodCardElementsList = screen.getAllByTestId('good-card');
    const goodsAmount = dataBase.goods.length;
    expect(goodCardElementsList).toHaveLength(goodsAmount);
  });
});
