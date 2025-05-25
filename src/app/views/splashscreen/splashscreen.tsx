import stylex from '@stylexjs/stylex';
// import { RotatingLines } from 'react-loader-spinner';

const splashscreenStyles = stylex.create({
  base: {
    height: '100vh',
    alignItems: 'center',
  },
});

export function Splashscreen() {
  return <span {...stylex.props(splashscreenStyles.base)}>Spashscreen</span>;
}
