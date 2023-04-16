import { App } from '../components/app/App';
import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
// import { renderWithProviders } from '../utils';

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
    await act(() =>
      render(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      )
    );
  });

  it('should consist header', async () => {
    await waitFor(() => screen.getByTestId('header'));
  });

  it('should consist footer', async () => {
    await waitFor(() => screen.getByTestId('footer'));
  });
});
