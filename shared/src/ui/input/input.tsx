import { DOMAttributes, memo } from 'react';
import stylex, { StyleXStyles } from '@stylexjs/stylex';
import { colors } from '../../../globalTokens.stylex';

const styles = stylex.create({
  base: {
    width: '100%',
    margin: '8px',
    padding: '0',
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

const colorStyles = stylex.create({
  primary: {
    color: colors.primary,
  },
  secondary: {
    color: colors.secondary,
  },
  gray1: {
    color: colors.gray1,
  },
  gray2: {
    color: colors.gray2,
  },
});

export interface InputProps extends DOMAttributes<HTMLInputElement> {
  value: string | number;
  color?: 'primary' | 'secondary' | 'gray1' | 'gray2';
  style?: StyleXStyles;
}

export const Input = memo(function Input(props: InputProps) {
  const { value, color = 'primary', style, onChange } = props;

  return (
    <input
      {...stylex.props(styles.base, colorStyles[color], style)}
      type="text"
      defaultValue={value}
      onChange={onChange}
    />
  );
});
