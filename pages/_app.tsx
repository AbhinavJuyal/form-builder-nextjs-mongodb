import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Form Builder</title>
      </Head>
      <div
        className="w-full h-screen bg-base-200
      "
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}
