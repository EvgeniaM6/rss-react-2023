import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';

export function Search() {
  const savedSearchVal = localStorage.getItem('searchValue') || '';
  const [searchVal, setSearchVal] = useState(savedSearchVal);

  function handleChange(e: ChangeEvent) {
    setSearchVal((e.target as HTMLInputElement).value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
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
  // }
}
