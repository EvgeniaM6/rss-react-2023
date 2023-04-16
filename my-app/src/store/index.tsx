import { configureStore } from '@reduxjs/toolkit';
import { goodsApi } from '../redux/goodsApi';
import searchReducer from './searchSlice';
import formReducer from './formSlice';

const store = configureStore({
  reducer: {
    [goodsApi.reducerPath]: goodsApi.reducer,
    search: searchReducer,
    form: formReducer,
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(goodsApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
