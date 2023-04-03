import React from 'react';
import { TSelectProps } from '../../../models';

export const SelectElem = (props: TSelectProps) => {
  const { children, id, paragraph, isMultiple, register, errors } = props;

  return (
    <fieldset className={`form__field ${id}`}>
      <p>
        <span className="form__alert">*</span>
        {paragraph}
      </p>
      {isMultiple ? (
        <select id={id} multiple className={`${id}__select`} {...register(id, { required: true })}>
          {children}
        </select>
      ) : (
        <select id={id} className={`${id}__select`} {...register(id, { required: true })}>
          {children}
        </select>
      )}
      {errors[id] && <div className="form__alert">Choose at least 1 {id}</div>}
    </fieldset>
  );
};
