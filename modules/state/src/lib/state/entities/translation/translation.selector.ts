import { createSelector } from '@reduxjs/toolkit';
import { Translation } from '@shared';
import { RootState } from '../../store';

export const languageState = (state: RootState) => state.translation;
export const selectLanguage = createSelector(
  languageState,
  (state: Translation) => state.language
);
