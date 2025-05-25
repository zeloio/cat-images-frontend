import { Outlet } from 'react-router-dom';
import stylex from '@stylexjs/stylex';
// import { useTranslation } from 'react-i18next';
import { Header as ICHeader } from '@library/header';
import { Footer as ICFooter } from '@library/footer';
import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';

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
  // const { t } = useTranslation();

  return (
    <Layout {...stylex.props(homeStyles.base)}>
      <Header {...stylex.props(homeStyles.start)}>
        <ICHeader></ICHeader>
      </Header>

      <Content {...stylex.props(homeStyles.mid)}>
        <Outlet></Outlet>
      </Content>

      <Footer {...stylex.props(homeStyles.end)}>
        <ICFooter></ICFooter>
      </Footer>
    </Layout>
  );
}
