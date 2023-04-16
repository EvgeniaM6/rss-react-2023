import React, { ChangeEvent, FormEvent, useRef } from 'react';
import { TSearchProps } from 'models';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSearchValue, changeSearchValue } from '../../store/searchSlice';

export function Search(props: TSearchProps): JSX.Element {
  const { setPageNum } = props;
  const { submittedSearch, changedSearch } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  const searchInputelem = useRef<HTMLInputElement | null>(null);

  function handleChange(e: ChangeEvent): void {
    dispatch(changeSearchValue((e.target as HTMLInputElement).value));
  }

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();
    if (changedSearch === submittedSearch) return;
    setPageNum(1);
    dispatch(setSearchValue(changedSearch));
  }

  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search..."
          id="search"
          ref={searchInputelem}
          className="search__input"
          onChange={handleChange}
          defaultValue={changedSearch}
        />
        <button type="submit" className="search__submit">
          search!
        </button>
      </form>
    </div>
  );
}
