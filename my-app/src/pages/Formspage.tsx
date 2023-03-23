import React, { Component, FormEvent } from 'react';
import { TCheckValidityRes, TCommentObj, TPropsHandle, TStateForm } from 'models';
import { CATEGORIES_TITLES_ARR, COMMENT_TEXT_LENGTH } from '../constants';
import { Comment } from '../components/Comment';

export class Formspage extends Component<TPropsHandle, TStateForm> {
  private formComment: React.RefObject<HTMLFormElement> = React.createRef();
  private nameInput: React.RefObject<HTMLInputElement> = React.createRef();
  private surnameInput: React.RefObject<HTMLInputElement> = React.createRef();
  private birthdayInput: React.RefObject<HTMLInputElement> = React.createRef();
  private agreeInput: React.RefObject<HTMLInputElement> = React.createRef();
  private radioMaleInput: React.RefObject<HTMLInputElement> = React.createRef();
  private radioFemaleInput: React.RefObject<HTMLInputElement> = React.createRef();
  private categorySelect: React.RefObject<HTMLSelectElement> = React.createRef();
  private commentInput: React.RefObject<HTMLTextAreaElement> = React.createRef();
  private fileInput: React.RefObject<HTMLInputElement> = React.createRef();

  constructor(props: TPropsHandle) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      shouldShowConfirm: false,
      isNameValid: true,
      isSurnameValid: true,
      isSexSelected: true,
      isAgree: true,
      isCommentValid: true,
      isCategorySelected: true,
      commentsArr: [],
    };
  }

  handleSubmit(event: FormEvent): void {
    event.preventDefault();

    this.checkFormValidity().then((checkValidityRes) => {
      const {
        isNameValid,
        isSurnameValid,
        isSexSelected,
        isAgree,
        isCommentValid,
        isCategorySelected,
      } = this.state;

      if (
        !isNameValid ||
        !isSurnameValid ||
        !isSexSelected ||
        !isAgree ||
        !isCommentValid ||
        !isCategorySelected
      ) {
        return;
      }

      this.saveComment(checkValidityRes).then(() => {
        const formElem = this.formComment.current;
        if (!formElem) return;
        this.setState({ shouldShowConfirm: true });
        formElem.reset();
      });
    });
  }

  async saveComment(checkValidityRes: TCheckValidityRes): Promise<void> {
    const { name, surname, comment } = checkValidityRes;

    const userSex = this.radioMaleInput.current?.checked
      ? this.radioMaleInput.current.value
      : this.radioFemaleInput.current?.value;
    const categoriesArr = Array.from(this.categorySelect.current?.selectedOptions || []).map(
      (option) => option.value
    );
    const filesArr = Array.from(this.fileInput.current?.files || []).map((file) =>
      URL.createObjectURL(file)
    );

    const currDate = new Date();

    const newComment: TCommentObj = {
      commentDate: `${currDate.toLocaleDateString()}-${currDate.toLocaleTimeString()}`,
      name: name,
      surname: surname,
      birthday: this.birthdayInput.current?.value || '',
      sex: userSex || 'male',
      goodCategories: categoriesArr,
      commentText: comment,
      photos: filesArr,
      isAgree: true,
    };

    this.setState((state) => {
      return { commentsArr: [...state.commentsArr, newComment] };
    });
  }

  async checkFormValidity(): Promise<TCheckValidityRes> {
    const name = this.nameInput.current?.value || '';
    const isNameValid = name.match(new RegExp(/[A-ZА-Я][a-zа-я]+/));
    this.setState({ isNameValid: !!name && !!isNameValid });

    const surname = this.surnameInput.current?.value || '';
    const isSurnameValid = surname.match(new RegExp(/[A-ZА-Я][a-zа-я]+/));
    this.setState({ isSurnameValid: !!surname || !!isSurnameValid });

    const maleSex = this.radioMaleInput.current?.checked;
    const femaleSex = this.radioFemaleInput.current?.checked;
    this.setState({ isSexSelected: !!maleSex || !!femaleSex });

    this.setState({ isAgree: this.agreeInput.current?.checked || false });

    const commentInputEl = this.commentInput.current;
    const comment = commentInputEl?.value || '';
    const commentLength = comment.length;
    this.setState({ isCommentValid: commentLength >= COMMENT_TEXT_LENGTH });

    const isCategorySelected = this.categorySelect.current?.selectedOptions.length !== 0 || false;
    this.setState({ isCategorySelected: isCategorySelected });

    return { name, surname, comment };
  }

  componentDidMount(): void {
    this.props.handleOpenPage();
  }

  render() {
    return (
      <div className="container forms-page">
        <h3 className="forms-page__title">
          Leave us a comment about your latest purchase from our store
        </h3>
        <form className="form" onSubmit={this.handleSubmit} ref={this.formComment}>
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
                ref={this.nameInput}
              />
              {!this.state.isNameValid && (
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
                ref={this.surnameInput}
              />
              {!this.state.isSurnameValid && (
                <div className="form__alert">
                  The first letter of the surname must be capitalized
                </div>
              )}
            </fieldset>
          </div>
          <div className="form__person-details">
            <fieldset className="form__field birthday">
              <label htmlFor="birthday" className="birthday__label">
                Birthday:
              </label>
              <input
                type="date"
                className="birthday__input"
                min="1900-01-01"
                max="2013-01-01"
                name="birthday"
                id="birthday"
                ref={this.birthdayInput}
              />
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
                  ref={this.radioMaleInput}
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
                  ref={this.radioFemaleInput}
                />
                <label htmlFor="female" className="sex__label">
                  female
                </label>
              </div>
              {!this.state.isSexSelected && <div className="form__alert">Choose sex</div>}
            </fieldset>
          </div>
          <fieldset className="form__field category">
            <p>
              <span className="form__alert">*</span>
              Select the category/s of the item(s) you purchased
            </p>
            <select
              name="dd"
              id="dd"
              multiple
              className="category__select"
              ref={this.categorySelect}
            >
              {CATEGORIES_TITLES_ARR.map((category) => (
                <option key={category} value={category} className="category__option">
                  {category}
                </option>
              ))}
            </select>
            {!this.state.isCategorySelected && (
              <div className="form__alert">Choose at least 1 category</div>
            )}
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
              ref={this.commentInput}
            ></textarea>
            {!this.state.isCommentValid && (
              <div className="form__alert">Comment length must be at least 10 characters</div>
            )}
          </fieldset>
          <fieldset className="form__field photos">
            <label htmlFor="photos" className="photos__label">
              Show photos of our product that you bought
            </label>
            <input
              type="file"
              accept="image/png, image/jpeg"
              className="photos__input"
              multiple
              name="photos"
              id="photos"
              ref={this.fileInput}
            />
          </fieldset>
          <fieldset className="form__field agree">
            <div className="form__agree-block">
              <input
                type="checkbox"
                name="agree-data"
                id="agree-data"
                className="agree__input"
                ref={this.agreeInput}
              />
              <label htmlFor="agree-data" className="agree__label">
                <span className="form__alert">*</span>I consent to my personal data
              </label>
            </div>
            {!this.state.isAgree && (
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
          {this.state.commentsArr.map((commentObj) => {
            return <Comment key={commentObj.commentDate} commentObj={commentObj} />;
          })}
        </div>
        {this.state.shouldShowConfirm && <div className="popup"></div>}
      </div>
    );
  }
}
