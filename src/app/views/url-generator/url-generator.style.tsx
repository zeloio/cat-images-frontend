import stylex from '@stylexjs/stylex';

const mobileBreakpoint = `@media (max-width: 768px)`;

export const viewStyle = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    minHeight: 'calc(100vh - 215px)',
    width: '100%',
    maxWidth: '1800px',
    margin: '0 auto',
    boxSizing: 'border-box',
    padding: '32px 0',
    backgroundColor: '#DFEBFF',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    gap: {
      default: '16px',
      [mobileBreakpoint]: '8px',
    },

    flexDirection: {
      default: 'row',
      [mobileBreakpoint]: 'column',
    },
    padding: {
      default: '64px',
      [mobileBreakpoint]: '32px 16px',
    },
  },
  settingsContainer: {
    display: 'flex',
    gap: '16px',
    flexDirection: 'column',
    flexGrow: 1,
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  topContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  midContainer: {
    width: '100%',
  },
  bottomContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: '20px',
    alignItems: 'center',
    alignContent: 'center',
    gap: '8px',
  },
});
