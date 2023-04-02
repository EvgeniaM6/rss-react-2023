export function checkSexValidity(inputElemsArr: Array<HTMLInputElement | null>): string {
  const sex = inputElemsArr.reduce((acc, inputElem) => {
    if (inputElem?.checked) acc = inputElem?.value;
    return acc;
  }, '');
  return sex;
}
