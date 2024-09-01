import { memo } from 'react';
import stylex from '@stylexjs/stylex';
import { Button, Icon } from '@shared';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const copyrightStyles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10px',
  },
});

/* eslint-disable-next-line */
export interface CopyrightProps {}

export const Copyright = memo(function Copyright(props: CopyrightProps) {
  return (
    <div {...stylex.props(copyrightStyles.base)}>
      <Button size="sm" type="clear">
        Copyright 2024 &#169;
      </Button>
    </div>
  );
});
