import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Aboutpage, Errorpage, Formspage, Homepage } from '../../pages';
import { Layout } from './Layout';
import { Footer } from './Footer';
import { PAGES } from '../../constants/pages';

export function App(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(PAGES.home);

  function handleOpenPage(page: string): void {
    setCurrentPage(page);
  }

  return (
    <>
      <Layout currentPage={currentPage} />
      <main className="main">
        <Routes>
          <Route path="/" element={<Homepage handleOpenPage={handleOpenPage} />} />
          <Route path="/about" element={<Aboutpage handleOpenPage={handleOpenPage} />} />
          <Route path="/forms" element={<Formspage handleOpenPage={handleOpenPage} />} />
          <Route path="*" element={<Errorpage handleOpenPage={handleOpenPage} />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
