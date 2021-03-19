import React, { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import PostList from "../components/PostList";
import ReactPlayer from "react-player";
import { useContext } from "react";
import { AuthContext } from "../components/contextProvider";
import Markdown from "react-markdown";
import Link from "next/link";

export default function App({ posts }) {
 const { initialState, stopPlay } = useContext(AuthContext);
 const enUne = posts.filter((article) => article.fields.enUne === true);

  useEffect(() => {
    setTimeout(() => stopPlay(), 6000)
  }, []);

  posts.sort(function (a, b) {
    a = new Date(a.fields.date);
    b = new Date(b.fields.date);
    return a > b ? -1 : a < b ? 1 : 0;
  });


  return (
    <div>
      {initialState === false ? (

        <div>
          <Head>
            <title>L'Amicale | Bienvenue </title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Layout>

          <div className=" grid grid-cols-3 LibreBaskerville textDecorationNone">
          <div className="border-r border-black">

            <div>
            </div>
            <div className="flex font-bold text-xl pl-3 border-b border-black pb-1 pt-1 shadow">
              Evènements à venir
            </div>
            <div className="h-screen overflow-scroll srollbar-none overscroll-contain">
              {enUne.map((une) => (
                <div className=" pb-3 ml-3 border-b border-black">
                  <a href={`/post/${une.fields.slug}`}>
                    <div className="">
                      <p>
                        {" "}
                        {new Date(une.fields.date).toLocaleString("fr-FR", {
                          weekday: "short",
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                          // second: "numeric",
                        })}
                      </p>
                      <img
                        src={une.fields.imageCloudinary[0].secure_url}
                        height="auto"
                        width="100%"
                      />

                      <h1 className="font-semibold text-xl  mt-3 mb-6 ">
                        {une.fields.title}
                      </h1>

                      <Markdown
                        source={une.fields.description}
                        escapeHtml={true}
                      />
                     
                      {/*                 
                <Markdown
                  source={posts[0].fields.body.substr(0, 1500) + "..."}
                  escapeHtml={true}
                /> */}
                      {/* <p className="underline">Lire plus</p> */}
                    </div>
                  </a>
                </div>
              ))}
               <div className="flex justify-center mt-6 mb-6 pb-20">
            <Link className="" href="/evenementsPasses">
              <a className="border rounded-full py-3 px-6 border-black ">
                Voir les anciens évènements
              </a>
            </Link>
          </div>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="border-r border-black h-screen overflow-scroll srollbar-none">
              <div className="flex pl-3 border-b border-black bg-white font-bold text-xl pb-1 pt-1 shadow">
                Evènements passés
              </div>
              <PostList posts={posts.slice(1, 10)} />
              <div className="flex justify-center mt-6 mb-6 pb-20">
            <Link className="" href="/evenementsPasses">
              <a className="border rounded-full py-3 px-6 border-black">
                Voir les anciens évènements
              </a>
            </Link>
          </div>
            </div>
            <div className="border-r border-black h-screen overflow-scroll srollbar-none ">
              {/* <di className="flex pl-3 text-white border-b border-black">
                Evènements passés
              </di> */}
              <PostList posts={posts.slice(2, 10)} />
              <div className="flex justify-center mt-6 mb-6 pb-20">
            <Link className="" href="/evenementsPasses">
              <a className="border rounded-full py-3 px-6 border-black">
                Voir les anciens évènements
              </a>
            </Link>
          </div>
            </div>
            
          </div>
<div className="flex">


          <div className=" justify-center items-center mx-auto my-auto card shadow-lg  py-6 px-6 border border-black">
            <p className="">HORAIRES DURANT LA FERMETURE COVID</p>
            <p className="mt-2 ">
              CREPES PARTY <br />
              Tous les mercredis <br />
              12h-17h
            </p>
            <p className="mt-2 ">
              CANTINES TROTTOIR
              <br />
              Tous les samedis
              <br />
              12h - 17h
            </p>
          </div>
</div>
        </div>

        {/* <div className=" px-6 mt-20 LibreBaskerville">
          <PostList posts={posts.slice(0, 10)} />
          <div className="flex justify-center mt-6 mb-6">
            <Link className="" href="/evenementsPasses">
              <a className="border rounded-full py-3 px-6 border-black">
                Voir les anciens évènements
              </a>
            </Link>
          </div>
          </div> */}
          </Layout>
        </div>
       ) : ( 
        <div className=" h-screen">
          <div className="flex content-center items-center mx-auto my-auto text-lg">
            <div>

            </div>
            <ReactPlayer
              url="https://res.cloudinary.com/dbqfcp9vd/video/upload/v1615289742/illustration/violette_qhov9w.mp4"
              playing={true}
              // volume
              muted
              // width="100%"
              height="100vh"
            />
             <div className="">
               <p className='underline'>
                 DURANT LA FERMETURE COVID
               </p>
                <p className="mt-2">
                  CREPES PARTY <br />
                  Tous les mercredis <br />
                  12h-17h
                </p>
                <p className="mt-2">
                  CANTINE TROTTOIRE
                  <br />
                  Tous les samedis
                  <br />
                  12h - 17h
                </p>
              </div>
              <div>
            <button onClick={stopPlay} className="border rounded-full py-3 px-6 border-black">
                Accéder au site
            </button>
          </div>
          </div>
        </div>
       )} 
    </div>
  );




}


export async function getStaticProps() {
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const posts = await client
    .getEntries({ content_type: "article" })
    .then((response) => response.items);

  return {
    props: {
      posts,
    },
  };
}


