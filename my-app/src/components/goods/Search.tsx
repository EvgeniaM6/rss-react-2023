import React from 'react';
import { TSearchForm, TSearchProps } from 'models';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSearchValue, changeSearchValue } from '../../store/searchSlice';
import { SubmitHandler, useForm } from 'react-hook-form';

export function Search(props: TSearchProps): JSX.Element {
  const { setPageNum } = props;
  const { submittedSearch, changedSearch } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<TSearchForm>({
    mode: 'onSubmit',
  });

  const handleSubmitForm: SubmitHandler<TSearchForm> = (data) => {
    const { search } = data;
    dispatch(changeSearchValue(search));
    if (search === submittedSearch) return;
    setPageNum(1);
    dispatch(setSearchValue(search));
  };

  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit(handleSubmitForm)}>
        <input
          type="text"
          placeholder="search..."
          id="search"
          className="search__input"
          defaultValue={changedSearch}
          {...register('search')}
        />
        <button type="submit" className="search__submit">
          search!
        </button>
      </form>
    </div>
  );
}
