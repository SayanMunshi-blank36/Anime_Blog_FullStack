import React from "react";
import Link from "next/link";
import moment from "moment";

const FeaturedPostCard = ({ eachBlogData }) => {
  console.log(eachBlogData.attributes.blogImg.data.attributes.url);

  return (
    <Link href="/blogpost/vagabond">
      <div className="relative h-screen cursor-pointer hover:opacity-90">
        <div
          className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-screen"
          style={{
            backgroundImage: `url(http://localhost:1337${eachBlogData.attributes.blogImg.data.attributes.url})`,
          }}
        />
        <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-screen" />
        <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full text-white">
          <p className="mb-4 text-shadow font-semibold text-xl cursor-text">
            {moment(eachBlogData.attributes.createdAt).format("MMM DD, YYYY")}
          </p>
          <p className="mb-4 text-shadow font-bangers font-semibold tracking-widest text-5xl text-center cursor-pointer hover:underline">
            {eachBlogData.attributes.title}
          </p>
          <p className="mb-4 mx-8 text-shadow font-montserrat text-sm md:text-xl text-center cursor-text">
            {eachBlogData.attributes.blogDesc}
          </p>

          <div className="flex items-center absolute bottom-5 w-full justify-center">
            <p className="inline align-middle text-shadow ml-2 font-xl font-montserrat cursor-text">
              By {eachBlogData.attributes.author.data.attributes.authorName}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedPostCard;
