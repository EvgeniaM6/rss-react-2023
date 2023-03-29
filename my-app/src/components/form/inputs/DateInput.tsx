import React, { forwardRef, ForwardedRef } from 'react';
import { TTextInputProps } from '../../../models';

export const DateInput = forwardRef(
  (props: TTextInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { id, isValueCorrect } = props;
    const title = id.toLowerCase();

    return (
      <fieldset className={`form__field  ${title}`}>
        <label htmlFor={title} className={`${title}__label`}>
          <span className="form__alert">*</span>
          {id}:
        </label>
        <input type="date" id={title} className={`${title}__input`} ref={ref} />
        {!isValueCorrect && <div className="form__alert">You must be over 18 years of age</div>}
      </fieldset>
    );
  }
);
