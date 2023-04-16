import React from 'react';
import { render, screen } from '@testing-library/react';
import { Search } from '../components/goods/Search';
import * as Redux from 'react-redux';
import { Provider } from 'react-redux';
import store from '../store';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('Search', () => {
  const setPageNum = jest.fn();
  const searchSelector = { submittedSearch: '', changedSearch: '' };

  const mockedState = searchSelector;

  beforeEach(() => {
    (Redux.useSelector as jest.Mock).mockImplementation((callback) => {
      return callback(mockedState);
    });

    jest.spyOn(Redux, 'useSelector').mockReturnValue(searchSelector);
    render(
      <Provider store={store}>
        <Search setPageNum={setPageNum} />
      </Provider>
    );
  });

  it('should render input element', () => {
    screen.getByRole('textbox');
  });
});
