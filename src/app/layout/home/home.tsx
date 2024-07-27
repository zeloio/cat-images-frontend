import { Outlet } from 'react-router-dom';
import stylex from '@stylexjs/stylex';
import { useTranslation } from 'react-i18next';
import { Header } from '@library/header';
import { Footer } from '@library/footer';

const homeStyles = stylex.create({
  base: {
    height: '100%',
    backgroundColor: '#bbb',
  },
  start: {
    height: '100px',
    backgroundColor: '#999',
  },
  mid: {
    height: 'calc(100% - 175px)',
    backgroundColor: '#aaa',
  },
  end: {
    height: '75px',
    backgroundColor: '#bbb',
  },
});

export function HomeLayout() {
  const { t } = useTranslation();

  return (
    <div {...stylex.props(homeStyles.base)}>
      <div {...stylex.props(homeStyles.start)}>
        <Header></Header>
      </div>

      <div {...stylex.props(homeStyles.mid)}>
        <Outlet></Outlet>
      </div>

      <div {...stylex.props(homeStyles.end)}>
        <Footer></Footer>
      </div>
    </div>
  );
}
