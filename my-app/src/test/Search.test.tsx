import React from 'react';
import { render, screen } from '@testing-library/react';
import { Search } from '../components/goods/Search';
import * as Redux from 'react-redux';
import { Provider } from 'react-redux';
import store from '../store';
import { renderToString } from 'react-dom/server';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useLayoutEffect: jest.requireActual('react').useEffect,
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
    const ui = (
      <Provider store={store}>
        <Search setPageNum={setPageNum} />
      </Provider>
    );
    const container = document.createElement('div');
    document.body.appendChild(container);
    container.innerHTML = renderToString(ui);
    render(ui, { hydrate: true, container });
  });

  it('should render input element', () => {
    screen.getByRole('textbox');
  });
});
