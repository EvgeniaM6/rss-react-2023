import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Aboutpage, Errorpage, Formspage, Homepage } from '../../pages';
import { Layout } from './Layout';
import { Footer } from './Footer';
import { PAGES } from '../../constants/pages';
import { ICommentObj } from 'models';

export function App() {
  const [currentPage, setCurrentPage] = useState(PAGES.home);
  const [commentsArr, setCommentsArr] = useState<ICommentObj[]>([]);

  function handleOpenPage(page: string): void {
    setCurrentPage(page);
  }

  function addComment(newComment: ICommentObj): void {
    setCommentsArr([...commentsArr, newComment]);
  }

  return (
    <>
      <Layout currentPage={currentPage} />
      <main className="main">
        <Routes>
          <Route path="/" element={<Homepage handleOpenPage={handleOpenPage} />} />
          <Route path="/about" element={<Aboutpage handleOpenPage={handleOpenPage} />} />
          <Route
            path="/forms"
            element={
              <Formspage
                handleOpenPage={handleOpenPage}
                addComment={addComment}
                commentsArr={commentsArr}
              />
            }
          />
          <Route path="*" element={<Errorpage handleOpenPage={handleOpenPage} />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
