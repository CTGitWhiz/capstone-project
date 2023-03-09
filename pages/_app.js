import GlobalStyle from "@/styles";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
        <meta
          name="description"
          content="PicJudge is a website that allows users to view and judge images."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
