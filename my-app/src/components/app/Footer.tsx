import React from 'react';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
        <a href="https://github.com/EvgeniaM6" className="footer__element github">
          <div className="github__img"></div>
        </a>
        <div className="footer__element year-app">2023</div>
        <a href="https://rs.school/react/" className="footer__element logo-course">
          <div className="logo-course__img"></div>
        </a>
      </div>
    </footer>
  );
}
