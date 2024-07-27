import { Dictionary } from './dictionary';

export interface ChallengeSettings {
  withPunctuation: boolean;
  withNumbers: boolean;
  mode: ChallengeMode;
  duration: number;
  wordsCount: number;
  fontSize: number;
  dictionaryId: string;
  customContent: string;
}

export type ChallengeMode = 'code' | 'time' | 'words' | 'practice' | 'custom';

export interface ChallengeOptions {
  dictionary: Dictionary[];
  durations: number[];
  wordsCounts: number[];
}
