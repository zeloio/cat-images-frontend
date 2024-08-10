import stylex from '@stylexjs/stylex';
import { memo } from 'react';
import logo from '../../../assets/logo/logo.png';
import { H2, Label } from '@shared';
import { useTranslation } from 'react-i18next';

const styles = stylex.create({
  base: {},
  imageBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '8px',
  },
  title: {
    fontFamily: 'Work Sans',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    margin: '16px 0 0 8px',
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
    <div {...stylex.props(styles.base)}>
      <div {...stylex.props(styles.imageBox)}>
        <img src={logo} alt="logo" />

        <H2 style={styles.title}>{t('header.title')}</H2>
      </div>

      <div>
        <Label style={styles.description}>{t('header.subtitle')}</Label>
      </div>
    </div>
  );
});
