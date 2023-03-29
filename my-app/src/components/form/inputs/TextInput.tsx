import React, { forwardRef, ForwardedRef } from 'react';
import { TTextInputProps } from '../../../models';

export const TextInput = forwardRef(
  (props: TTextInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { id, placeholder, isValueCorrect } = props;
    const title = id.toLowerCase();

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
          ref={ref}
        />
        {!isValueCorrect && (
          <div className="form__alert">The first letter of the {title} must be capitalized</div>
        )}
      </fieldset>
    );
  }
);
