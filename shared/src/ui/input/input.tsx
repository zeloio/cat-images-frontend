import { memo } from 'react';
import stylex from '@stylexjs/stylex';
import { colors } from '../../../globalTokens.stylex';

const styles = stylex.create({
  base: {
    width: '100%',
    margin: '8px',
    color: colors.secondary,
    border: 'none',
    fontSize: '1rem',
    fontWeight: 'regular',
    letterSpacing: '0.05rem',
    height: '40px',
    [':focus']: {
      outline: 'none',
    },
  },
});

export interface InputProps {
  value: string;
}

export const Input = memo(function Input(props: InputProps) {
  const { value } = props;

  return (
    <input
      {...stylex.props(styles.base)}
      type="text"
      value={value}
      onChange={(e) => {}}
    />
  );
});
