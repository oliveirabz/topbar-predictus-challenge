import Head from 'next/head';
import { Inter } from 'next/font/google';
import type { AppProps } from 'next/app';

import 'bootstrap/dist/css/bootstrap.min.css';

import '@/styles/_global.scss';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '700'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Head>
        <title>Predictus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
