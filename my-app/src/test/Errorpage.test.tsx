import React from 'react';
import { render, screen } from '@testing-library/react';
import { Errorpage } from '../pages/Errorpage';

describe('Errorpage component', () => {
  it('should be created', () => {
    expect(Errorpage).toBeDefined();
  });

  function handleOpenPage(page: string): void {
    console.log(page);
  }

  beforeEach(() => {
    render(<Errorpage handleOpenPage={handleOpenPage} />);
  });

  it('should consist error text', () => {
    screen.getByText('Error 404');
  });
});
