import React from "react";

const Blog = ({ blog }) => {
  // console.log(blog);
  return (
    <div>
      <div className="bg-white w-11/12 mx-auto p-10 rounded-2xl mt-10">
        <h3 className="font-bold text-lg">{blog.question}</h3>
        <p className="border border-dashed text-gray-400 w-full mt-4"></p>

        <p className="mt-2">
          <span className="text-blue-700 font-medium">Answer: </span>
          <br />
          {blog.answer}
        </p>
        <p className="border border-dashed text-gray-400 w-full mt-4"></p>
        <p className="mt-3 ">
          <span className="font-medium ">Add time</span> :
          <i> 8-mar-26 at: time</i>
        </p>
      </div>
    </div>
  );
};

export default Blog;
