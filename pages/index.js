import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import PostList from "../components/PostList";
import ReactPlayer from "react-player";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ posts }) {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push("/listevenements"), 15000);
  }, []);

  return (
    <div>
      <Head>
        <title>L'Amicale | Bienvenue </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className="LibreBaskerville h-screen">
        <div className="flex content-center items-center mx-auto my-auto text-lg">
          <div></div>
          <ReactPlayer
            url="https://res.cloudinary.com/dbqfcp9vd/video/upload/v1615289742/illustration/violette_qhov9w.mp4"
            playing={true}
            muted
            height="100vh"
          />
          <div className="">
            <p className="underline">DURANT LA FERMETURE COVID</p>
            <p className="mt-2">
              CREPES PARTY <br />
              Tous les mercredis <br />
              12h-17h
            </p>
            <p className="mt-2">
              CANTINES TROTTOIR
              <br />
              Tous les samedis
              <br />
              12h - 17h
            </p>
          </div>
          <div>
            <Link href="/listevenements">
              <a className="border rounded-full py-3 px-6 border-black">
                Accéder au site
              </a>
            </Link>
          </div>
        </div>
      </body>
    </div>
  );
}
