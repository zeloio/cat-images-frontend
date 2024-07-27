import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INITIAL_CHALLENGE_OPTIONS_VALUE as initialState } from '../../models';

const challengeOptionsState = createSlice({
  name: 'challenge-options',
  initialState,
  reducers: {},
});

// export const {
//   setWithPunctuation,
//   setWithNumbers,
//   setMode,
//   setDuration,
//   setWordsCount,
//   setFontSize,
//   setDictionary,
//   setCustomContent,
// } = challengeOptionsState.actions;

export const challengeOptionsReducer = challengeOptionsState.reducer;
