import React, { Component, FormEvent } from 'react';
import { TPropsHandle, TStateForm } from 'models';
import { COMMENT_TEXT_LENGTH } from '../constants';

export class Formspage extends Component<TPropsHandle, TStateForm> {
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
      isNameValid: true,
      isSurnameValid: true,
      isAgree: true,
      isCommentValid: true,
      isCategorySelected: true,
      commentsArr: [],
    };
  }

  handleSubmit(event: FormEvent) {
    event.preventDefault();

    this.checkFormValidity();
  }

  checkFormValidity(): void {
    const name = this.nameInput.current?.value || '';
    const isNameValid = name.match(new RegExp(/[A-ZА-Я][a-zа-я]+/));
    this.setState({ isNameValid: !!name && !!isNameValid });

    const surname = this.surnameInput.current?.value || '';
    const isSurnameValid = surname.match(new RegExp(/[A-ZА-Я][a-zа-я]+/));
    this.setState({ isSurnameValid: !!surname || !!isSurnameValid });

    this.setState({ isAgree: this.agreeInput.current?.checked || false });

    const commentInputEl = this.commentInput.current;
    const comment = commentInputEl?.value || '';
    const commentLength = comment.length;
    this.setState({ isCommentValid: commentLength >= COMMENT_TEXT_LENGTH });

    const isCategorySelected = this.categorySelect.current?.selectedOptions.length !== 0 || false;
    this.setState({ isCategorySelected: isCategorySelected });
  }

  componentDidMount(): void {
    this.props.handleOpenPage();
  }

  render() {
    return (
      <div className="container forms-page">
        <div>Leave us a comment about your latest purchase from our store</div>
        <form className="form" onSubmit={this.handleSubmit}>
          <fieldset className="form__field">
            <label htmlFor="user-name">*Name:</label>
            <input type="text" id="user-name" placeholder="Mikle" ref={this.nameInput} />
            {!this.state.isNameValid && (
              <div className="form__alert">The first letter of the name must be capitalized</div>
            )}
          </fieldset>
          <fieldset className="form__field">
            <label htmlFor="user-surname">*Surname:</label>
            <input type="text" id="user-surname" placeholder="Brown" ref={this.surnameInput} />
            {!this.state.isSurnameValid && (
              <div className="form__alert">The first letter of the surname must be capitalized</div>
            )}
          </fieldset>
          <fieldset className="form__field">
            <label htmlFor="birthday">Birthday:</label>
            <input type="date" name="birthday" id="birthday" ref={this.birthdayInput} />
          </fieldset>
          <fieldset className="form__field">
            <p>*Sex:</p>
            <input
              type="radio"
              name="sex"
              id="male"
              defaultChecked
              value="male"
              ref={this.radioMaleInput}
            />
            <label htmlFor="male">male</label>
            <input type="radio" name="sex" id="female" value="female" ref={this.radioFemaleInput} />
            <label htmlFor="female">female</label>
          </fieldset>
          <fieldset className="form__field">
            <p>*Select the category/s of the item(s) you purchased</p>
            <select name="dd" id="dd" multiple ref={this.categorySelect}>
              <option value="hoodie">hoodie</option>
              <option value="sweatshirt">sweatshirt</option>
              <option value="t-shirt">t-shirt</option>
              <option value="skirt">skirt</option>
              <option value="dress">dress</option>
            </select>
            {!this.state.isCategorySelected && (
              <div className="form__alert">Choose at least 1 category</div>
            )}
          </fieldset>
          <fieldset className="form__field">
            <label htmlFor="comment">*Your comment (at least 10 symbols):</label>
            <textarea name="comment" id="comment" ref={this.commentInput}></textarea>
            {!this.state.isCommentValid && (
              <div className="form__alert">Comment length must be at least 10 characters</div>
            )}
          </fieldset>
          <fieldset className="form__field">
            <label htmlFor="photos">Show photos of our product that you bought</label>
            <input type="file" multiple name="photos" id="photos" ref={this.fileInput} />
          </fieldset>
          <fieldset className="form__field">
            <input type="checkbox" name="agree-data" id="agree-data" ref={this.agreeInput} />
            <label htmlFor="agree-data">*I consent to my personal data</label>
            {!this.state.isAgree && (
              <div className="form__alert">We cannot accept data without your consent</div>
            )}
          </fieldset>
          <div>Required fields are marked *</div>
          <input type="submit" value="Submit" />
        </form>
        <div></div>
      </div>
    );
  }
}
