export type TStateForm = {
  isNameValid: boolean;
  isSurnameValid: boolean;
  isSexSelected: boolean;
  isAgree: boolean;
  isCommentValid: boolean;
  isCategorySelected: boolean;
  commentsArr: Array<TCommentObj>;
};

export type TCommentObj = {
  commentDate: string;
  name: string;
  surname: string;
  birthday?: string;
  sex: string;
  goodCategories: string[];
  commentText: string;
  photos: string[];
  isAgree: boolean;
};

export type TCheckValidityRes = {
  name: string;
  surname: string;
  comment: string;
};
