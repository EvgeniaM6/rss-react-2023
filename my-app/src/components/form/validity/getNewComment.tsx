import { TCheckValidityRes, TCommentObj } from 'models';
import { RefObject } from 'react';

export function getNewComment(
  checkValidityRes: TCheckValidityRes,
  categorySelect: RefObject<HTMLSelectElement>,
  fileInput: RefObject<HTMLInputElement>
): TCommentObj {
  const { name, surname, birthday, sex, comment } = checkValidityRes;

  const selectedOptions = categorySelect.current?.selectedOptions;
  const categoriesArr = Array.from(selectedOptions || []).map((option) => option.value);
  const files = fileInput.current?.files;
  const filesArr = Array.from(files || []).map((file) => URL.createObjectURL(file));

  const currDate = new Date();

  const newComment: TCommentObj = {
    commentDate: `${currDate.toLocaleDateString()}-${currDate.toLocaleTimeString()}`,
    name: name,
    surname: surname,
    birthday: birthday,
    sex: sex,
    goodCategories: categoriesArr,
    commentText: comment,
    photos: filesArr,
    isAgree: true,
  };

  return newComment;
}
