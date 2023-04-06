import React from 'react';
import { TSortingProps } from 'models';
import { SORT_VALUES_ARR } from '../../constants';

export function SortingData(props: TSortingProps): JSX.Element {
  const { setSortBy, sortBy } = props;

  return (
    <div className="sort">
      <select id="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        {SORT_VALUES_ARR.map((sortValue) => (
          <option key={sortValue} value={sortValue}>
            {sortValue}
          </option>
        ))}
      </select>
    </div>
  );
}
