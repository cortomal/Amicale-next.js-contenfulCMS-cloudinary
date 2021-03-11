import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>L'Amicale | Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className="flex justify-center content-center h-screen">
        <div className="mx-auto my-auto text-lg">
          amicanedufutur [at] riseup.net
        </div>
      </body>
    </Layout>
  );
}
