export function checkPhotoValidity(inputElem: HTMLInputElement | null): string[] {
  if (!inputElem) return [];
  const filesList = inputElem?.files;
  if (!filesList) return [];

  const filesArr = Array.from(filesList)
    .filter((file) => {
      const fileType = (file as File).type;
      return fileType === 'image/png' || fileType === 'image/jpeg';
    })
    .map((file) => {
      return URL.createObjectURL(file);
    });

  return filesArr;
}
