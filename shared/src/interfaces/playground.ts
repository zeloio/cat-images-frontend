import { Keystroke } from './keystroke';

export interface Playground {
  keystrokes: Keystroke[];
  index: number;
  performance: PlaygroundPerformance;
}

export interface PlaygroundPerformance {
  start: number;
  end: number;
}
