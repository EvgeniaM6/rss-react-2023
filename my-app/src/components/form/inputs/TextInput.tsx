import React from 'react';
import { TTextInputProps } from '../../../models';

export const TextInput = (props: TTextInputProps) => {
  const { id, placeholder, register, errors } = props;
  const title = id.toLowerCase();
  const error = errors[title];

  return (
    <fieldset className={`form__field  ${title}`}>
      <label htmlFor={title} className={`${title}__label`}>
        <span className="form__alert">*</span>
        {id}:
      </label>
      <input
        type="text"
        id={title}
        placeholder={placeholder}
        className={`${title}__input`}
        {...register(title, {
          required: 'Fill the field',
          pattern: {
            value: /[A-ZА-Я][a-zа-я]+/,
            message: `The first letter of the ${title} must be capitalized`,
          },
        })}
      />
      {error && <div className="form__alert">{`${error?.message}` || 'Error'}</div>}
    </fieldset>
  );
};
