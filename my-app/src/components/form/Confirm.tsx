import React, { Component } from 'react';
import { TPropsComment } from '../../models';
import { Comment } from './Comment';

export class Confirm extends Component<TPropsComment> {
  render() {
    return (
      <div className="confirm">
        <div className="confirm__content">
          <h3>Your data has been saved</h3>
          <Comment commentObj={this.props.form} />
          <button className="confirm__button" onClick={this.props.onClose}>
            OK
          </button>
        </div>
      </div>
    );
  }
}
