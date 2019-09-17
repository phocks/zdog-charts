import React, { useEffect } from "react";
import Head from "next/head";
import Chart from "../components/zchart";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Zdog Charts</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <script src="https://unpkg.com/zdog@1/dist/zdog.dist.min.js"></script>
      </Head>

      {/* <Nav /> */}

      <div className="hero">
        <h1 className="title">A 3D chart!</h1>
        <Chart />
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
          text-align: center;
        }
        .title {
          font-family: Helvetica, sans-serif;
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Home;
