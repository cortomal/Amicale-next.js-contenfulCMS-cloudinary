import React from "react"
import Markdown from "react-markdown"
import Image from 'next/image'


export default function Post({ post }) {
console.log(post.fields)
  return (
    <article>
      <header>
        <h1>{post.fields.title}</h1>
        <small>
          <p>Published: {Date(post.fields.date).toString()}</p>
        </small>
      </header>
      <section>
          <img
          src={post.fields.imageCloudinary[0].secure_url}
          width="auto"
        height="auto"
          />
          
      
        <Markdown source= 
        {post.fields.body} 
          escapeHtml={true} /> 
      </section>
      <footer>
          Footer
      </footer>
  

    </article>
  )
}