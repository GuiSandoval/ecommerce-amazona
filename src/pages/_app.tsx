import type { AppProps } from "next/app";
import { useEffect } from "react";
import "../styles/global.css";
import { StoreProvider } from "../utils/Store";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
};
export default MyApp;
