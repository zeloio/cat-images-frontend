import { createBrowserRouter } from 'react-router-dom';
import { HomeLayout, HomeLayoutLoader, LayoutErrorBoundary } from './layout';
import { UrlGeneratorView, UrlGeneratorViewLoader } from './views';

export const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    loader: HomeLayoutLoader,
    Component: HomeLayout,
    ErrorBoundary: LayoutErrorBoundary,
    children: [
      {
        index: true,
        loader: UrlGeneratorViewLoader,
        Component: UrlGeneratorView,
      },
      {
        path: '*',
        loader: UrlGeneratorViewLoader,
        Component: UrlGeneratorView,
      },
    ],
  },
]);
