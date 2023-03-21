import GlobalStyle from "@/styles";
import Head from "next/head";
import Navigation from "./components/Navigation";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
        <meta
          name="PICJUDGE"
          content="PICJUDGE is a website that allows users to view and judge images."
        />
      </Head>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}
