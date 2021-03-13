import React from "react";
import Markdown from "react-markdown";
import Image from "next/image";

export default function Post({ post }) {
  return (
    <div className=" grid grid-cols-3 LibreBaskerville  height-control">
      <div className="border-r border-black ">
        <div className='pt-3 pl-3'>
          {new Date(post.fields.date).toLocaleString("fr-FR", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            // second: "numeric",
          })}
        </div>
        <h1 className="font-semibold text-xl mb-6 pl-3">{post.fields.title}</h1>
        <Markdown
          source={post.fields.body}
          escapeHtml={true}
          className="pl-3"
        />
      </div>

      <div className="border-r border-black pt-3 ">
        <img
          src={post.fields.imageCloudinary[0].secure_url}
          height="auto"
          width="100%"
        />
      </div>
    </div>
  );
}
