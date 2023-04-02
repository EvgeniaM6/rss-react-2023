import React from 'react';
import { render, screen } from '@testing-library/react';
import { Aboutpage } from '../pages/Aboutpage';

describe('Aboutpage component', () => {
  it('should be created', () => {
    expect(Aboutpage).toBeDefined();
  });

  function handleOpenPage(page: string): void {
    console.log(page);
  }

  beforeEach(() => {
    render(<Aboutpage handleOpenPage={handleOpenPage} />);
  });

  it('should consist description title', () => {
    screen.getByText('A few words about us');
  });
});
