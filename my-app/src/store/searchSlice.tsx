import { createSlice } from '@reduxjs/toolkit';
import { TSearchState } from '../models';

const initialState: TSearchState = {
  changedSearch: '',
  submittedSearch: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue(state, action) {
      return { ...state, submittedSearch: action.payload };
    },
    changeSearchValue(state, action) {
      return { ...state, changedSearch: action.payload };
    },
  },
});

export const { setSearchValue, changeSearchValue } = searchSlice.actions;
export default searchSlice.reducer;
