import { checkPhotoValidity } from '../components/form/validity/photoValidity';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('checkPhotoValidity', () => {
  it('should be defined', () => {
    expect(checkPhotoValidity).toBeDefined();
  });

  it('should be defined', () => {
    const result = checkPhotoValidity(null);
    expect(result.length).toBe(0);
  });

  it('should be defined', () => {
    render(<input type="file" data-testid="file-input"></input>);
    const inputElem = screen.getByTestId('file-input') as HTMLInputElement;
    const result = checkPhotoValidity(inputElem);
    expect(result.length).toBe(0);
  });
});
