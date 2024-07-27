import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LANGUAGE_INITIAL_VALUE as initialState } from '../../models';
import { Language } from '@shared';
import i18next from 'i18next';

const translationSlice = createSlice({
  name: 'translation',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setLanguageAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        setLanguageAsync.fulfilled,
        (state, action: PayloadAction<Language>) => {
          state.isLoading = false;
          state.language = action.payload;
        }
      )
      .addCase(setLanguageAsync.rejected, (state) => {
        state.isLoading = false;
        state.language = initialState.language;
      });
  },
});

/**
 * define set language effects
 * it calls i18next change language method
 */
export const setLanguageAsync = createAsyncThunk<Language, Language>(
  'translation/setLanguage',
  async (language: Language, { rejectWithValue }) => {
    try {
      const result = await i18next.changeLanguage(language.id);

      if (!result) throw Error;

      return language;
    } catch (err) {
      return rejectWithValue('');
    }
  }
);

/**
 * export actions from the slice method result
 */
export const { setLanguage } = translationSlice.actions;

/**
 * export reducers from the slice method result
 */
export const translationReducer = translationSlice.reducer;
