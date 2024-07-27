import { configureStore } from '@reduxjs/toolkit';
import { translationReducer } from './entities/translation';
import { challengeOptionsReducer } from './entities/challengeOptions/challenge-options.slice';
import { challengeSettingsReducer } from './entities/challengeSettings/challenge-settings.slice';
import { playgroundReducer } from './entities';

export const store = configureStore({
  reducer: {
    challengeOptions: challengeOptionsReducer,
    challengeSettings: challengeSettingsReducer,
    playground: playgroundReducer,
    translation: translationReducer,
  },
});

// infer the 'RootState' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: { formData : FormData, navigation : string }
export type AppDispatch = typeof store.dispatch;
