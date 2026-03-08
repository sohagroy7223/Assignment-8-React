import React from "react";
import { useLoaderData } from "react-router";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const blogsData = useLoaderData();
  // console.log(blogsData);
  return (
    <div>
      {blogsData.map((blog) => (
        <Blog key={blog.id} blog={blog}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
