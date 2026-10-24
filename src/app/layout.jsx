import {NextIntlClientProvider} from 'next-intl';
import NavBar from './components/navbar';
import { getLocale, getMessages } from 'next-intl/server';
import './globals.css';

export default async function RootLayout({ children }) {
  const dir = await getLocale() == 'en' ? 'ltr' : 'rtl'
  const messages = await getMessages()

  return (
    <html lang={await getLocale()} dir={dir} className='smooth-scroll'>
      <body>
        <NextIntlClientProvider messages={messages}>
          <header>
            <NavBar/>
          </header>
          <main>
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}