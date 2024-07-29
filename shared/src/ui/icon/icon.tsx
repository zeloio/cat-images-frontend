import stylex, { StyleXStyles } from '@stylexjs/stylex';
import { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';

const iconStyles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  xs: {
    height: '18px',
    width: '18px',
    fontSize: '10px',
  },
  sm: {
    height: '24px',
    width: '24px',
    fontSize: '16px',
  },
  lg: {
    height: '28px',
    width: '28px',
    fontSize: '17px',
  },
  xl: {
    height: '35px',
    width: '35px',
    fontSize: '17px',
  },
});

interface IconProps {
  name: IconDefinition;
  size: 'xs' | 'sm' | 'lg' | 'xl';
  style: StyleXStyles;
}

export const Icon = memo(function Icon({
  name,
  size = 'sm',
  style,
}: Partial<IconProps>) {
  return (
    <span {...stylex.props(iconStyles.base, iconStyles[size], style)}>
      {name && <FontAwesomeIcon icon={name} size={size as SizeProp} />}
    </span>
  );
});
