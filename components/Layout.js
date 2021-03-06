import React from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navbar";

export default function Layout({ children }) {
  return (
    <div className="container">
      <Head>
        <title>L'Amicale | Bienvenue</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </div>
  );
}
