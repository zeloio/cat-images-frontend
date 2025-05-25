import stylex from '@stylexjs/stylex';
import { memo } from 'react';
import logo from '../../../assets/logo/logo.png';
import { useTranslation } from 'react-i18next';
import { Flex, Typography } from 'antd';

const { Title, Text } = Typography;

const styles = stylex.create({
  title: {
    fontFamily: 'Work Sans',
    margin: '8px 0 0 0',
  },
  description: {
    fontSize: '1.2rem',
  },
});

/* eslint-disable-next-line */
export interface LogoProps {}

export const Logo = memo(function Logo(props: LogoProps) {
  const { t } = useTranslation();

  return (
    <Flex vertical gap={'small'}>
      <Flex gap={'small'} align="center">
        <img src={logo} alt="logo" height={60} width={38} />
        <Title {...stylex.props(styles.title)} level={2}>
          {t('header.title')}
        </Title>
      </Flex>

      <Text {...stylex.props(styles.description)}>{t('header.subtitle')}</Text>
    </Flex>
  );
});
