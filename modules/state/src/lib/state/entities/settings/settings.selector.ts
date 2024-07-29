import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { SettingsState } from '@shared';

export const settingsState = (state: RootState) => state.settings;

export const selectHeight = createSelector(
  settingsState,
  (state: SettingsState) => state.height
);

export const selectWidth = createSelector(
  settingsState,
  (state: SettingsState) => state.width
);

export const selectPermanent = createSelector(
  settingsState,
  (state: SettingsState) => state.permanent
);
