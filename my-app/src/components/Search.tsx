import React, { ChangeEvent, Component } from 'react';
import { TProps } from '../models';

export class Search extends Component<TProps, { searchVal: string }> {
  constructor(props: TProps) {
    super(props);

    const savedSearchVal = localStorage.getItem('searchValue') || '';
    console.log('savedSearchVal=', savedSearchVal);
    this.state = { searchVal: savedSearchVal };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: ChangeEvent) {
    this.setState({ searchVal: (e.target as HTMLInputElement).value });
    console.log('e.target.value=', (e.target as HTMLInputElement).value);
    console.log('this.state.searchVal=', this.state.searchVal);
  }

  componentWillUnmount() {
    console.log('this.state.searchVal=', this.state.searchVal);
    localStorage.setItem('searchValue', this.state.searchVal);
  }

  render() {
    return (
      <div className="search">
        <form className="search__form">
          <input
            type="text"
            className="search__input"
            value={this.state.searchVal}
            onChange={this.handleChange}
          />
          <button type="submit">search!</button>
        </form>
      </div>
    );
  }
}
