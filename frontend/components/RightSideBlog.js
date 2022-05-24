import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

const RightSideBlog = ({ eachBlog }) => {
  // console.log(eachBlog);

  return (
    <div className="md:px-4 flex flex-col items-center justify-center my-8">
      <Image
        className="cursor-pointer hover:opacity-90"
        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${eachBlog.attributes.blogImg.data.attributes.url}`}
        width={300}
        height={200}
      />
      <div className="mt-2 px-2 border-primary border-l-4 cursor-pointer hover:text-primary transition-all w-fit">
        <Link
          href={`/category/${eachBlog.attributes.categories.data[0].attributes.type}`}
        >
          <div>{eachBlog.attributes.categories.data[0].attributes.type}</div>
        </Link>
      </div>
      <h3 className="font-bangers my-1 tracking-wider text-xl cursor-pointer hover:underline">
        {eachBlog.attributes.title}
      </h3>
      <div className="text-sm text-primary-focus cursor-text">
        {moment(eachBlog.attributes.createdAt).format("MMM DD, YYYY")}
      </div>
    </div>
  );
};

export default RightSideBlog;
