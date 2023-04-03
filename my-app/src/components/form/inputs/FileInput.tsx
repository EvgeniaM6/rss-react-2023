import React from 'react';
import { TFileInputProps } from '../../../models';
import { checkPhotoValidity } from '../validity';

export const FileInput = (props: TFileInputProps) => {
  const { id, children, isMultiple, register, errors } = props;
  const error = errors[id];

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
          id={id}
          {...register(id, {
            required: 'Choose at least 1 file',
            validate: checkPhotoValidity,
          })}
        />
      ) : (
        <input
          type="file"
          accept="image/jpeg,image/png"
          className={`${id}__input`}
          id={id}
          {...register(id, {
            required: 'Choose at least 1 file',
            validate: checkPhotoValidity,
          })}
        />
      )}
      {error && error.type === 'validate' && (
        <div className="form__alert">Only &quot;.jpeg&quot; and &quot;.png&quot; types</div>
      )}
      {error && error.type !== 'validate' && (
        <div className="form__alert">{`${error?.message}` || 'Error'}</div>
      )}
    </fieldset>
  );
};
