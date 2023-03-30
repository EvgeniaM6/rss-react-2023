import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Aboutpage, Errorpage, Formspage, Homepage } from '../../pages';
import Layout from './Layout';
import Footer from './Footer';
import { TProps } from '../../models';
import { PAGES } from '../../constants/pages';

export default class App extends Component<TProps, TProps> {
  constructor(props: TProps) {
    super(props);

    this.state = {
      currentPage: PAGES.home,
    };

    this.handleOpenPage = this.handleOpenPage.bind(this);
  }

  handleOpenPage(page: string): void {
    this.setState({
      currentPage: page,
    });
  }

  render() {
    return (
      <>
        <Layout currentPage={this.state.currentPage} />
        <main className="main">
          <Routes>
            <Route path="/" element={<Homepage handleOpenPage={this.handleOpenPage} />} />
            <Route path="/about" element={<Aboutpage handleOpenPage={this.handleOpenPage} />} />
            <Route path="/forms" element={<Formspage handleOpenPage={this.handleOpenPage} />} />
            <Route path="*" element={<Errorpage handleOpenPage={this.handleOpenPage} />} />
          </Routes>
        </main>
        <Footer />
      </>
    );
  }
}
