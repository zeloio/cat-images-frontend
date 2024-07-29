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
  },
  card: {
    padding: '64px',
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
    justifyContent: 'center',
    height: '50px',
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
    document.title = t('welcome.tab_name');
  }, [t]);

  return (
    <div {...stylex.props(viewStyle.base)}>
      <div {...stylex.props(viewStyle.card)}>
        <div {...stylex.props(viewStyle.centeredContainer)}>
          <div {...stylex.props(viewStyle.topContainer)}>
            <H1>Simple and user-friendly feline placeholders</H1>
            <Description>
              Just specify your desired image size (width and height) in the
              URL, and you'll receive a random cat image.
            </Description>
            <Description>
              Tip: To get a square image, just add the size.
            </Description>
          </div>

          <div {...stylex.props(viewStyle.midContainer)}>
            <GeneratedLink />
          </div>

          <div {...stylex.props(viewStyle.bottomContainer)}>
            <Toggle
              defaultChecked={permanentLinkState}
              icons={false}
              value="permanent"
              onChange={onPermalinkToggleChange}
            />

            <Description>
              Toogle me to get the same specific image everytime
            </Description>
          </div>
        </div>
      </div>
    </div>
  );
}
