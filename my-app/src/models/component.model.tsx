export type TProps = TPropsObj | Readonly<TPropsObj>;

export type TPropsObj = {
  [key: string]: string;
};

export type TPropsHandle = {
  [key: string]: () => void;
};

export type TPropsInput = {
  nameInput: React.RefObject<HTMLInputElement>;
};

export type TStateForm = {
  isFormValid: boolean;
  commentsArr: Array<TCommentObj>;
};

export type TCommentObj = {
  name: string;
  surname: string;
  birthday?: string;
  sex: string;
  goodCategories: string[];
  commentText: string;
  photos: string[];
  isAgree: boolean;
};
