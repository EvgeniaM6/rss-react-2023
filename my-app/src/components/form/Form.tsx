import React, { FormEvent, useRef, useState, RefObject } from 'react';
import { TCheckValidityRes, TFormProps } from '../../models';
import { CATEGORIES_TITLES_ARR } from '../../constants';
import {
  TextInput,
  DateInput,
  RadioInput,
  SelectElem,
  TextareaElem,
  FileInput,
  CheckboxInput,
} from './inputs';
import {
  checkBirthdayValidity,
  checkSexValidity,
  checkNameValidity,
  checkCommentValidity,
  checkPhotoValidity,
  checkCategoryValidity,
} from './validity';

export function Form(props: TFormProps) {
  const formComment: RefObject<HTMLFormElement> = useRef(null);
  const nameInput: RefObject<HTMLInputElement> = useRef(null);
  const surnameInput: RefObject<HTMLInputElement> = useRef(null);
  const birthdayInput: RefObject<HTMLInputElement> = useRef(null);
  const agreeInput: RefObject<HTMLInputElement> = useRef(null);
  const radioMaleInput: RefObject<HTMLInputElement> = useRef(null);
  const radioFemaleInput: RefObject<HTMLInputElement> = useRef(null);
  const categorySelect: RefObject<HTMLSelectElement> = useRef(null);
  const commentInput: RefObject<HTMLTextAreaElement> = useRef(null);
  const fileInput: RefObject<HTMLInputElement> = useRef(null);

  const [isNameCorrect, setIsNameCorrect] = useState(true);
  const [isSurnameCorrect, setIsSurnameCorrect] = useState(true);
  const [isBirthdayCorrect, setIsBirthdayCorrect] = useState(true);
  const [isSexSelected, setIsSexSelected] = useState(true);
  const [isCategorySelected, setIsCategorySelected] = useState(true);
  const [isCommentCorrect, setIsCommentCorrect] = useState(true);
  const [isFilesSelected, setIsFilesSelected] = useState(true);
  const [isAgree, setIsAgree] = useState(true);

  function handleSubmit(event: FormEvent): void {
    event.preventDefault();

    const checkValidityRes: TCheckValidityRes = checkFormValidity();
    if (!checkValidityRes) return;

    const { name, surname, birthday, sex, goodCategories, commentText, photosArr, isAgree } =
      checkValidityRes;

    const isFormInorrect =
      !name ||
      !surname ||
      !birthday ||
      !sex ||
      !goodCategories.length ||
      !commentText ||
      !photosArr.length ||
      !isAgree;
    if (isFormInorrect) return;

    const currDate = new Date();
    const commentDate = `${currDate.toLocaleDateString()}-${currDate.toLocaleTimeString()}`;
    const newComment = { ...checkValidityRes, commentDate };

    props.addComment(newComment);
    props.onOpen();
    formComment.current?.reset();
  }

  function checkFormValidity(): TCheckValidityRes {
    const name = checkNameValidity(nameInput.current);
    const surname = checkNameValidity(surnameInput.current);
    const birthday = checkBirthdayValidity(birthdayInput.current);
    const sex = checkSexValidity([radioMaleInput.current, radioFemaleInput.current]);
    const goodCategories = checkCategoryValidity(categorySelect.current);
    const commentText = checkCommentValidity(commentInput.current);
    const photosArr = checkPhotoValidity(fileInput.current);
    const isAgree = !!agreeInput.current?.checked;

    setIsNameCorrect(!!name);
    setIsSurnameCorrect(!!surname);
    setIsBirthdayCorrect(!!birthday);
    setIsSexSelected(!!sex);
    setIsCategorySelected(!!goodCategories.length);
    setIsCommentCorrect(!!commentText);
    setIsFilesSelected(!!photosArr.length);
    setIsAgree(isAgree);

    return {
      name,
      surname,
      birthday,
      sex,
      goodCategories,
      commentText,
      photosArr,
      isAgree,
    };
  }

  return (
    <form className="form" onSubmit={handleSubmit} ref={formComment}>
      <div className="form__full-name">
        <TextInput id="Name" placeholder="Mikle" ref={nameInput} isValueCorrect={isNameCorrect} />
        <TextInput
          id="Surname"
          placeholder="Brown"
          ref={surnameInput}
          isValueCorrect={isSurnameCorrect}
        />
      </div>
      <div className="form__person-details">
        <DateInput id="Birthday" ref={birthdayInput} isValueCorrect={isBirthdayCorrect} />
        <fieldset className="form__field sex">
          <p className="sex__title">
            <span className="form__alert">*</span>
            Sex:
          </p>
          <div className="sex__content">
            <RadioInput name="sex" id="male" ref={radioMaleInput} />
            <RadioInput name="sex" id="female" ref={radioFemaleInput} />
          </div>
          {!isSexSelected && <div className="form__alert">Choose sex</div>}
        </fieldset>
      </div>
      <SelectElem
        id="category"
        paragraph="Select the category/s of the item(s) you purchased"
        isMultiple={true}
        isValueCorrect={isCategorySelected}
        ref={categorySelect}
      >
        {CATEGORIES_TITLES_ARR.map((category) => (
          <option key={category} value={category} className="category__option">
            {category}
          </option>
        ))}
      </SelectElem>
      <TextareaElem id="comment-text" isValueCorrect={isCommentCorrect} ref={commentInput}>
        Your comment (at least 10 symbols):
      </TextareaElem>
      <FileInput id="photos" isMultiple={true} isValueCorrect={isFilesSelected} ref={fileInput}>
        Show photos of our product that you bought
      </FileInput>
      <CheckboxInput id="agree" isValueCorrect={isAgree} ref={agreeInput}>
        I consent to my personal data
      </CheckboxInput>
      <div className="form__required">
        Required fields are marked with
        <span className="form__alert"> *</span>
      </div>
      <button type="submit" className="form__submit">
        Submit
      </button>
    </form>
  );
}
