import { memo } from 'react';
import stylex from '@stylexjs/stylex';
import { Button, Icon } from '@shared';
import { faBell, faPortrait } from '@fortawesome/free-solid-svg-icons';

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
      <Button size="xs" type="clear">
        <Icon name={faBell} size="xs" />
        Links a qualcosa
      </Button>

      <Button size="sm" type="clear">
        <Icon name={faPortrait} size="sm" />
        Anche questo
      </Button>

      <Button size="lg" type="clear">
        <Icon name={faBell} size="lg" />
        Links a qualcosa
      </Button>

      <Button size="xl" type="clear">
        <Icon name={faBell} size="xl" />
        Links a qualcosa
      </Button>
    </div>
  );
});
