import React from 'react';
import { render, screen } from '@testing-library/react';
import { Aboutpage } from '../pages/Aboutpage';

describe('Aboutpage component', () => {
  it('should be created', () => {
    expect(Aboutpage).toBeDefined();
  });

  const handleOpenPage = jest.fn((page: string) => {
    page.length;
  });

  beforeEach(() => {
    render(<Aboutpage handleOpenPage={handleOpenPage} />);
  });

  it('should consist description title', () => {
    screen.getByText('A few words about us');
  });
});
