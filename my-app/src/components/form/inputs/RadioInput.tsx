import React from 'react';
import { TRadioInputProps } from '../../../models';

export const RadioInput = (props: TRadioInputProps) => {
  const { id, nameField, register } = props;
  const inputName = nameField.toLowerCase();
  const inputId = id.toLowerCase();

  return (
    <>
      <input
        type="radio"
        id={inputId}
        className={`${inputName}__input`}
        value={inputId}
        {...register(inputName, {
          required: true,
        })}
      />
      <label htmlFor={inputId} className={`${inputName}__label`}>
        {inputId}
      </label>
    </>
  );
};
