import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import moment from "moment";

const BlogBody = ({ clickedBlog }) => {
  return (
    <div className="mt-8">
      <h1 className="font-bangers text-4xl md:text-6xl tracking-wider mb-4">
        {clickedBlog.attributes.title}
      </h1>
      <p className="font-montserrat text-lg mb-4">
        {clickedBlog.attributes.blogDesc}
      </p>
      <p className="author font-bold uppercase">
        {clickedBlog.attributes.author.data.attributes.authorName}
      </p>
      <div className="date mb-4 uppercase">
        {moment(clickedBlog.attributes.createdAt).format("MMM DD, YYYY")}
      </div>
      <Image
        src={`http://localhost:1337${clickedBlog.attributes.blogImg.data.attributes.url}`}
        width={800}
        height={600}
      />
      <div className="content my-8 pb-4 font-montserrat text-lg leading-8 border-b-2 border-b-gray-700 ">
        <ReactMarkdown>{clickedBlog.attributes.blogContent}</ReactMarkdown>
      </div>
      <div className="ad text-center bg-secondary h-72 w-72 mx-auto mb-16">
        Ad
      </div>
      <h2 className="font-bangers text-3xl border-b-4 border-b-error w-fit tracking-wider mb-2">
        Category
      </h2>
      <div className="flex mb-4">
        {clickedBlog.attributes.categories.data.map((category) => {
          return (
            <Link
              href={`/category/${category.attributes.type}`}
              key={category.id}
            >
              <p className="font-montserrat border-2 border-error px-1 py-1 text-xl cursor-pointer rounded-md mr-4 hover:bg-error transition-all">
                {category.attributes.type}
              </p>
            </Link>
          );
        })}
      </div>
      <div className="share mt-8">
        <h2 className="font-bangers border-b-4 border-b-error w-fit text-3xl tracking-wider mb-2">
          Share
        </h2>
        <div className="flex mb-8 pb-4">
          <FaFacebookF className="mr-4 text-3xl cursor-pointer hover:text-error transition-all" />
          <FaTwitter className="mr-4 text-3xl cursor-pointer hover:text-error transition-all" />
        </div>
      </div>
      <div className="author my-8">
        <h2 className="font-bangers border-b-4 border-b-error w-fit tracking-wider text-3xl mb-8">
          About The Author
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center md:items-start md:justify-start">
          <Image
            src="http://localhost:1337/uploads/blank_36_avatar_7b3a6c977a.png"
            width={100}
            height={100}
            className="rounded-full"
          />
          <div className="md:ml-8 md:mt-0 mt-4">
            <h3 className="font-bangers text-xl tracking-wider text-center md:text-left">
              {clickedBlog.attributes.author.data.attributes.authorName}
            </h3>
            <p className="font-montserrat">
              {clickedBlog.attributes.author.data.attributes.authorDesc}
            </p>
          </div>
        </div>
      </div>
      <div className="ad text-center bg-secondary h-72 w-72 mx-auto mb-16">
        Ad
      </div>
    </div>
  );
};

export default BlogBody;
