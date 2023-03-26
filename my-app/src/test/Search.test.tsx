import React from 'react';
import { render, screen } from '@testing-library/react';
import { Search } from '../components/goods/Search';

describe('Search', () => {
  beforeEach(() => {
    render(<Search />);
  });

  it('should render input element', () => {
    screen.getByRole('textbox');
  });
});
