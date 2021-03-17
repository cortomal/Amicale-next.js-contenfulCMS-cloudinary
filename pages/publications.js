import Head from "next/head";
import Layout from "../components/Layout";
import React from "react";

export default function Publications({ publications = [] }) {
  //     publications.sort(function (a, b) {
  //     a = new Date(a.fields.date);
  //     b = new Date(b.fields.date);
  //     return a > b ? -1 : a < b ? 1 : 0;
  //   });

  return (
    <div>
      <Head>
        <title>L'Amicale | Publications </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="mt-20 LibreBaskerville">
        
          {publications.map((publication) => (
              <div className='flex border-t dorder-black'>
            <a className='flex'href={publication.fields.mediaTelecharger[0].secure_url}>
            <div >
                {publication.fields.type}
            </div>
            <div>
                {publication.fields.titre}
            </div>
            </a>
            </div>
          ))}
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
  const publications = await client
    .getEntries({ content_type: "publications" })
    .then((response) => response.items);

  return {
    props: {
      publications,
    },
  };
}
