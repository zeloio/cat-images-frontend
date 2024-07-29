import stylex from '@stylexjs/stylex';
import { memo } from 'react';

const styles = stylex.create({
  base: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
  },
});

/* eslint-disable-next-line */
export interface H4Props {
  children: React.ReactNode;
}

export const H4 = memo(function H4(props: H4Props) {
  const { children } = props;
  return <h4 {...stylex.props(styles.base)}>{children}</h4>;
});

export default H4;
