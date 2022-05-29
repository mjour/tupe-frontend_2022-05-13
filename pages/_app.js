/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import { useUserAgent } from 'next-useragent';
import '../styles/globals.css';
import '../styles/style.scss';

function MyApp({ Component, pageProps }) {
  let viewportContent = 'width=device-width, minimum-scale=0, maximum-scale=1.0';
  const ua = useUserAgent(MyApp.uaString);
  if (ua.isMobile && ua.isIos) {
    viewportContent = 'width=1420,user-scalable=1';
  }

  return (
    <>
      <Head>
        <meta name='viewport' content={viewportContent} />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='renderer' content='webkit' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
