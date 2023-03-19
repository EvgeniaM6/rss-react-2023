import React, { ChangeEvent, Component, FormEvent } from 'react';
import { TProps } from '../models';

export class Search extends Component<TProps, { searchVal: string }> {
  constructor(props: TProps) {
    super(props);

    const savedSearchVal = localStorage.getItem('searchValue') || '';
    this.state = { searchVal: savedSearchVal };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e: ChangeEvent) {
    this.setState({ searchVal: (e.target as HTMLInputElement).value });
  }

  handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  componentWillUnmount() {
    localStorage.setItem('searchValue', this.state.searchVal);
  }

  render() {
    return (
      <div className="search">
        <form className="search__form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="search..."
            className="search__input"
            value={this.state.searchVal}
            onChange={this.handleChange}
          />
          <button type="submit" className="search__submit">
            search!
          </button>
        </form>
      </div>
    );
  }
}
