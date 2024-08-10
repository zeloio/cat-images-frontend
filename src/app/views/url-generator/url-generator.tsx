import { ChangeEventHandler, useCallback, useEffect } from 'react';
import stylex from '@stylexjs/stylex';
import { useTranslation } from 'react-i18next';
import {
  selectPermanent,
  setPermanent,
  useAppDispatch,
  useAppSelector,
} from '@state';
import { Description, H1 } from '@shared';
import Toggle from 'react-toggle';
import { GeneratedLink } from '@library/generated-link';
import { LinkOptions } from '@library/link-options';
import { ToastContainer } from 'react-toastify';

const mobileBreakpoint = `@media (max-width: 768px)`;

const viewStyle = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    maxWidth: '1400px',
    margin: '0 auto',
    boxSizing: 'border-box',
    padding: '32px 0',
  },
  card: {
    padding: {
      default: '64px',
      [mobileBreakpoint]: '32px 16px',
    },
    backgroundColor: '#F4F7FC',
  },
  centeredContainer: {
    width: '95%',
    margin: '0 auto',
    maxWidth: '800px',
    display: 'flex',
    gap: '16px',
    flexDirection: 'column',
  },
  topContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  midContainer: {},
  bottomContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: '20px',
    alignItems: 'center',
    alignContent: 'center',
    gap: '8px',
  },
});

export function UrlGeneratorView() {
  const dispatch = useAppDispatch();
  const permanentLinkState = useAppSelector(selectPermanent);
  const { t } = useTranslation();

  const onPermalinkToggleChange: ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (event) => {
        dispatch(setPermanent(event.target.checked));
      },
      [dispatch]
    );

  useEffect(() => {
    document.title = t('welcome.title');
  }, [t]);

  return (
    <>
      <div {...stylex.props(viewStyle.base)}>
        <div {...stylex.props(viewStyle.card)}>
          <div {...stylex.props(viewStyle.centeredContainer)}>
            <div {...stylex.props(viewStyle.topContainer)}>
              <H1>{t('home.title')}</H1>
              <Description>{t('home.description')}</Description>
              <Description>{t('home.tips')}</Description>
            </div>

            <div {...stylex.props(viewStyle.midContainer)}>
              <LinkOptions />
            </div>

            <div {...stylex.props(viewStyle.midContainer)}>
              <GeneratedLink />
            </div>

            <div {...stylex.props(viewStyle.bottomContainer)}>
              <Description>{t('home.toggle_description')}</Description>

              <Toggle
                defaultChecked={permanentLinkState}
                icons={false}
                className="custom-react-toggle"
                value="permanent"
                onChange={onPermalinkToggleChange}
              />
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}
