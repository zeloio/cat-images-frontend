import stylex from '@stylexjs/stylex';
import { Input, Label } from '@shared';
import {
  selectHeight,
  selectWidth,
  setHeight,
  setWidth,
  useAppDispatch,
  useAppSelector,
} from '@state';
import { FormEventHandler, useCallback } from 'react';

const styles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'row',
    gap: '16px',
    justifyContent: 'center',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    width: '166px',
    borderRadius: '8px',
    padding: '4px 0',
  },
  labelLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6px 18px',
    fontWeight: 'bold',
    borderRight: '1px solid #f0f0f0',
  },
  labelRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6px 12px',
    fontWeight: '500',
  },
  input: {
    margin: '0',
    textAlign: 'right',
    fontWeight: '600',
  },
});

const MIN_WIDTH = 1;
const MAX_WIDTH = 2520;
const MIN_HEIGHT = 1;
const MAX_HEIGHT = 1440;

/* eslint-disable-next-line */
export interface LinkOptionsProps {}

export function LinkOptions(props: LinkOptionsProps) {
  const width = useAppSelector(selectWidth);
  const height = useAppSelector(selectHeight);
  const dispatch = useAppDispatch();

  const handleWidthChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (e.currentTarget.value === '') {
        dispatch(setWidth(0));
        return;
      }

      const newValue = parseInt(e.currentTarget.value, 10) || MIN_WIDTH;
      const clampedValue = Math.min(Math.max(newValue, MIN_WIDTH), MAX_WIDTH);

      dispatch(setWidth(clampedValue));
    },
    []
  );

  const handleHeightChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (e.currentTarget.value === '') {
        dispatch(setHeight(0));
        return;
      }

      const newValue = parseInt(e.currentTarget.value, 10) || MIN_HEIGHT;
      const clampedValue = Math.min(Math.max(newValue, MIN_HEIGHT), MAX_HEIGHT);

      dispatch(setHeight(clampedValue));
    },
    []
  );

  return (
    <div {...stylex.props(styles.base)}>
      <div {...stylex.props(styles.inputContainer)}>
        <Label style={styles.labelLeft} color="gray3">
          W
        </Label>

        <Input
          value={width}
          style={styles.input}
          color="gray2"
          onChange={handleWidthChange}
        ></Input>

        <Label style={styles.labelRight} color="gray3">
          px
        </Label>
      </div>

      <div {...stylex.props(styles.inputContainer)}>
        <Label style={styles.labelLeft} color="gray3">
          H
        </Label>

        <Input
          value={height}
          style={styles.input}
          color="gray2"
          onChange={handleHeightChange}
        ></Input>

        <Label style={styles.labelRight} color="gray3">
          px
        </Label>
      </div>
    </div>
  );
}

export default LinkOptions;
