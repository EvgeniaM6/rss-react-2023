import React from 'react';
import { render, screen } from '@testing-library/react';
import { Aboutpage } from '../pages/Aboutpage';
import { renderToString } from 'react-dom/server';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

describe('Aboutpage component', () => {
  it('should be created', () => {
    expect(Aboutpage).toBeDefined();
  });

  const handleOpenPage = jest.fn((page: string) => {
    page.length;
  });

  beforeEach(() => {
    const ui = <Aboutpage handleOpenPage={handleOpenPage} />;
    const container = document.createElement('div');
    document.body.appendChild(container);
    container.innerHTML = renderToString(ui);
    render(ui, { hydrate: true, container });
  });

  it('should consist description title', () => {
    screen.getByText('A few words about us');
  });
});
