export function checkCategoryValidity(selectElem: HTMLSelectElement | null): string[] {
  if (!selectElem) return [];
  const selectedOptions: HTMLCollectionOf<HTMLOptionElement> = selectElem.selectedOptions;
  const categoriesArr: string[] = Array.from(selectedOptions).map((option) => option.value);
  return categoriesArr;
}
