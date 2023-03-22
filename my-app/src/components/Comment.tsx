import React, { Component } from 'react';
import { TCommentObj } from '../models';

export class Comment extends Component<{ commentObj: TCommentObj }> {
  render() {
    return (
      <div key={this.props.commentObj.commentDate} className="comment">
        <div className="comment__name">{this.props.commentObj.name}</div>
        {this.props.commentObj.photos.length && (
          <div className="comment__images">
            {this.props.commentObj.photos.map((photo) => (
              <img key={photo} className="comment__images-photo" src={photo}></img>
            ))}
          </div>
        )}
      </div>
    );
  }
}
