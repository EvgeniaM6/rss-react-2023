import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { TSearchProps } from 'models';

export function Search(props: TSearchProps): JSX.Element {
  const { changeSearch, searchValue, setPageNum } = props;
  const [inputValue, setInputValue] = useState(searchValue);

  function handleChange(e: ChangeEvent): void {
    setInputValue((e.target as HTMLInputElement).value);
  }

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();
    if (inputValue === searchValue) return;
    setPageNum(1);
    changeSearch(inputValue);
  }

  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', inputValue);
    };
  });

  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search..."
          className="search__input"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit" className="search__submit">
          search!
        </button>
      </form>
    </div>
  );
}
