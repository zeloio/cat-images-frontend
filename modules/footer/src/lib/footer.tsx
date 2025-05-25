import stylex from '@stylexjs/stylex';
import { memo } from 'react';
import { Flex, Typography } from 'antd';
import { Icon } from '@shared';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const { Text } = Typography;

const footerStyles = stylex.create({
  base: {
    height: '100%',
    width: '95%',
    margin: '0 auto',
    maxWidth: '1800px',
  },
});
/* eslint-disable-next-line */
export interface FooterProps {}

export const Footer = memo(function Footer(props: FooterProps) {
  return (
    <Flex
      justify="space-between"
      align="center"
      {...stylex.props(footerStyles.base)}
    >
      <Flex gap={'small'}>
        <Icon name={faHeart} size="sm" />
        <Text>Made with love by Zelo.io</Text>
      </Flex>

      <Text>Copyright 2024 &#169;</Text>
    </Flex>
  );
});
