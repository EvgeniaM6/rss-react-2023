import React from 'react';
import { TPropsComment } from '../../models';

export function Confirm(props: TPropsComment) {
  return (
    <div className="confirm">
      <div className="confirm__content">
        <h3>Your data has been saved</h3>
        <button className="confirm__button" onClick={props.onClose}>
          OK
        </button>
      </div>
    </div>
  );
}
