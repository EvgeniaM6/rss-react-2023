import { RefObject } from 'react';

export function checkSexValidity(inputRefArr: RefObject<HTMLInputElement>[]): string {
  let sex = '';
  inputRefArr.forEach((inputRef) => {
    const inputElem = inputRef.current;
    if (inputElem?.checked) sex = inputElem?.value;
  });
  return sex;
}
