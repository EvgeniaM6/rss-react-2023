export function checkPhotoValidity(filesList: FileList): boolean {
  const filesArr: boolean = Array.from(filesList).every((file) => {
    const fileType: string = (file as File).type;
    return fileType === 'image/png' || fileType === 'image/jpeg';
  });

  return filesArr;
}
