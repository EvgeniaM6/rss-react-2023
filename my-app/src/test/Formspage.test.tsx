import React from 'react';
import { render, screen } from '@testing-library/react';
import { Formspage } from '../pages';
import * as Redux from 'react-redux';
import { renderToString } from 'react-dom/server';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

describe('Formspage', () => {
  const handleOpenPage = jest.fn((page: string) => {
    page.length;
  });

  const mockedState = {
    commentsArr: [],
  };

  const mockedDispatch = jest.spyOn(Redux, 'useDispatch');

  beforeEach(() => {
    const dispatch = jest.fn();
    mockedDispatch.mockReturnValue(dispatch);
    (Redux.useSelector as jest.Mock).mockImplementation((callback) => {
      return callback(mockedState);
    });

    jest.spyOn(Redux, 'useSelector').mockReturnValue({ commentsArr: [] });
    const ui = <Formspage handleOpenPage={handleOpenPage} />;
    const container = document.createElement('div');
    document.body.appendChild(container);
    container.innerHTML = renderToString(ui);
    render(ui, { hydrate: true, container });
  });

  it('should render input elements with text type', () => {
    screen.getAllByRole('textbox');
  });

  it('should render 1 textarea and 2 input elements with text type', () => {
    const textboxesList = screen.getAllByRole('textbox');
    expect(textboxesList.length).toBe(3);
  });

  it('should render input element with checkbox type', () => {
    screen.getByRole('checkbox');
  });

  it('should render input elements with radio type', () => {
    screen.getAllByRole('radio');
  });

  it('should render 2 input elements with radio type', () => {
    const radioList = screen.getAllByRole('radio');
    expect(radioList.length).toBe(2);
  });

  it('should render button', () => {
    screen.getByRole('button');
  });
});
