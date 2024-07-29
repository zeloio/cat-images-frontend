import { Button, Icon, Input } from '@shared';
import { settingsState, useAppSelector } from '@state';
import stylex from '@stylexjs/stylex';
import { memo, useEffect, useState } from 'react';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import { colors } from '../../globalTokens.stylex';

const styles = stylex.create({
  base: {
    backgroundColor: 'white',
    borderRadius: '4px',
    padding: '4px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '48px',
    width: '100%',
  },
  leftIconBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6px 18px',
    color: colors.gray3,
    borderRight: '1px solid #f0f0f0',
  },
  copyButton: {
    width: '120px',
  },
});

/* eslint-disable-next-line */
export interface GeneratedLinkProps {}

export const GeneratedLink = memo(function GeneratedLink(
  props: GeneratedLinkProps
) {
  const settings = useAppSelector(settingsState);
  const [generatedLink, setGeneratedLink] = useState('');
  useEffect(() => {
    setGeneratedLink(
      `https://images.cat/${settings.width}/${settings.height}${
        settings.permanent ? `/${uuidv4()}` : ``
      }`
    );
  }, [settings]);

  return (
    <div {...stylex.props(styles.base)}>
      <div {...stylex.props(styles.leftIconBox)}>
        <Icon name={faLink} size="lg" />
      </div>

      <Input value={generatedLink}></Input>

      <Button style={styles.copyButton} size="md" type="secondary">
        Copy
      </Button>
    </div>
  );
});
