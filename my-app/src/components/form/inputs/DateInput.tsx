import React from 'react';
import { TDateInputProps } from '../../../models';

export const DateInput = (props: TDateInputProps) => {
  const {
    id,
    validate: { checking, message },
    register,
    errors,
  } = props;
  const title = id.toLowerCase();
  const error = errors[title];

  return (
    <fieldset className={`form__field ${title}`}>
      <label htmlFor={title} className={`${title}__label`}>
        <span className="form__alert">*</span>
        {id}:
      </label>
      <input
        type="date"
        id={title}
        className={`${title}__input`}
        {...register(title, {
          required: 'Fill the field',
          validate: checking,
        })}
      />
      {error && error.type === 'validate' && (
        <div className="form__alert form__error">{message}</div>
      )}
      {error && error.type !== 'validate' && (
        <div className="form__alert form__error">{`${error?.message}` || 'Error'}</div>
      )}
    </fieldset>
  );
};
