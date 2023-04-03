import React from 'react';
import { FormValues, ICommentObj, TFormProps } from '../../models';
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
import { birthdayValidity } from './validity';
import { SubmitHandler, useForm } from 'react-hook-form';

export function Form(props: TFormProps): JSX.Element {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormValues>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const handleSubmitForm: SubmitHandler<FormValues> = (data) => {
    const { name, surname, birthday, sex, category, commentText, photos, agree } = data;

    const currDate: Date = new Date();
    const commentDate = `${currDate.toLocaleDateString()}-${currDate.toLocaleTimeString()}`;
    const newComment: ICommentObj = {
      commentDate,
      name,
      surname,
      birthday,
      sex,
      goodCategories: category,
      commentText,
      photosArr: Array.from(photos).map((fileObj) => URL.createObjectURL(fileObj)),
      isAgree: agree,
    };

    props.addComment(newComment);
    props.onOpen();
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(handleSubmitForm)}>
      <div className="form__full-name">
        <TextInput id="Name" placeholder="Mikle" register={register} errors={errors} />
        <TextInput id="Surname" placeholder="Brown" register={register} errors={errors} />
      </div>
      <div className="form__person-details">
        <DateInput id="Birthday" register={register} errors={errors} validate={birthdayValidity} />
        <fieldset className="form__field sex">
          <p className="sex__title">
            <span className="form__alert">*</span>
            Sex:
          </p>
          <div className="sex__content">
            <RadioInput nameField="sex" id="male" register={register} />
            <RadioInput nameField="sex" id="female" register={register} />
          </div>
          {errors.sex && <div className="form__alert">Choose sex</div>}
        </fieldset>
      </div>
      <SelectElem
        id="category"
        paragraph="Select the category/s of the item(s) you purchased"
        isMultiple={true}
        register={register}
        errors={errors}
      >
        {CATEGORIES_TITLES_ARR.map((category) => (
          <option key={category} value={category} className="category__option">
            {category}
          </option>
        ))}
      </SelectElem>
      <TextareaElem id="commentText" clasNaming="comment-text" register={register} errors={errors}>
        Your comment (at least 10 symbols):
      </TextareaElem>
      <FileInput id="photos" isMultiple={true} register={register} errors={errors}>
        Show photos of our product that you bought
      </FileInput>
      <CheckboxInput id="agree" register={register} errors={errors}>
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
