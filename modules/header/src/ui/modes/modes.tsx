import { Button } from '@shared';
import stylex from '@stylexjs/stylex';
import { memo } from 'react';
import { Menu, MenuItem } from 'semantic-ui-react';

const modesStyles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
  },
});

/* eslint-disable-next-line */
export interface ModesProps {}

export const Modes = memo(function Modes(props: ModesProps) {
  return (
    <div {...stylex.props(modesStyles.base)}>
      <Button size="lg" type="clear">
        Challenge
      </Button>

      <Button size="lg" type="clear">
        Practice
      </Button>
    </div>
  );
});
