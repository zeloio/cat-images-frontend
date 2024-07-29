import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import './i18n';
import './styles.scss';
import { Provider } from 'react-redux';
import { store } from '@state';
import 'react-toggle/style.css';

function init() {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );

  console.log(import.meta.env.IC_BASE_URL);

  root.render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  );
}

init();
