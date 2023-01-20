import { ThemeProvider } from "next-themes";
import Head from "next/head";
import "../css/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My new cool app</title>
      </Head>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
