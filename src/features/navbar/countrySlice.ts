import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../config/store';

const initialState = {
  country: 'us',
};

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    addCountry: (state, action: PayloadAction<string>): void => {
      state.country = action.payload;
    },   
  },
});

export const {
  addCountry,
} = countrySlice.actions;

export const selectCountry = (state: RootState) => state.country;

export default countrySlice.reducer;
