import React, { useEffect, useState } from 'react';
import { TFormPageProps } from '../models';
import { Form } from '../components/form/Form';
import { Comment } from '../components/form/Comment';
import { Confirm } from '../components/form/Confirm';
import { PAGES } from '../constants/pages';

export function Formspage(props: TFormPageProps): JSX.Element {
  const [shouldShowConfirm, setShouldShowConfirm] = useState(false);

  function onClose(): void {
    setShouldShowConfirm(false);
  }

  function onOpen(): void {
    setShouldShowConfirm(true);
  }

  useEffect(() => {
    const showPageName = (page: string) => props.handleOpenPage(page);
    showPageName(PAGES.forms);
  }, [props]);

  const { addComment, commentsArr } = props;

  return (
    <div className="container forms-page">
      <h3 className="forms-page__title">
        Leave us a comment about your latest purchase from our store
      </h3>
      <Form onOpen={onOpen} addComment={addComment} />
      {!!commentsArr.length && (
        <div className="forms-page__comments">
          <h3 className="forms-page__title">Comments</h3>
          {commentsArr.map((commentObj) => {
            return <Comment key={commentObj.commentDate} commentObj={commentObj} />;
          })}
        </div>
      )}
      {shouldShowConfirm && (
        <Confirm onClose={onClose} form={commentsArr[commentsArr.length - 1]} />
      )}
    </div>
  );
}
