import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Playground, PlaygroundPerformance } from '@shared';

export const playgroundState = (state: RootState) => state.playground;

export const selectKeystrokes = createSelector(
  playgroundState,
  (state: Playground) => state.keystrokes
);

export const selectPerformance = createSelector(
  playgroundState,
  (state: Playground) => state.performance
);

export const selectPerformanceStart = createSelector(
  selectPerformance,
  (state: PlaygroundPerformance) => state.start
);

export const selectPerformanceEnd = createSelector(
  selectPerformance,
  (state: PlaygroundPerformance) => state.end
);
