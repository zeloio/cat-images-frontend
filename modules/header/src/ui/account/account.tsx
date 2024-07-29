import { memo } from 'react';
import stylex from '@stylexjs/stylex';
import { Button, Icon } from '@shared';
import { faBell, faPortrait } from '@fortawesome/free-solid-svg-icons';

const accountStyles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
  },
});

/* eslint-disable-next-line */
export interface AccountProps {}

export const Account = memo(function Account(props: AccountProps) {
  return (
    <div {...stylex.props(accountStyles.base)}>
      <Button size="sm" type="clear">
        <Icon name={faBell} size="lg" />
      </Button>

      <Button size="sm" type="clear">
        <Icon name={faPortrait} size="lg" />
      </Button>
    </div>
  );
});
