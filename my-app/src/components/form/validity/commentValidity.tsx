import { COMMENT_TEXT_LENGTH } from '../../../constants';

export function checkCommentValidity(textareaElem: HTMLTextAreaElement | null): string {
  const commentValue = textareaElem?.value || '';
  const isCommentLengthCorrect = commentValue.length >= COMMENT_TEXT_LENGTH || '';
  const comment = isCommentLengthCorrect && commentValue;
  return comment;
}
