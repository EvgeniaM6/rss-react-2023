import React, { forwardRef, ForwardedRef } from 'react';
import { TSelectProps } from '../../../models';

export const SelectElem = forwardRef(
  (props: TSelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
    const { children, id, paragraph, isMultiple, isValueCorrect } = props;

    return (
      <fieldset className={`form__field ${id}`}>
        <p>
          <span className="form__alert">*</span>
          {paragraph}
        </p>
        {isMultiple ? (
          <select name={id} id={id} multiple className={`${id}__select`} ref={ref}>
            {children}
          </select>
        ) : (
          <select name="dd" id="dd" className={`${id}__select`} ref={ref}>
            {children}
          </select>
        )}
        {!isValueCorrect && <div className="form__alert">Choose at least 1 {id}</div>}
      </fieldset>
    );
  }
);
