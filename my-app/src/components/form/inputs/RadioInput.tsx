import React, { forwardRef, ForwardedRef } from 'react';
import { TRadioInputProps } from '../../../models';

export const RadioInput = forwardRef(
  (props: TRadioInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { id, name } = props;
    const inputName = name.toLowerCase();
    const inputId = id.toLowerCase();

    return (
      <>
        <input
          type="radio"
          name={inputName}
          id={inputId}
          className={`${inputName}__input`}
          value={inputId}
          ref={ref}
        />
        <label htmlFor={inputId} className={`${inputName}__label`}>
          {inputId}
        </label>
      </>
    );
  }
);
