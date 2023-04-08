import React from 'react';
import { render, screen } from '@testing-library/react';
import { Search } from '../components/goods/Search';

describe('Search', () => {
  const changeSearch = jest.fn();
  const searchValue = '';
  const setPageNum = jest.fn();

  beforeEach(() => {
    render(
      <Search changeSearch={changeSearch} searchValue={searchValue} setPageNum={setPageNum} />
    );
  });

  it('should render input element', () => {
    screen.getByRole('textbox');
  });
});
