import { configureStore } from '@reduxjs/toolkit';
import { translationReducer } from './entities/translation';
import { settingsReducer } from './entities';

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    translation: translationReducer,
  },
});

// infer the 'RootState' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: { formData : FormData, navigation : string }
export type AppDispatch = typeof store.dispatch;
