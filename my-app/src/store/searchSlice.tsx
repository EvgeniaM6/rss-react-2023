import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    changedSearch: '',
    submittedSearch: '',
  },
  reducers: {
    setSearchValue(state, action) {
      return { ...state, submitSearch: action.payload };
    },
    changeSearchValue(state, action) {
      return { ...state, changeSearch: action.payload };
    },
  },
});

export const { setSearchValue, changeSearchValue } = searchSlice.actions;
export default searchSlice.reducer;
