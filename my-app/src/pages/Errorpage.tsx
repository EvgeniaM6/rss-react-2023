import React, { Component } from 'react';

export class Errorpage extends Component {
  render() {
    return (
      <div className="container error-page">
        <p>Error 404</p>
        <h1>Oops! Specified page not found</h1>
      </div>
    );
  }
}
