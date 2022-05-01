import type { AppProps } from "next/app";
import { useEffect } from "react";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return <Component {...pageProps} />;
};
export default MyApp;
