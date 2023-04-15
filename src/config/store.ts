import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import countryReducer from '../features/navbar/countrySlice';

export const store = configureStore({
  reducer: {
    country: countryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
