import React from "react";
import Image from "next/image";

const MoreBlogs = ({ eachBlog }) => {
  return (
    <div className="flex items-center my-4">
      <Image
        className="cursor-pointer hover:opacity-90 shadow-lg"
        src={`http://localhost:1337${eachBlog.attributes.blogImg.data.attributes.url}`}
        width={100}
        height={60}
      />
      <h3 className="ml-2 text-center font-bangers my-1 tracking-wider text-sm cursor-pointer hover:underline">
        {eachBlog.attributes.title}
      </h3>
    </div>
  );
};

export default MoreBlogs;
