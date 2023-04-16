import { ComponentPropsWithoutRef } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

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

export interface FormValues extends FieldValues {
  name: string;
  surname: string;
  birthday: string;
  sex: string;
  category: string[];
  commentText: string;
  photos: FileList;
  agree: boolean;
}

export type TTextInputProps = {
  id: string;
  placeholder: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
};

export type TDateInputProps = {
  id: string;
  validate: TValidateObj;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
};

export type TValidateObj = {
  checking: (birthdayValue: string) => boolean;
  message: string;
};

export type TRadioInputProps = {
  id: string;
  nameField: string;
  register: UseFormRegister<FormValues>;
};

export type TSelectProps = ComponentPropsWithoutRef<'select'> & {
  id: string;
  isMultiple?: boolean;
  paragraph: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
};

export type TTextareaProps = ComponentPropsWithoutRef<'label'> & {
  id: string;
  clasNaming: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
};

export type TFileInputProps = ComponentPropsWithoutRef<'label'> & {
  id: string;
  isMultiple?: boolean;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
};

export type TCheckboxInputProps = ComponentPropsWithoutRef<'label'> & {
  id: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
};

export type TFormProps = {
  onOpen: () => void;
};

export type TFormPageProps = {
  handleOpenPage: (page: string) => void;
};

export type TFormCommentsState = {
  commentsArr: ICommentObj[];
};
