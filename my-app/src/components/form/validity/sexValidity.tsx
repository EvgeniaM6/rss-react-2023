export function checkSexValidity(inputElemsArr: Array<HTMLInputElement | null>): string {
  let sex = '';
  inputElemsArr.forEach((inputElem) => {
    if (inputElem?.checked) sex = inputElem?.value;
  });
  return sex;
}
