import React from 'react';
import { render, screen } from '@testing-library/react';
import { Comment } from '../components/form/Comment';
import { ICommentObj } from 'models';

describe('Comment', () => {
  const newComment: ICommentObj = {
    commentDate: `01.04.2023-12:13:14`,
    name: 'Bob',
    surname: 'Green',
    birthday: '1991-01-01',
    sex: 'male',
    goodCategories: ['hoodie'],
    commentText: 'Nice material',
    photosArr: [''],
    isAgree: true,
  };

  beforeEach(() => {
    render(<Comment commentObj={newComment} />);
  });

  it('should render user`s name and surname', () => {
    screen.getByText('Bob Green');
  });
});
