import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICommentObj, TFormCommentsState } from '../models';

const initialState: TFormCommentsState = {
  commentsArr: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addComment(state, action: PayloadAction<ICommentObj>) {
      state.commentsArr.push(action.payload);
    },
  },
});

export const { addComment } = formSlice.actions;
export default formSlice.reducer;
