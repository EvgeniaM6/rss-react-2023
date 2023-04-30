import React from 'react';
import { render, screen } from '@testing-library/react';
import { Errorpage } from '../pages/Errorpage';
import { renderToString } from 'react-dom/server';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

describe('Errorpage component', () => {
  it('should be created', () => {
    expect(Errorpage).toBeDefined();
  });

  const handleOpenPage = jest.fn((page: string) => {
    page.length;
  });

  beforeEach(() => {
    const ui = <Errorpage handleOpenPage={handleOpenPage} />;
    const container = document.createElement('div');
    document.body.appendChild(container);
    container.innerHTML = renderToString(ui);
    render(ui, { hydrate: true, container });
  });

  it('should consist error text', () => {
    screen.getByText('Error 404');
  });
});
