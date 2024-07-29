import { memo } from 'react';
import stylex from '@stylexjs/stylex';
import { Button, Icon } from '@shared';
import { faHeart, faLink } from '@fortawesome/free-solid-svg-icons';

const linksStyles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
  },
});

/* eslint-disable-next-line */
export interface LinksProps {}

export const Links = memo(function Links(props: LinksProps) {
  return (
    <div {...stylex.props(linksStyles.base)}>
      <Button size="sm" type="clear">
        <Icon name={faHeart} size="sm" />
        Made with love by Zelo.io
      </Button>
    </div>
  );
});
