import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import { checkPhotoValidity } from '../components/form/validity/photoValidity';
import { renderToString } from 'react-dom/server';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

describe('checkPhotoValidity function', () => {
  it('with empty FileList should return true', () => {
    const ui = <input type="file" data-testid="file-input"></input>;
    const container = document.createElement('div');
    document.body.appendChild(container);
    container.innerHTML = renderToString(ui);
    render(ui, { hydrate: true, container });
    const filesList = (container.firstChild as HTMLInputElement).files as FileList;
    const checkingResult = checkPhotoValidity(filesList);
    expect(checkingResult).toBe(true);
  });

  it('with png file should return true', async () => {
    const ui = <input type="file" data-testid="file-input"></input>;
    const correctFile = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
    const container = document.createElement('div');
    document.body.appendChild(container);
    container.innerHTML = renderToString(ui);
    render(ui, { hydrate: true, container });
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
    const ui = <input type="file" data-testid="file-input"></input>;
    const incorrectFile = new File(['(⌐□_□)'], 'chucknorris.txt', { type: 'text/plain' });
    const container = document.createElement('div');
    document.body.appendChild(container);
    container.innerHTML = renderToString(ui);
    render(ui, { hydrate: true, container });
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
