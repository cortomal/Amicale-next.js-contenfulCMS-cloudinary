import React from "react";

export default function PostList({ posts = [] }) {
  posts.sort(function (a, b) {
    a = new Date(a.fields.date);
    b = new Date(b.fields.date);
    return a > b ? -1 : a < b ? 1 : 0;
  });

  return (
    <div>
      {/* <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-4 px-6 LibreBaskerville"> */}
      <div className="LibreBaskerville">
      
        {posts.map((post) => (
          <div className="pl-3 pr-3 pb-3 border-b border-black ">
          <div key={post.sys.id}>
            <a href={`/post/${post.fields.slug}`}>
              <p> {new Date(post.fields.date).toLocaleString('fr-FR',{
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                // second: 'numeric'
                })}</p>
              {/* <img
                src={post.fields.imageCloudinary[0].secure_url}
                width="100%"
                height="auto"
              /> */}

              <h1 className="font-semibold text-sm  mt-3 mb-3 ">
                {post.fields.title}
              </h1>
              
              <p className=''>{post.fields.description}</p>
            </a>
          </div>
          </div>
        ))}
        </div>

    </div>
  );
}
