import stylex from '@stylexjs/stylex';
import { memo } from 'react';

const styles = stylex.create({
  base: {
    fontSize: '0.98rem',
    fontWeight: 'normal',
    margin: '4px 0',
  },
});

/* eslint-disable-next-line */
export interface DescriptionProps {
  children: React.ReactNode;
}

export const Description = memo(function Description(props: DescriptionProps) {
  const { children } = props;
  return <span {...stylex.props(styles.base)}>{children}</span>;
});

export default Description;
