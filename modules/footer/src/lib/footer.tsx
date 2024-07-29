import stylex from '@stylexjs/stylex';
import { Copyright, Links } from '../ui';
import { memo } from 'react';

const footerStyles = stylex.create({
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
export interface FooterProps {}

export const Footer = memo(function Footer(props: FooterProps) {
  return (
    <div {...stylex.props(footerStyles.base)}>
      <div {...stylex.props(footerStyles.side)}>
        <Links></Links>
      </div>

      <div {...stylex.props(footerStyles.side)}>
        <Copyright></Copyright>
      </div>
    </div>
  );
});
