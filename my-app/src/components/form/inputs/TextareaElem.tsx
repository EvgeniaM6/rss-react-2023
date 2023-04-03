import { COMMENT_TEXT_LENGTH } from '../../../constants';
import React from 'react';
import { TTextareaProps } from '../../../models';

export const TextareaElem = (props: TTextareaProps) => {
  const { id, clasNaming, children, register, errors } = props;

  return (
    <fieldset className={`form__field ${clasNaming}`}>
      <label htmlFor={id} className={`${clasNaming}__label`}>
        <span className="form__alert">*</span>
        {children}
      </label>
      <textarea
        id={id}
        className={`${clasNaming}__textarea`}
        {...register(id, {
          required: 'Fill the field',
          minLength: {
            value: COMMENT_TEXT_LENGTH,
            message: 'Length must be at least 10 characters',
          },
        })}
      ></textarea>
      {errors[id] && <div className="form__alert">{`${errors[id]?.message}` || 'Error'}</div>}
    </fieldset>
  );
};
