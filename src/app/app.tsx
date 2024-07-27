import i18next from 'i18next';
import { Language } from '@shared';
import {
  selectLanguage,
  setLanguage,
  useAppDispatch,
  useAppSelector,
} from '@state';
import { languages } from './configs';
import { RouterProvider } from 'react-router-dom';
import { Splashscreen } from './views';
import { router } from './app.router';

export function App() {
  const dispatch = useAppDispatch();
  const clientLangId = i18next.language;
  const { id: storeLangId }: Language = useAppSelector(selectLanguage);

  if (clientLangId !== storeLangId) {
    const lang = languages.find((lang) => lang.id === clientLangId);

    lang && dispatch(setLanguage(lang));
  }

  return (
    <RouterProvider
      router={router}
      fallbackElement={<Splashscreen></Splashscreen>}
    />
  );
}

export default App;
