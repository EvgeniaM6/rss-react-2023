import { App } from '../components/app/App';
import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import { renderToString } from 'react-dom/server';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
  })
) as jest.Mock;

describe('App component', () => {
  it('should be created', () => {
    expect(App).toBeDefined();
  });

  beforeEach(async () => {
    await act(() => {
      const ui = (
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      );
      const container = document.createElement('div');
      document.body.appendChild(container);
      container.innerHTML = renderToString(ui);
      render(ui, { hydrate: true, container });
    });
  });

  it('should consist header', async () => {
    await waitFor(() => screen.getByTestId('header'));
  });

  it('should consist footer', async () => {
    await waitFor(() => screen.getByTestId('footer'));
  });
});
