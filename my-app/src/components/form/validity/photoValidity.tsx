export function checkPhotoValidity(inputElem: HTMLInputElement | null): string[] {
  if (!inputElem) return [];
  const filesList: FileList | null = inputElem?.files;
  if (!filesList) return [];

  const filesArr: string[] = Array.from(filesList)
    .filter((file) => {
      const fileType: string = (file as File).type;
      return fileType === 'image/png' || fileType === 'image/jpeg';
    })
    .map((file) => {
      return URL.createObjectURL(file);
    });

  return filesArr;
}
