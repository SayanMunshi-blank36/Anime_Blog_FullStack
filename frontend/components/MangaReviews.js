import React from "react";
import Image from "next/image";

const MangaReviews = ({ eachBlog }) => {
  return (
    <div>
      <Image
        className="cursor-pointer hover:opacity-90 shadow-lg rounded-md"
        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${eachBlog.attributes.blogImg.data.attributes.url}`}
        width={250}
        height={400}
      />
      <h3 className="text-center font-bangers my-1 tracking-wider text-base sm:text-lg cursor-pointer hover:underline">
        {eachBlog.attributes.title}
      </h3>
    </div>
  );
};

export default MangaReviews;
