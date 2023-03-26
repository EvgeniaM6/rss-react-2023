export type TStateForm = {
  shouldShowConfirm: boolean;
  isNameValid: boolean;
  isSurnameValid: boolean;
  isBirthdayValid: boolean;
  isSexSelected: boolean;
  isAgree: boolean;
  isCommentValid: boolean;
  isFilesSelected: boolean;
  isCategorySelected: boolean;
};

export type TCommentObj = {
  commentDate: string;
  name: string;
  surname: string;
  birthday: string;
  sex: string;
  goodCategories: string[];
  commentText: string;
  photos: string[];
  isAgree: boolean;
};

export type TCheckValidityRes = {
  name: string;
  surname: string;
  birthday: string;
  sex: string;
  comment: string;
};
