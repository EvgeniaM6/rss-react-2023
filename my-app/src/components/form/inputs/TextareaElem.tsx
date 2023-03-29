import React, { forwardRef, ForwardedRef } from 'react';
import { TTextareaProps } from '../../../models';

export const TextareaElem = forwardRef(
  (props: TTextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    const { id, children, isValueCorrect } = props;

    return (
      <fieldset className={`form__field ${id}`}>
        <label htmlFor={id} className={`${id}__label`}>
          <span className="form__alert">*</span>
          {children}
        </label>
        <textarea name={id} id={id} className={`${id}__textarea`} ref={ref}></textarea>
        {!isValueCorrect && (
          <div className="form__alert">Length must be at least 10 characters</div>
        )}
      </fieldset>
    );
  }
);
