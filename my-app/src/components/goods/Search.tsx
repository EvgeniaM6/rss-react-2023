import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { TSearchProps } from 'models';

export function Search(props: TSearchProps): JSX.Element {
  const { changeSearch, searchValue, setPageNum } = props;
  const [searchVal, setSearchVal] = useState(searchValue);

  function handleChange(e: ChangeEvent): void {
    setSearchVal((e.target as HTMLInputElement).value);
  }

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();
    setPageNum(1);
    changeSearch(searchVal);
  }

  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', searchVal);
    };
  });

  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search..."
          className="search__input"
          value={searchVal}
          onChange={handleChange}
        />
        <button type="submit" className="search__submit">
          search!
        </button>
      </form>
    </div>
  );
}
