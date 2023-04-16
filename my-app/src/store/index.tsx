import { configureStore } from '@reduxjs/toolkit';
import { goodsApi } from '../redux/goodsApi';
import searchReducer from './searchSlice';

const store = configureStore({
  reducer: {
    [goodsApi.reducerPath]: goodsApi.reducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(goodsApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
