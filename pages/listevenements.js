// import React, { useState, useEffect } from "react";
// import Head from "next/head";
// import Layout from "../components/Layout";
// import PostList from "../components/PostList";
// import ReactPlayer from "react-player";
// import Link from "next/link";
// import { useRouter } from 'next/router'

// export default function App({ posts }) {
//   const [loading, setLoading] = useState(true);
//   const text=true
//   useEffect(() => {
//     setTimeout(() => setLoading(false), 3000)
//   }, []);

//   const router = useRouter()

//   console.log(  router.pathname)

//   posts.sort(function (a, b) {
//     a = new Date(a.fields.date);
//     b = new Date(b.fields.date);
//     return a > b ? -1 : a < b ? 1 : 0;
//   });

//   return (
//     <div>
//       {loading === false ? (
//         <div>
//           <Head>
//             <title>L'Amicale | Bienvenue </title>
//             <link rel="icon" href="/favicon.ico" />
//           </Head>

//           <Layout>

//             <div className="mt-20 LibreBaskerville">

//               <PostList posts={posts.slice(0, 10)} />
//               <div className="flex justify-center mt-6 mb-6">
//                 <Link className="" href="/evenementsPasses">
//                   <a className="border rounded-full py-3 px-6 border-black">
//                     Voir les anciens évènements
//                   </a>
//                 </Link>
//               </div>
//             </div>
//           </Layout>
//         </div>
//       ) : (
//         <div className=" h-screen">
//           <div className="flex content-center items-center mx-auto my-auto text-lg">
//             <div>

//             </div>
//             <ReactPlayer
//               url="https://res.cloudinary.com/dbqfcp9vd/video/upload/v1615289742/illustration/violette_qhov9w.mp4"
//               playing={true}
//               // volume
//               muted
//               // width="100%"
//               height="100vh"
//             />
//              <div className="">
//                <p className='underline'>
//                  DURANT LA FERMETURE COVID
//                </p>
//                 <p className="mt-2">
//                   CREPES PARTY <br />
//                   Tous les mercredis <br />
//                   12h-17h
//                 </p>
//                 <p className="mt-2">
//                   CANTINE TROTTOIRE
//                   <br />
//                   Tous les samedis
//                   <br />
//                   12h - 17h
//                 </p>
//               </div>

//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export async function getStaticProps() {
//   // Create an instance of the Contentful JavaScript SDK
//   const client = require("contentful").createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
//   });

//   // Fetch all entries of content_type `blogPost`
//   const posts = await client
//     .getEntries({ content_type: "article" })
//     .then((response) => response.items);

//   return {
//     props: {
//       posts,
//     },
//   };
// }

import Head from "next/head";
import Layout from "../components/Layout";
import PostList from "../components/PostList";
import React from "react";
import ReactPlayer from "react-player";
import { useState } from "react";
import Link from "next/link";

export default function Index({ posts }) {
  posts.sort(function (a, b) {
    a = new Date(a.fields.date);
    b = new Date(b.fields.date);
    return a > b ? -1 : a < b ? 1 : 0;
  });

  const afficher = () => {
    return <PostList posts={posts.slice(1, 4)} />;
  };

  return (
    <div>
      <Head>
        <title>L'Amicale | Evènements à venir </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="mt-20 LibreBaskerville">
          <PostList posts={posts.slice(0, 10)} />

          {/* <button onClick={()=>afficher()}>
            Voir plus
          </button> */}

          <div className="flex justify-center mt-6 mb-6">
            <Link className="" href="/evenementsPasses">
              <a className="border rounded-full py-3 px-6 border-black">
                Voir les anciens évènements
              </a>
            </Link>
          </div>
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
