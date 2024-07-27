import { useEffect } from 'react';
import stylex from '@stylexjs/stylex';
import { Trans, useTranslation } from 'react-i18next';

const errorPageStyles = stylex.create({
  base: {
    marginBottom: '52px',
  },
});

export function ErrorView() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('error.tab_name');
  }, []);

  return (
    <>
      <span {...stylex.props(errorPageStyles.base)}>Title : Error</span>
    </>
  );
}
