import '../styles/globals.css';
import type { AppProps } from 'next/app';
import GlobalContext from '../src/context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // @ts-ignore
    <GlobalContext>
      <Component {...pageProps} />
    </GlobalContext>
  );
}

export default MyApp;
