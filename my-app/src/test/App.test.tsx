import { App } from '../components/app/App';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('App component', () => {
  it('should be created', () => {
    expect(App).toBeDefined();
  });

  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  it('should consist header', () => {
    screen.getByTestId('header');
  });

  it('should consist footer', () => {
    screen.getByTestId('footer');
  });
});
