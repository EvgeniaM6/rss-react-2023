export function checkNameValidity(inputElem: HTMLInputElement | null): string {
  if (!inputElem) return '';
  const textValue: string = inputElem.value;
  const regex = new RegExp(/[A-ZА-Я][a-zа-я]+/);
  const text: string = textValue.match(regex) ? textValue : '';
  return text;
}
