import { COMMENT_TEXT_LENGTH } from '../../../constants';
import { RefObject } from 'react';

export function checkCommentValidity(inputRef: RefObject<HTMLTextAreaElement>): string {
  const commentValue = inputRef.current?.value || '';
  const isCommentLengthCorrect = commentValue.length >= COMMENT_TEXT_LENGTH || '';
  const comment = isCommentLengthCorrect && commentValue;
  return comment;
}
