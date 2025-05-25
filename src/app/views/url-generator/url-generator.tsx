import { ChangeEventHandler, useCallback, useEffect } from 'react';
import stylex from '@stylexjs/stylex';
import { useTranslation } from 'react-i18next';
import {
  selectPermanent,
  setPermanent,
  useAppDispatch,
  useAppSelector,
} from '@state';
import { Description } from '@shared';
import Toggle from 'react-toggle';
import { GeneratedLink } from '@library/generated-link';
import { LinkOptions } from '@library/link-options';
import { ToastContainer } from 'react-toastify';
import { ImagePreview } from '@library/image-preview';
import { viewStyle } from './url-generator.style';
import { Col, Flex, Row, Switch, Typography } from 'antd';
import Title from 'antd/es/typography/Title';

const { Text } = Typography;

export function UrlGeneratorView() {
  const dispatch = useAppDispatch();
  const permanentLinkState = useAppSelector(selectPermanent);
  const { t } = useTranslation();

  const onPermalinkToggleChange = useCallback(
    (checked: boolean) => {
      dispatch(setPermanent(checked));
    },
    [dispatch]
  );

  useEffect(() => {
    document.title = t('welcome.title');
  }, [t]);

  return (
    <>
      <Flex justify="center" align="center" {...stylex.props(viewStyle.base)}>
        <Row gutter={[12, 24]} {...stylex.props(viewStyle.row)}>
          <Col xs={24} sm={24} md={12} lg={14} xl={16}>
            <Flex justify="center" align="center">
              <Flex vertical gap={'middle'}>
                <Flex vertical align="start">
                  <Title level={2}>{t('home.title')}</Title>

                  <Text>{t('home.description')}</Text>

                  <Text>{t('home.tips')}</Text>
                </Flex>

                <LinkOptions />

                <GeneratedLink />

                <Flex gap={'middle'} justify="end" align="center">
                  <Text>{t('home.toggle_description')}</Text>

                  <Switch
                    defaultChecked
                    value={permanentLinkState}
                    onChange={onPermalinkToggleChange}
                  />
                </Flex>
              </Flex>
            </Flex>
          </Col>

          <Col xs={24} sm={24} md={12} lg={10} xl={8}>
            <Flex
              justify="center"
              align="center"
              {...stylex.props(viewStyle.imagePreview)}
            >
              <ImagePreview />
            </Flex>
          </Col>
        </Row>
      </Flex>

      <ToastContainer />
    </>
  );
}
