import { COMMENT_TEXT_LENGTH } from '../../../constants';

export function checkCommentValidity(textareaElem: HTMLTextAreaElement | null): string {
  if (!textareaElem) return '';
  const commentValue: string = textareaElem.value;
  const comment: string = commentValue.length >= COMMENT_TEXT_LENGTH ? commentValue : '';
  return comment;
}
