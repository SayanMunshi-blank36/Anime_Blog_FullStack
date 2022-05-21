import React from "react";
import Image from "next/image";

const MangaReviews = ({ eachBlog }) => {
  return (
    <div>
      <Image
        className="cursor-pointer hover:opacity-90 shadow-lg rounded-md"
        src={`http://localhost:1337${eachBlog.attributes.blogImg.data.attributes.url}`}
        width={250}
        height={400}
      />
      <h3 className="text-center font-bangers my-1 tracking-wider text-lg cursor-pointer hover:underline">
        {eachBlog.attributes.title}
      </h3>
    </div>
  );
};

export default MangaReviews;
