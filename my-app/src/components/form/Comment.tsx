import React from 'react';
import { TCommentObj } from '../../models';

export function Comment(props: { commentObj: TCommentObj }) {
  const { commentDate, name, surname, sex, birthday, goodCategories, commentText, photos } =
    props.commentObj;
  const [date, time] = commentDate.split('-');

  return (
    <div className="comment">
      <div className="comment__person">
        <div>{`${date} ${time.slice(0, -3)}`}</div>
        <div className="comment__name">{`${name} ${surname}`}</div>
        <div>{sex}</div>
        <div>Birthday: {birthday?.split('-').reverse().join('.')}</div>
      </div>
      <div className="comment__content">
        <div className="comment__categories">
          {goodCategories.map((goodCategory) => (
            <span key={goodCategory} className="comment__category">
              {goodCategory}
            </span>
          ))}
        </div>
        <div className="comment__text">{commentText}</div>
        {!!photos.length && (
          <div className="comment__images">
            {photos.map((photo) => (
              <img key={photo} className="comment__images-photo" src={photo} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
