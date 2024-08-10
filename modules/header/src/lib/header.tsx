import stylex from '@stylexjs/stylex';
import { Logo } from '../ui';
import { memo } from 'react';

const headerStyles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%',
    width: '95%',
    margin: '0 auto',
    maxWidth: '1800px',
  },
  side: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10px',
  },
});
/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header = memo(function Header(props: HeaderProps) {
  return (
    <div {...stylex.props(headerStyles.base)}>
      <div {...stylex.props(headerStyles.side)}>
        <Logo></Logo>
      </div>

      <div {...stylex.props(headerStyles.side)}></div>
    </div>
  );
});
