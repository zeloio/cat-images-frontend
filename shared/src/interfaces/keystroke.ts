export interface Keystroke {
  value: string;
  userInput: string;
  state: KeyStrokeState;
  timestamp: number;
  source: KeyStrokeSource;
}

export type KeyStrokeSource = 'system' | 'user';
export type KeyStrokeState = 'matched' | 'untouched' | 'wrong' | 'missed';
