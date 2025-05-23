import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import './i18n';
import './styles.scss';
import { Provider } from 'react-redux';
import { store } from '@state';
import 'react-toggle/style.css';
import 'core-js';
import 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only';

function init() {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );

  root.render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  );
}

init();
