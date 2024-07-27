import { memo } from 'react';
import stylex from '@stylexjs/stylex';
import { Button, Icon } from '@shared';
import { faBell, faPortrait } from '@fortawesome/free-solid-svg-icons';

const quickActionsStyles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
  },
});

/* eslint-disable-next-line */
export interface QuickActionsProps {}

export const QuickActions = memo(function QuickActions(
  props: QuickActionsProps
) {
  return (
    <div {...stylex.props(quickActionsStyles.base)}>
      <Button size="sm" type="clear">
        <Icon name={faBell} size="lg" />
      </Button>

      <Button size="sm" type="clear">
        <Icon name={faPortrait} size="lg" />
      </Button>
    </div>
  );
});
