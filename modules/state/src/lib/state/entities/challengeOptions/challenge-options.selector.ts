import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { ChallengeOptions } from '@shared';

// define options selector
export const challengeOptionsState = (state: RootState) =>
  state.challengeOptions;

// define dictionary selectors
export const selectDictionary = createSelector(
  challengeOptionsState,
  (state: ChallengeOptions) => state.dictionary
);

// define durations selectors
export const selectDurations = createSelector(
  challengeOptionsState,
  (state: ChallengeOptions) => state.durations
);

// define words counts selectors
export const selectWordsCounts = createSelector(
  challengeOptionsState,
  (state: ChallengeOptions) => state.wordsCounts
);

// export const selectIfWithPunctuation = createSelector(
//   challengeOptionsState,
//   (state: ChallengeSettings) => state.withPunctuation
// );

// export const selectIfWithNumbers = createSelector(
//   challengeOptionsState,
//   (state: ChallengeSettings) => state.withNumbers
// );

// export const selectMode = createSelector(
//   challengeOptionsState,
//   (state: ChallengeSettings) => state.mode
// );

// export const selectDuration = createSelector(
//   challengeOptionsState,
//   (state: ChallengeSettings) => state.duration
// );

// export const selectWordsCount = createSelector(
//   challengeOptionsState,
//   (state: ChallengeSettings) => state.wordsCount
// );

// export const selectFontSize = createSelector(
//   challengeOptionsState,
//   (state: ChallengeSettings) => state.fontSize
// );

// export const selectDictionary = createSelector(
//   challengeOptionsState,
//   (state: ChallengeSettings) => state.dictionary
// );

// export const selectCustomContent = createSelector(
//   challengeOptionsState,
//   (state: ChallengeSettings) => state.customContent
// );
