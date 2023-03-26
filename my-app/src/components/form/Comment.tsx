import React, { Component } from 'react';
import { TCommentObj } from '../../models';

export class Comment extends Component<{ commentObj: TCommentObj }> {
  render() {
    const [date, time] = this.props.commentObj.commentDate.split('-');

    return (
      <div className="comment">
        <div className="comment__person">
          <div>{`${date} ${time.slice(0, -3)}`}</div>
          <div className="comment__name">{`${this.props.commentObj.name} ${this.props.commentObj.surname}`}</div>
          <div>{this.props.commentObj.sex}</div>
          <div>Birthday: {this.props.commentObj.birthday?.split('-').reverse().join('.')}</div>
        </div>
        <div className="comment__content">
          <div className="comment__categories">
            {this.props.commentObj.goodCategories.map((goodCategory) => (
              <span key={goodCategory} className="comment__category">
                {goodCategory}
              </span>
            ))}
          </div>
          <div className="comment__text">{this.props.commentObj.commentText}</div>
          {!!this.props.commentObj.photos.length && (
            <div className="comment__images">
              {this.props.commentObj.photos.map((photo) => (
                <img key={photo} className="comment__images-photo" src={photo} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}
