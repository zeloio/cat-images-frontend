import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INITIAL_SETTINGS_VALUE as initialState } from '../../models/settings';

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setHeight: (state, action: PayloadAction<number>) => {
      state.height = action.payload;
    },
    setWidth: (state, action: PayloadAction<number>) => {
      state.width = action.payload;
    },
    setPermanent: (state, action: PayloadAction<boolean>) => {
      state.permanent = action.payload;
    },
  },
});

export const { setHeight, setWidth, setPermanent } = settingsSlice.actions;

export const settingsReducer = settingsSlice.reducer;
