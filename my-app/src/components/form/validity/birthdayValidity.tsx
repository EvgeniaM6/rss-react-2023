export function checkBirthdayValidity(inputElem: HTMLInputElement | null): string {
  const birthdayValue: string = inputElem?.value || '';
  const [year, month, date] = birthdayValue.split('-');
  const birthdayDate: Date = new Date(+year, +month - 1, +date);
  const currDate: Date = new Date();
  const majorityDate: Date = new Date(
    currDate.getFullYear() - 18,
    currDate.getMonth(),
    currDate.getDate() + 1
  );
  const birthday: string = majorityDate.getTime() > birthdayDate.getTime() ? birthdayValue : '';
  return birthday;
}
