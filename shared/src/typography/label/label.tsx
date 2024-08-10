import stylex, { StyleXStyles } from '@stylexjs/stylex';
import { memo } from 'react';
import { colors } from '../../../globalTokens.stylex';

const styles = stylex.create({
  base: {
    fontSize: '0.98rem',
    fontWeight: 'normal',
    margin: '4px 0',
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
  gray3: {
    color: colors.gray3,
  },
});

/* eslint-disable-next-line */
export interface LabelProps {
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'gray1' | 'gray2' | 'gray3';
  style?: StyleXStyles;
}

export const Label = memo(function label(props: LabelProps) {
  const { children, color = 'primary', style } = props;

  return (
    <span {...stylex.props(styles.base, colorStyles[color], style)}>
      {children}
    </span>
  );
});

export default Label;
