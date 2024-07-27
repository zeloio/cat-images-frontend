import { useEffect } from 'react';
import stylex from '@stylexjs/stylex';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '@state';

const viewStyle = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    width: '95%',
    maxWidth: '1400px',
    margin: '0 auto',
    boxSizing: 'border-box',
    padding: '32px 0',
    backgroundColor: 'lightgray',
  },
  centeredContainer: {
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
  },
  topContainer: {
    display: 'flex',
    justifyContent: 'center',
    height: '50px',
    backgroundColor: 'lightblue',
  },
  midContainer: {
    height: '300px',
    backgroundColor: 'lightgreen',
  },
  bottomContainer: {
    display: 'flex',
    justifyContent: 'center',
    height: '50px',
    backgroundColor: 'lightcoral',
  },
});

export function UrlGeneratorView() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('welcome.tab_name');
  }, [t]);

  return (
    <div {...stylex.props(viewStyle.base)}>
      <div {...stylex.props(viewStyle.centeredContainer)}>
        <div {...stylex.props(viewStyle.topContainer)}>top</div>

        <div {...stylex.props(viewStyle.midContainer)}>mid</div>

        <div {...stylex.props(viewStyle.bottomContainer)}>bottom</div>
      </div>
    </div>
  );
}
