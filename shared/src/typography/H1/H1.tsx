import stylex from '@stylexjs/stylex';
import { memo } from 'react';

const styles = stylex.create({
  base: {
    fontSize: '2.2rem',
    fontWeight: 'bold',
    margin: '12px 0',
  },
});

/* eslint-disable-next-line */
export interface H1Props {
  children: React.ReactNode;
}

export const H1 = memo(function H1(props: H1Props) {
  const { children } = props;
  return <h1 {...stylex.props(styles.base)}>{children}</h1>;
});

export default H1;
