import Head from "next/head";
import Layout from "../components/Layout";
import PostList from "../components/PostList";
import React from "react";
import ReactPlayer from "react-player";
import { useState } from "react";
import Link from "next/link";

export default function EvenementsPasses({ posts }) {
  posts.sort(function (a, b) {
    a = new Date(a.fields.date);
    b = new Date(b.fields.date);
    return a > b ? -1 : a < b ? 1 : 0;
  });

  return (
    <div>
      <Head>
        <title>L'Amicale | Bienvenue </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="mt-20 LibreBaskerville">
        
          <PostList posts={posts.slice(0,posts.length)} />
        
          {/* <button onClick={()=>afficher()}>
            Voir plus
          </button> */}
       



        </div>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  // Create an instance of the Contentful JavaScript SDK
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  // Fetch all entries of content_type `blogPost`
  const posts = await client
    .getEntries({ content_type: "article" })
    .then((response) => response.items);

  return {
    props: {
      posts,
    },
  };
}
