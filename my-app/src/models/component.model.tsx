import { TCommentObj } from 'models';

export type TProps = TPropsObj | Readonly<TPropsObj>;

export type TPropsObj = {
  [key: string]: string;
};

export type TPropsHandle = {
  [key: string]: (page: string) => void;
};

export type TPropsComment = {
  onClose: () => void;
  form: TCommentObj;
};

export type TPropsInput = {
  nameInput: React.RefObject<HTMLInputElement>;
};
