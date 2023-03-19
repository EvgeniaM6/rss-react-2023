import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from '../pages/Homepage';
import { Aboutpage } from '../pages/Aboutpage';
import { Errorpage } from '../pages/Errorpage';
import Layout from './Layout';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <>
        <Layout />
        <main className="main">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="*" element={<Errorpage />} />
          </Routes>
        </main>
        <Footer />
      </>
    );
  }
}
