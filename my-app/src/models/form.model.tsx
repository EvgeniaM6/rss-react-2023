import { ComponentPropsWithoutRef } from 'react';

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

export type TCheckValidityRes = {
  name: string;
  surname: string;
  birthday: string;
  sex: string;
  goodCategories: string[];
  commentText: string;
  photosArr: string[];
  isAgree: boolean;
};

export interface ICommentObj extends TCheckValidityRes {
  commentDate: string;
}

export type TTextInputProps = {
  id: string;
  placeholder?: string;
  isValueCorrect: boolean;
};

export type TRadioInputProps = {
  id: string;
  name: string;
};

export type TSelectProps = ComponentPropsWithoutRef<'select'> & {
  id: string;
  isMultiple?: boolean;
  isValueCorrect: boolean;
  paragraph: string;
};

export type TTextareaProps = ComponentPropsWithoutRef<'label'> & {
  id: string;
  isMultiple?: boolean;
  isValueCorrect: boolean;
};

export type TFileInputProps = ComponentPropsWithoutRef<'label'> & {
  id: string;
  isMultiple?: boolean;
  isValueCorrect: boolean;
};

export type TCheckboxInputProps = ComponentPropsWithoutRef<'label'> & {
  id: string;
  isValueCorrect: boolean;
};

export type TFormProps = {
  onOpen: () => void;
  addComment: (newComment: ICommentObj) => void;
};

export type TFormPageProps = {
  handleOpenPage: (page: string) => void;
  addComment: (newComment: ICommentObj) => void;
  commentsArr: ICommentObj[];
};
