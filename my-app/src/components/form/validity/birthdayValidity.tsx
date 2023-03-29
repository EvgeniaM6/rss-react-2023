import { RefObject } from 'react';

export function checkBirthdayValidity(inputRef: RefObject<HTMLInputElement>): string {
  const birthdayValue = inputRef.current?.value || '';
  const [year, month, date] = birthdayValue.split('-');
  const birthdayDate = new Date(+year, +month - 1, +date);
  const currDate = new Date();
  const majorityDate = new Date(
    currDate.getFullYear() - 18,
    currDate.getMonth(),
    currDate.getDate() + 1
  );
  const isBirthdayValid = majorityDate.getTime() > birthdayDate.getTime() || '';
  const birthday = isBirthdayValid && birthdayValue;
  return birthday;
}
