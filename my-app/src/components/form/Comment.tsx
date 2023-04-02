import React from 'react';
import { ICommentObj } from '../../models';

export function Comment(props: { commentObj: ICommentObj }): JSX.Element {
  const { commentDate, name, surname, sex, birthday, goodCategories, commentText, photosArr } =
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
        {!!photosArr.length && (
          <div className="comment__images">
            {photosArr.map((photo) => (
              <img key={photo} className="comment__images-photo" src={photo} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
