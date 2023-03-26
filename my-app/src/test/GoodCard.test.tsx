import React from 'react';
import { render, screen } from '@testing-library/react';
import { GoodCard } from '../components/goods/GoodCard';

describe('GoodCard', () => {
  const mochaGood = {
    id: 1,
    name: 'hoodie style',
    category: 'hoodie',
    brand: 'choose',
    country: 'USA',
    imageUrl: '',
    description: 'hoodie with raglan sleeves',
    colors: [
      {
        title: 'black',
        code: '#000000',
      },
      {
        title: 'white',
        code: '#ffffff',
      },
    ],
    composition: {
      short: 'cotton 80%, elastane 20%',
      full: 'cotton 80% elastane 20%',
    },
    care: 'hand or delicate wash up to 30 degrees is recommended, read the inner label in detail before washing',
    price: '1000',
    sizes: ['S', 'M', 'L'],
    sex: 'male',
  };

  beforeEach(() => {
    render(<GoodCard good={mochaGood} />);
  });

  it('should render name', () => {
    screen.getByText(mochaGood.name.toLowerCase());
  });

  it('with N colors should render N color palettes', () => {
    const colorElementsList = screen.getAllByTestId('colors-palette');
    const colorsAmount = mochaGood.colors.length;
    expect(colorElementsList).toHaveLength(colorsAmount);
  });
});
