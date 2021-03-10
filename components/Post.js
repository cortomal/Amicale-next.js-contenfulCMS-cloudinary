import React from "react";
import Markdown from "react-markdown";
import Image from "next/image";

export default function Post({ post }) {

  return (
    <div className=" grid grid-cols-2 px-6 mt-20 LibreBaskerville">
      <div>
        <h1 className='font-semibold text-xl mb-6'>{post.fields.title}</h1>
       
        {/* <p>Horaires: {Date(post.fields.date).toString()}</p> */}
        <Markdown source={post.fields.body} escapeHtml={true} />
      </div>

      <div className="ml-6">
        <img
          src={post.fields.imageCloudinary[0].secure_url}
          height="auto"
          width="100%"
        />
      </div>
    </div>
  );
}
