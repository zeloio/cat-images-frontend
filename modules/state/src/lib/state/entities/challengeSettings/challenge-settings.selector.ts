import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { ChallengeSettings } from '@shared';

export const challengeSettingsState = (state: RootState) =>
  state.challengeSettings;

export const selectIfWithPunctuation = createSelector(
  challengeSettingsState,
  (state: ChallengeSettings) => state.withPunctuation
);

export const selectIfWithNumbers = createSelector(
  challengeSettingsState,
  (state: ChallengeSettings) => state.withNumbers
);

export const selectMode = createSelector(
  challengeSettingsState,
  (state: ChallengeSettings) => state.mode
);

export const selectDuration = createSelector(
  challengeSettingsState,
  (state: ChallengeSettings) => state.duration
);

export const selectWordsCount = createSelector(
  challengeSettingsState,
  (state: ChallengeSettings) => state.wordsCount
);

export const selectFontSize = createSelector(
  challengeSettingsState,
  (state: ChallengeSettings) => state.fontSize
);

export const selectDictionary = createSelector(
  challengeSettingsState,
  (state: ChallengeSettings) => state.dictionaryId
);

export const selectCustomContent = createSelector(
  challengeSettingsState,
  (state: ChallengeSettings) => state.customContent
);
