import { TValidateObj } from 'models';

export const birthdayValidity: TValidateObj = {
  checking: checkBirthdayValidity,
  message: 'You must be over 18 years of age',
};

function checkBirthdayValidity(birthdayValue: string): boolean {
  const [year, month, date] = birthdayValue.split('-');
  const birthdayDate: Date = new Date(+year, +month - 1, +date);
  const currDate: Date = new Date();
  const majorityDate: Date = new Date(
    currDate.getFullYear() - 18,
    currDate.getMonth(),
    currDate.getDate() + 1
  );
  const birthday: boolean = majorityDate.getTime() > birthdayDate.getTime();
  return birthday;
}
