export function checkNameValidity(inputElem: HTMLInputElement | null): string {
  const textValue = inputElem?.value || '';
  const regex = new RegExp(/[A-ZА-Я][a-zа-я]+/);
  const isTextValid = textValue.match(regex) || '';
  const text = isTextValid && textValue;
  return text;
}
