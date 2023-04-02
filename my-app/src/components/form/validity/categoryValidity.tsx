export function checkCategoryValidity(selectElem: HTMLSelectElement | null): string[] {
  const selectedOptions = selectElem?.selectedOptions;
  const categoriesArr = Array.from(selectedOptions || []).map((option) => option.value);
  return categoriesArr;
}
