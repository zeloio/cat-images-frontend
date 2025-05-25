import stylex from '@stylexjs/stylex';

export const viewStyle = stylex.create({
  base: {
    height: '100%',
    minHeight: 'calc(100vh - 215px)',
    width: '100%',
    maxWidth: '1800px',
    margin: '0 auto',
    boxSizing: 'border-box',
    padding: '32px',
    backgroundColor: '#DFEBFF',
  },
  row: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  imagePreview: {
    height: '100%',
  },
});
