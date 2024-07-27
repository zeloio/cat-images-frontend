import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INITIAL_PLAYGROUND_VALUE as initialState } from '../../models/playground';
import { Keystroke } from '@shared';

const playgroundSlice = createSlice({
  name: 'playground',
  initialState,
  reducers: {
    /**
     * define the action to add a keystroke
     */
    addKeystroke: (state, action: PayloadAction<Keystroke>) => {
      const { userInput, timestamp, source } = action.payload;

      if (userInput === state.keystrokes[state.index].value) {
        state.keystrokes[state.index].userInput = userInput;
        state.keystrokes[state.index].timestamp = timestamp;
        state.keystrokes[state.index].state = 'matched';
      } else if (state.keystrokes[state.index].value === ' ') {
        state.keystrokes.splice(state.index, 0, {
          value: userInput,
          userInput: userInput,
          source: source,
          state: 'wrong',
          timestamp: timestamp,
        });
      } else {
        state.keystrokes[state.index].userInput = userInput;
        state.keystrokes[state.index].timestamp = timestamp;
        state.keystrokes[state.index].state = 'missed';
      }

      state.index++;
    },
    /**
     * define the action to remove a keystroke
     */
    removeKeystroke: (state) => {
      state.index--;

      if (state.keystrokes[state.index].source === 'system') {
        state.keystrokes[state.index].userInput = '';
        state.keystrokes[state.index].timestamp = 0;
        state.keystrokes[state.index].state = 'untouched';
      } else {
        state.keystrokes.splice(state.index, 1);
      }
    },
    setPerformanceStart: (state, action: PayloadAction<number>) => {
      state.performance.start = action.payload;
    },
    setPerformanceEnd: (state, action: PayloadAction<number>) => {
      state.performance.end = action.payload;
    },
  },
});

export const { addKeystroke, removeKeystroke } = playgroundSlice.actions;

export const playgroundReducer = playgroundSlice.reducer;
