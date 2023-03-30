import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Formspage } from '../pages';

describe('Formspage', () => {
  function handleOpenPage(page: string): void {
    console.log(page);
  }

  beforeEach(() => {
    render(<Formspage handleOpenPage={handleOpenPage} />);
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

  it('should render alert when button clicked and name input is empty', () => {
    const submitBtn = screen.getByRole('button');
    fireEvent.click(submitBtn);
    screen.getByText('The first letter of the name must be capitalized');
  });
});
