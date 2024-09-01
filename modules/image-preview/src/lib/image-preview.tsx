import { settingsState, useAppSelector } from '@state';
import stylex from '@stylexjs/stylex';
import { memo, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';

const styles = stylex.create({
  base: {
    maxWidth: '500px',
    maxHeight: '500px',
    boxShadow: '0px -6px 16px -6px rgba(0, 0, 0, 0.3);',
    borderRadius: '8px',
  },
});

/* eslint-disable-next-line */
export interface ImagePreviewProps {}

export const ImagePreview = memo(function ImagePreview(
  props: ImagePreviewProps
) {
  const settings = useAppSelector(settingsState);
  const [generatedLink, setGeneratedLink] = useState('');

  useEffect(() => {
    setGeneratedLink(
      `https://api.images.cat/${settings.width || settings.height}/${
        settings.height || settings.width
      }${settings.permanent ? `/${uuidv4()}` : ``}`
    );
  }, [settings]);

  return (
    <img
      src={generatedLink}
      alt="Generated Image"
      {...stylex.props(styles.base)}
    />
  );
});
