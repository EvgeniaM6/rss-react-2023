import { RefObject } from 'react';

export function checkPhotoValidity(inputRef: RefObject<HTMLInputElement>): boolean {
  const filesInput = inputRef.current;
  const areFilesSelected: boolean = Array.from(inputRef.current?.files || []).every((file) => {
    const fileType = (file as File).type;
    return fileType === 'image/png' || fileType === 'image/jpeg';
  });
  const areFilesCorrect = !!filesInput?.files?.length && areFilesSelected;
  return areFilesCorrect;
}
