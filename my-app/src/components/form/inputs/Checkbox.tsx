import React from 'react';
import { TCheckboxInputProps } from '../../../models';

export const CheckboxInput = (props: TCheckboxInputProps) => {
  const { id, children, register, errors } = props;

  return (
    <fieldset className={`form__field ${id}`}>
      <div className={`form__${id}`}>
        <input
          type="checkbox"
          id={id}
          className={`${id}__input`}
          {...register(id, { required: 'We cannot accept data without your consent' })}
        />
        <label htmlFor={id} className={`${id}__label`}>
          <span className="form__alert">*</span>
          {children}
        </label>
      </div>
      {errors[id] && <div className="form__alert">{`${errors[id]?.message}` || 'Error'}</div>}
    </fieldset>
  );
};
