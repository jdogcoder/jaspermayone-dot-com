import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useReportWebVitals } from "next/web-vitals";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  useReportWebVitals((metric) => {});

  return (
    <>
      <Analytics />
      {/* <GoogleTagManager gtmId="" /> */}
      <Script defer src="https://cdn.vercel-insights.com/v1/script.debug.js" />
      <Head>
        <title>Jasper Mayone</title>
        <meta name="title" content="Jasper Mayone" />
        <meta
          name="description"
          content="The personal & portfolio site of Jasper Mayone"
        />
        {/* TODO: Replace Keywords */}
        <meta name="keywords" content="key1, key2, key3" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* FIXME: Fix favicon version, was for testing only */}
        <link rel="icon" href="/favicon.ico?v=2" />
        <meta name="language" content="English" />
        {/*  */}
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jaspermayone.com" />
        <meta property="og:title" content="Jasper Mayone" />
        <meta
          property="og:description"
          content="The personal & portfolio site of Jasper Mayone."
        />
        <meta
          property="og:image"
          content="https://www.jaspermayone.com/assets/photography/IMG_0567.JPG"
        />
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.jaspermayone.com" />
        <meta property="twitter:title" content="Jasper Mayone" />
        <meta
          property="twitter:description"
          content="The personal & portfolio site of Jasper Mayone."
        />
        <meta
          property="twitter:image"
          content="https://www.jaspermayone.com/assets/photography/IMG_0567.JPG"
        />
        {/*  */}
        {/* <!-- Assets --> */}
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-touch-icon-57x57.png?v=2"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-touch-icon-60x60.png?v=2"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-touch-icon-72x72.png?v=2"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon-76x76.png?v=2"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-touch-icon-114x114.png?v=2"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-touch-icon-120x120.png?v=2"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-touch-icon-144x144.png?v=2"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-touch-icon-152x152.png?v=2"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon-180x180.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?v=2"
        />
        <link rel="manifest" href="/site.webmanifest?v=2" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg?v=2"
          color="#8dc157"
        />
        <link rel="icon" href="/favicon.ico?v=2" />
        <meta name="msapplication-TileColor" content="#333333" />
        <meta
          name="msapplication-TileImage"
          content="/mstile-144x144.png?v=2"
        />
        <meta name="theme-color" content="#333333" />
        {/*  */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
