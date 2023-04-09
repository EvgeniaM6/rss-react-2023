import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import { checkPhotoValidity } from '../components/form/validity/photoValidity';

describe('checkPhotoValidity function', () => {
  it('with empty FileList should return true', () => {
    const { container } = render(<input type="file" data-testid="file-input"></input>);
    const filesList = (container.firstChild as HTMLInputElement).files as FileList;
    const checkingResult = checkPhotoValidity(filesList);
    expect(checkingResult).toBe(true);
  });

  it('with png file should return true', async () => {
    const correctFile = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
    const { container } = render(<input type="file" data-testid="file-input"></input>);
    const inputElem = container.firstChild as HTMLInputElement;
    await waitFor(() =>
      fireEvent.change(inputElem, {
        target: { files: [correctFile] },
      })
    );
    const filesList = (container.firstChild as HTMLInputElement).files as FileList;
    const checkingResult = checkPhotoValidity(filesList);
    expect(checkingResult).toBe(true);
  });

  it('with not png or jpeg file should return false', async () => {
    const incorrectFile = new File(['(⌐□_□)'], 'chucknorris.txt', { type: 'text/plain' });
    const { container } = render(<input type="file" data-testid="file-input"></input>);
    const inputElem = container.firstChild as HTMLInputElement;
    await waitFor(() =>
      fireEvent.change(inputElem, {
        target: { files: [incorrectFile] },
      })
    );
    const filesList = (container.firstChild as HTMLInputElement).files as FileList;
    const checkingResult = checkPhotoValidity(filesList);
    expect(checkingResult).toBe(false);
  });
});
