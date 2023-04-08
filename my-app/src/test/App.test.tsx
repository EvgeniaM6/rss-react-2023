import { App } from '../components/app/App';
import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

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
    await act(
      async () =>
        await render(
          <BrowserRouter>
            <App />
          </BrowserRouter>
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
