import { Fragment } from "react";
import Head from "next/head";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./global.css";

const chakraTheme = extendTheme({
  styles: { global: { img: { maxWidth: "unset" } } },
  fonts: { heading: "Montserrat", body: "Montserrat" },
});
const emotionCache = createCache({
  key: "emotion-cache",
  prepend: true,
});

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>hOTELLO</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <CacheProvider value={emotionCache}>
        <ChakraProvider theme={chakraTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </CacheProvider>
    </Fragment>
  );
}

export default MyApp;
