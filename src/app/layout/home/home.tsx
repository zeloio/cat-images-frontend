import { Outlet } from 'react-router-dom';
import stylex from '@stylexjs/stylex';
import { useTranslation } from 'react-i18next';
import { Header } from '@library/header';
import { Footer } from '@library/footer';

const homeStyles = stylex.create({
  base: {
    height: '100%',
    minHeight: '600px',
  },
  start: {
    height: '140px',
  },
  mid: {
    minHeight: 'calc(100% - 215px)',
  },
  end: {
    height: '75px',
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
