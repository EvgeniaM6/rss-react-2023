import React, { forwardRef, ForwardedRef } from 'react';
import { TCheckboxInputProps } from '../../../models';

export const CheckboxInput = forwardRef(
  (props: TCheckboxInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { id, children, isValueCorrect } = props;

    return (
      <fieldset className={`form__field ${id}`}>
        <div className={`form__${id}`}>
          <input type="checkbox" name={id} id={id} className={`${id}__input`} ref={ref} />
          <label htmlFor={id} className={`${id}__label`}>
            <span className="form__alert">*</span>
            {children}
          </label>
        </div>
        {!isValueCorrect && (
          <div className="form__alert">We cannot accept data without your consent</div>
        )}
      </fieldset>
    );
  }
);
