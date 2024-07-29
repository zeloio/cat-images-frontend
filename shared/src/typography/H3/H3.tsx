import stylex from '@stylexjs/stylex';
import { memo } from 'react';

const styles = stylex.create({
  base: {
    fontSize: '1.7rem',
    fontWeight: 'bold',
  },
});

/* eslint-disable-next-line */
export interface H3Props {
  children: React.ReactNode;
}

export const H3 = memo(function H3(props: H3Props) {
  const { children } = props;
  return <h3 {...stylex.props(styles.base)}>{children}</h3>;
});

export default H3;
