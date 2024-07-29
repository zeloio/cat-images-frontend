import stylex, { StyleXStyles } from '@stylexjs/stylex';
import { colors } from '../../../globalTokens.stylex';
import { DOMAttributes, ReactNode, memo } from 'react';

const buttonStyles = stylex.create({
  base: {
    border: '0',
    borderRadius: '12px',
    backgroundColor: 'none',
    cursor: 'pointer',
    transition: '0.2s',
  },
  zero: {
    height: 'auto',
  },
  xs: {
    borderRadius: '5px',
    padding: '2px 5px',
  },
  sm: {
    borderRadius: '8px',
    padding: '5px',
  },
  md: {
    borderRadius: '8px',
    padding: '5px',
  },
  lg: {
    borderRadius: '10px',
    padding: '10px',
  },
  xl: {
    borderRadius: '12px',
    padding: '15px',
  },
  clear: {
    backgroundColor: colors.clear,
  },
  primary: {
    backgroundColor: colors.primary,
    color: colors.white,
  },
  secondary: {
    backgroundColor: colors.secondary,
    color: colors.white,
  },
  error: {
    backgroundColor: colors.red,
    color: colors.white,
  },
  accent: {
    backgroundColor: colors.green,
    color: colors.white,
  },
});

const innerContainerStyles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    gap: '5px',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  zero: {
    height: 'auto',
  },
  xs: {
    height: '20px',
    minWidth: '20px',
  },
  sm: {
    height: '26px',
    minWidth: '26px',
  },
  md: {
    height: '30px',
    minWidth: '26px',
  },
  lg: {
    height: '28px',
    minWidth: '28px',
  },
  xl: {
    height: '34px',
    minWidth: '34px',
  },
  width: (value: number) => ({
    width: `${value}px`,
  }),
});

interface ButtonProps extends DOMAttributes<HTMLButtonElement> {
  type: 'primary' | 'secondary' | 'error' | 'accent' | 'clear';
  size: 'zero' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  direction: 'row' | 'column';
  width: number;
  style: StyleXStyles;
  children: ReactNode;
}

export const Button = memo(function Button({
  type = 'primary',
  size = 'sm',
  direction = 'row',
  width = 0,
  onClick,
  style,
  children,
}: Partial<ButtonProps>) {
  return (
    <button
      onClick={onClick}
      {...stylex.props(
        buttonStyles.base,
        buttonStyles[type],
        buttonStyles[size],
        style
      )}
    >
      <div
        {...stylex.props(
          innerContainerStyles.base,
          innerContainerStyles[direction],
          innerContainerStyles[size],
          !!width && innerContainerStyles.width(width)
        )}
      >
        {children}
      </div>
    </button>
  );
});
