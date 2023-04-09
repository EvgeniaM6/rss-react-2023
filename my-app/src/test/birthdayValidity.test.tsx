import { birthdayValidity } from '../components/form/validity/birthdayValidity';

const { checking } = birthdayValidity;

describe('checkBirthdayValidity function', () => {
  it('with birthday less than 18 years old should return false', () => {
    const checkingResult = checking('2022-01-01');
    expect(checkingResult).toBe(false);
  });

  it('with birthday more than 18 years old should return true', () => {
    const checkingResult = checking('2000-01-01');
    expect(checkingResult).toBe(true);
  });
});
