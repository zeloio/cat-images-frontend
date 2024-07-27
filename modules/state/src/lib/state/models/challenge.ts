import { ChallengeOptions, ChallengeSettings } from '@shared';

export const INITIAL_CHALLENGE_SETTINGS_VALUE: ChallengeSettings = {
  withPunctuation: false,
  withNumbers: false,
  mode: 'words',
  duration: 0,
  wordsCount: 0,
  fontSize: 1,
  dictionaryId: '',
  customContent: '',
};

export const INITIAL_CHALLENGE_OPTIONS_VALUE: ChallengeOptions = {
  dictionary: [],
  durations: [],
  wordsCounts: [],
};
