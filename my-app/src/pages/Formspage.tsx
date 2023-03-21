import React, { Component, FormEvent } from 'react';
import { TPropsHandle, TStateForm } from 'models';

export class Formspage extends Component<TPropsHandle, TStateForm> {
  private nameInput: React.RefObject<HTMLInputElement> = React.createRef();
  private surnameInput: React.RefObject<HTMLInputElement> = React.createRef();
  private birthdayInput: React.RefObject<HTMLInputElement> = React.createRef();
  private agreeInput: React.RefObject<HTMLInputElement> = React.createRef();
  private radioMaleInput: React.RefObject<HTMLInputElement> = React.createRef();
  private radioFemaleInput: React.RefObject<HTMLInputElement> = React.createRef();
  private select: React.RefObject<HTMLSelectElement> = React.createRef();
  private commentInput: React.RefObject<HTMLTextAreaElement> = React.createRef();
  private fileInput: React.RefObject<HTMLInputElement> = React.createRef();

  constructor(props: TPropsHandle) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { isFormValid: true, commentsArr: [] };
  }

  handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log('A name was submitted: ', this.nameInput.current?.value);
    console.log('A surname was submitted: ', this.surnameInput.current?.value);
    console.log('A birthday was submitted: ', this.birthdayInput.current?.value);
    console.log('A select was submitted: ');
    Array.from(this.select.current?.selectedOptions || []).forEach((option) =>
      console.log(option.value)
    );
    console.log('A radioMaleInput was submitted: ', this.radioMaleInput.current?.checked);
    console.log('A radioFemaleInput was submitted: ', this.radioFemaleInput.current?.checked);
    console.log('An agree was submitted checked: ', this.agreeInput.current?.checked);
    console.log('A comment was submitted: ', this.surnameInput.current?.value);
    const files = this.fileInput.current?.files;
    if (!files) return;
    const fileObj = files[0];
    if (!fileObj) return;
    console.log(`Selected file - ${fileObj.name}`);
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
            <label>
              *Name:
              <input type="text" id="user-name" placeholder="Mikle" ref={this.nameInput} />
            </label>
          </fieldset>
          <fieldset className="form__field">
            <label>
              *Surname:
              <input type="text" id="user-surname" placeholder="Brown" ref={this.surnameInput} />
            </label>
          </fieldset>
          <fieldset className="form__field">
            <label>
              Birthday:
              <input type="date" name="birthday" id="birthday" ref={this.birthdayInput} />
            </label>
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
            <select name="dd" id="dd" multiple ref={this.select}>
              <option value="hoodie">hoodie</option>
              <option value="sweatshirt">sweatshirt</option>
              <option value="t-shirt">t-shirt</option>
              <option value="skirt">skirt</option>
              <option value="dress">dress</option>
            </select>
          </fieldset>
          <fieldset className="form__field">
            <label>
              <div>*Your comment (at least 10 symbols):</div>
              <textarea name="" id="" ref={this.commentInput}></textarea>
            </label>
          </fieldset>
          <fieldset className="form__field">
            <p>Show photos of our product that you bought</p>
            <input type="file" multiple name="photos" id="photos" ref={this.fileInput} />
          </fieldset>
          <fieldset className="form__field">
            <input type="checkbox" name="agree-data" id="agree-data" ref={this.agreeInput} />
            <label htmlFor="agree-data">*I consent to my personal data</label>
          </fieldset>
          <div>Required fields are marked *</div>
          {!this.state.isFormValid && <div>Fill Required fields!</div>}
          <input type="submit" value="Submit" />
        </form>
        <div></div>
      </div>
    );
  }
}

// const arrCards = [];
