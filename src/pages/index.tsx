import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "src/components/layout";

const url = "https://api.github.com/repos/zeit/next.js";

const Home: NextPage = () => {
  const handleClick = () => {
    fetch(url)
      .then((r) => {
        r.json();
      })
      .then((j) => {return alert(j)});
  };

  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Home</h2>
      <p>人数：</p>
      <input type="number" value={4} name="" id="" />
      <button onClick={handleClick}>生成</button>
    </Layout>
  );
};

export default Home;
