import React, { FormEvent, useEffect, useState } from 'react';
import { TCheckValidityRes, TCommentObj, TPropsHandle } from '../models';
import { CATEGORIES_TITLES_ARR, COMMENT_TEXT_LENGTH } from '../constants';
import { Comment } from '../components/form/Comment';
import { Confirm } from '../components/form/Confirm';
import { PAGES } from '../constants/pages';

export function Formspage(props: TPropsHandle) {
  const formComment: React.RefObject<HTMLFormElement> = React.createRef();
  const nameInput: React.RefObject<HTMLInputElement> = React.createRef();
  const surnameInput: React.RefObject<HTMLInputElement> = React.createRef();
  const birthdayInput: React.RefObject<HTMLInputElement> = React.createRef();
  const agreeInput: React.RefObject<HTMLInputElement> = React.createRef();
  const radioMaleInput: React.RefObject<HTMLInputElement> = React.createRef();
  const radioFemaleInput: React.RefObject<HTMLInputElement> = React.createRef();
  const categorySelect: React.RefObject<HTMLSelectElement> = React.createRef();
  const commentInput: React.RefObject<HTMLTextAreaElement> = React.createRef();
  const fileInput: React.RefObject<HTMLInputElement> = React.createRef();

  const [shouldShowConfirm, setShouldShowConfirm] = useState(false);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isSurnameValid, setIsSurnameValid] = useState(true);
  const [isBirthdayValid, setIsBirthdayValid] = useState(true);
  const [isSexSelected, setIsSexSelected] = useState(true);
  const [isCategorySelected, setIsCategorySelected] = useState(true);
  const [isCommentValid, setIsCommentValid] = useState(true);
  const [isFilesSelected, setIsFilesSelected] = useState(true);
  const [isAgree, setIsAgree] = useState(true);

  function handleSubmit(event: FormEvent): void {
    event.preventDefault();

    checkFormValidity().then((checkValidityRes) => {
      if (!checkValidityRes) return;

      if (
        !isNameValid ||
        !isSurnameValid ||
        !isSexSelected ||
        !isBirthdayValid ||
        !isCategorySelected ||
        !isCommentValid ||
        !isFilesSelected ||
        !isAgree
      ) {
        return;
      }

      saveComment(checkValidityRes);

      const formElem = formComment.current;
      if (!formElem) return;
      setShouldShowConfirm(true);
      formElem.reset();
    });
  }

  function saveComment(checkValidityRes: TCheckValidityRes): void {
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

    commentsArr.push(newComment);
  }

  async function checkFormValidity(): Promise<TCheckValidityRes | null> {
    const name = nameInput.current?.value || '';
    const isNameValid = name.match(new RegExp(/[A-ZА-Я][a-zа-я]+/));
    setIsNameValid(!!name && !!isNameValid);

    const surname = surnameInput.current?.value || '';
    const isSurnameValid = surname.match(new RegExp(/[A-ZА-Я][a-zа-я]+/));
    setIsSurnameValid(!!surname && !!isSurnameValid);

    const birthday = birthdayInput.current?.value || '';
    const [year, month, date] = birthday.split('-');
    const birthdayDate = new Date(+year, +month - 1, +date);
    const currDate = new Date();
    const majorityDate = new Date(
      currDate.getFullYear() - 18,
      currDate.getMonth(),
      currDate.getDate() + 1
    );
    const isBirthdayValid = majorityDate.getTime() > birthdayDate.getTime();
    setIsBirthdayValid(!!birthday && !!isBirthdayValid);

    const maleSexInput = radioMaleInput.current;
    const femaleSexInput = radioFemaleInput.current;
    if (!maleSexInput || !femaleSexInput) return null;
    setIsSexSelected(!!maleSexInput.checked || !!femaleSexInput.checked);
    const sex = maleSexInput.checked ? maleSexInput.value : femaleSexInput.value;

    const agreeInputEl = agreeInput.current;
    if (!agreeInputEl) return null;
    setIsAgree(agreeInputEl.checked || false);

    const commentInputEl = commentInput.current;
    const comment = commentInputEl?.value || '';
    const commentLength = comment.length;
    setIsCommentValid(commentLength >= COMMENT_TEXT_LENGTH);

    const filesInput = fileInput.current;
    if (!filesInput) return null;
    const areFilesSelected = Array.from(filesInput.files || []).every((file) => {
      const fileType = (file as File).type;
      return fileType === 'image/png' || fileType === 'image/jpeg';
    });
    setIsFilesSelected(!!filesInput.files?.length && areFilesSelected);

    const isCategorySelected = !!categorySelect.current?.selectedOptions.length || false;
    setIsCategorySelected(isCategorySelected);

    return { name, surname, comment, birthday, sex };
  }

  function onClose(): void {
    setShouldShowConfirm(false);
  }

  useEffect(() => {
    const showPageName = (page: string) => props.handleOpenPage(page);
    showPageName(PAGES.forms);
  }, [props]);

  return (
    <div className="container forms-page">
      <h3 className="forms-page__title">
        Leave us a comment about your latest purchase from our store
      </h3>
      <form className="form" onSubmit={handleSubmit} ref={formComment}>
        <div className="form__full-name">
          <fieldset className="form__field name">
            <label htmlFor="user-name" className="name__label">
              <span className="form__alert">*</span>
              Name:
            </label>
            <input
              type="text"
              id="user-name"
              placeholder="Mikle"
              className="name__input"
              ref={nameInput}
            />
            {!isNameValid && (
              <div className="form__alert">The first letter of the name must be capitalized</div>
            )}
          </fieldset>
          <fieldset className="form__field surname">
            <label htmlFor="user-surname" className="surname__label">
              <span className="form__alert">*</span>
              Surname:
            </label>
            <input
              type="text"
              id="user-surname"
              className="surname__input"
              placeholder="Brown"
              ref={surnameInput}
            />
            {!isSurnameValid && (
              <div className="form__alert">The first letter of the surname must be capitalized</div>
            )}
          </fieldset>
        </div>
        <div className="form__person-details">
          <fieldset className="form__field birthday">
            <label htmlFor="birthday" className="birthday__label">
              <span className="form__alert">*</span>
              Birthday:
            </label>
            <input
              type="date"
              className="birthday__input"
              name="birthday"
              id="birthday"
              ref={birthdayInput}
            />
            {!isBirthdayValid && (
              <div className="form__alert">You must be over 18 years of age.</div>
            )}
          </fieldset>
          <fieldset className="form__field sex">
            <p className="sex__title">
              <span className="form__alert">*</span>
              Sex:
            </p>
            <div className="sex__content">
              <input
                type="radio"
                name="sex"
                id="male"
                className="sex__input"
                value="male"
                ref={radioMaleInput}
              />
              <label htmlFor="male" className="sex__label">
                male
              </label>
              <input
                type="radio"
                name="sex"
                id="female"
                className="sex__input"
                value="female"
                ref={radioFemaleInput}
              />
              <label htmlFor="female" className="sex__label">
                female
              </label>
            </div>
            {!isSexSelected && <div className="form__alert">Choose sex</div>}
          </fieldset>
        </div>
        <fieldset className="form__field category">
          <p>
            <span className="form__alert">*</span>
            Select the category/s of the item(s) you purchased
          </p>
          <select name="dd" id="dd" multiple className="category__select" ref={categorySelect}>
            {CATEGORIES_TITLES_ARR.map((category) => (
              <option key={category} value={category} className="category__option">
                {category}
              </option>
            ))}
          </select>
          {!isCategorySelected && <div className="form__alert">Choose at least 1 category</div>}
        </fieldset>
        <fieldset className="form__field comment-text">
          <label htmlFor="comment" className="comment-text__label">
            <span className="form__alert">*</span>
            Your comment (at least 10 symbols):
          </label>
          <textarea
            name="comment"
            id="comment"
            className="comment-text__textarea"
            ref={commentInput}
          ></textarea>
          {!isCommentValid && (
            <div className="form__alert">Comment length must be at least 10 characters</div>
          )}
        </fieldset>
        <fieldset className="form__field photos">
          <label htmlFor="photos" className="photos__label">
            <span className="form__alert">*</span>
            Show photos of our product that you bought
          </label>
          <input
            type="file"
            className="photos__input"
            multiple
            name="photos"
            id="photos"
            ref={fileInput}
          />
          {!isFilesSelected && <div className="form__alert">Choose at least 1 photo</div>}
        </fieldset>
        <fieldset className="form__field agree">
          <div className="form__agree-block">
            <input
              type="checkbox"
              name="agree-data"
              id="agree-data"
              className="agree__input"
              ref={agreeInput}
            />
            <label htmlFor="agree-data" className="agree__label">
              <span className="form__alert">*</span>I consent to my personal data
            </label>
          </div>
          {!isAgree && (
            <div className="form__alert">We cannot accept data without your consent</div>
          )}
        </fieldset>
        <div className="form__required">
          Required fields are marked with
          <span className="form__alert"> *</span>
        </div>
        <button type="submit" className="form__submit">
          Submit
        </button>
      </form>
      <div className="forms-page__comments">
        <h3 className="forms-page__title">Comments</h3>
        {commentsArr.map((commentObj) => {
          return <Comment key={commentObj.commentDate} commentObj={commentObj} />;
        })}
      </div>
      {shouldShowConfirm && (
        <Confirm onClose={onClose} form={commentsArr[commentsArr.length - 1]} />
      )}
    </div>
  );
}

const commentsArr: TCommentObj[] = [];
