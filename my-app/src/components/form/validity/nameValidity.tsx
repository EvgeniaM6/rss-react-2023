import { RefObject } from 'react';

export function checkNameValidity(inputRef: RefObject<HTMLInputElement>): string {
  const textValue = inputRef.current?.value || '';
  const regex = new RegExp(/[A-ZА-Я][a-zа-я]+/);
  const isTextValid = textValue.match(regex) || '';
  const text = isTextValid && textValue;
  return text;
}
