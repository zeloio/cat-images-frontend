import stylex from '@stylexjs/stylex';
import { Logo } from '../ui';
import { memo } from 'react';
import { Flex } from 'antd';

const headerStyles = stylex.create({
  base: {
    height: '100%',
    width: '95%',
    margin: '0 auto',
    maxWidth: '1800px',
  },
});
/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header = memo(function Header(props: HeaderProps) {
  return (
    <Flex
      justify="space-between"
      align="center"
      {...stylex.props(headerStyles.base)}
    >
      <Logo></Logo>
    </Flex>
  );
});
