import React, { forwardRef, ForwardedRef } from 'react';
import { TFileInputProps } from '../../../models';

export const FileInput = forwardRef(
  (props: TFileInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { id, children, isMultiple, isValueCorrect } = props;

    return (
      <fieldset className={`form__field ${id}`}>
        <label htmlFor={id} className={`${id}__label`}>
          <span className="form__alert">*</span>
          {children}
        </label>
        {isMultiple ? (
          <input
            type="file"
            accept="image/jpeg,image/png"
            className={`${id}__input`}
            multiple
            name={id}
            id={id}
            ref={ref}
          />
        ) : (
          <input
            type="file"
            accept="image/jpeg,image/png"
            className={`${id}__input`}
            name={id}
            id={id}
            ref={ref}
          />
        )}
        {!isValueCorrect && <div className="form__alert">Choose at least 1 file</div>}
      </fieldset>
    );
  }
);
