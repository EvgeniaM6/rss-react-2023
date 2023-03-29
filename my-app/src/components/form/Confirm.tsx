import React from 'react';
import { TPropsComment } from '../../models';
import { Comment } from './Comment';

export function Confirm(props: TPropsComment) {
  return (
    <div className="confirm">
      <div className="confirm__content">
        <h3>Your data has been saved</h3>
        <Comment commentObj={props.form} />
        <button className="confirm__button" onClick={props.onClose}>
          OK
        </button>
      </div>
    </div>
  );
}
