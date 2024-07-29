import stylex from '@stylexjs/stylex';
import { memo } from 'react';

const styles = stylex.create({
  base: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
});

/* eslint-disable-next-line */
export interface H2Props {
  children: React.ReactNode;
}

export const H2 = memo(function H2(props: H2Props) {
  const { children } = props;
  return <h2 {...stylex.props(styles.base)}>{children}</h2>;
});

export default H2;
