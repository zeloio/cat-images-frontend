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
import { ImagePreview } from '@library/image-preview';
import { viewStyle } from './url-generator.style';

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
          <div {...stylex.props(viewStyle.settingsContainer)}>
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

          <div {...stylex.props(viewStyle.imageContainer)}>
            <ImagePreview />
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}
