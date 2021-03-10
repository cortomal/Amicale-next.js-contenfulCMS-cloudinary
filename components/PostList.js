import React from "react";

export default function PostList({ posts = [] }) {
  

  posts.sort(function (a, b) {
    a = new Date(a.fields.date);
    b = new Date(b.fields.date);
    return a > b ? -1 : a < b ? 1 : 0;
  });
  return (
    <div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-4 px-6 LibreBaskerville">
        {posts.map((post) => (
          <div key={post.sys.id}>
            <a href={`/post/${post.fields.slug}`}>
              <img
                src={post.fields.imageCloudinary[0].secure_url}
                width="100%"
                height="auto"
              />

              <h1 className="font-semibold text-center">
                <div>{post.fields.title}</div>
              </h1>

              {/* <p>Le: {Date(post.fields.date).toString()}</p> */}

              <p>{post.fields.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
