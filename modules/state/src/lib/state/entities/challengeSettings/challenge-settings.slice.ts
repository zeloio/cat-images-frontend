import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INITIAL_CHALLENGE_SETTINGS_VALUE as initialState } from '../../models';
import { ChallengeMode } from '@shared';

const challengeSettingsSlice = createSlice({
  name: 'challenge-settings',
  initialState,
  reducers: {
    setWithPunctuation: (state, action: PayloadAction<boolean>) => {
      state.withPunctuation = action.payload;
    },
    setWithNumbers: (state, action: PayloadAction<boolean>) => {
      state.withNumbers = action.payload;
    },
    setMode: (state, action: PayloadAction<ChallengeMode>) => {
      state.mode = action.payload;
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },
    setWordsCount: (state, action: PayloadAction<number>) => {
      state.wordsCount = action.payload;
    },
    setFontSize: (state, action: PayloadAction<number>) => {
      state.fontSize = action.payload;
    },
    setDictionary: (state, action: PayloadAction<string>) => {
      state.dictionaryId = action.payload;
    },
    setCustomContent: (state, action: PayloadAction<string>) => {
      state.customContent = action.payload;
    },
  },
});

export const {
  setWithPunctuation,
  setWithNumbers,
  setMode,
  setDuration,
  setWordsCount,
  setFontSize,
  setDictionary,
  setCustomContent,
} = challengeSettingsSlice.actions;

export const challengeSettingsReducer = challengeSettingsSlice.reducer;
