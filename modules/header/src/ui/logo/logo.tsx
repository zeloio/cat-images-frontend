import stylex from '@stylexjs/stylex';
import { memo } from 'react';

const logoStyles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  image: {},
  test: {},
});

/* eslint-disable-next-line */
export interface LogoProps {}

export const Logo = memo(function Logo(props: LogoProps) {
  return (
    <div {...stylex.props(logoStyles.base)}>
      <img src="https://picsum.photos/75/100" alt="logo" />
      <span>typesmoothly</span>
    </div>
  );
});
