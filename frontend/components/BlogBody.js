import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import moment from "moment";
import styles from "../styles/BlogBody.module.css";

const BlogBody = ({ clickedBlog }) => {
  return (
    <div className="mt-8">
      <h1 className="font-bangers text-3xl sm:text-4xl md:text-6xl tracking-wider mb-4">
        {clickedBlog.attributes.title}
      </h1>
      <p className="font-montserrat text-base sm:text-lg mb-4">
        {clickedBlog.attributes.blogDesc}
      </p>
      <Link
        href={`/author/${clickedBlog.attributes.author.data.attributes.slug}`}
      >
        <p className="author text-sm sm:text-base font-bold uppercase cursor-pointer">
          By {clickedBlog.attributes.author.data.attributes.authorName}
        </p>
      </Link>
      <div className="date text-sm sm:text-base mb-4 uppercase">
        {moment(clickedBlog.attributes.createdAt).format("MMM DD, YYYY")}
      </div>
      <Image
        src={`http://localhost:1337${clickedBlog.attributes.blogImg.data.attributes.url}`}
        width={800}
        height={600}
      />
      <div className="content my-8 pb-4 font-montserrat sm:text-left text-center text-base sm:text-lg leading-8 border-b-2 border-b-gray-700 ">
        <ReactMarkdown className={styles.reactMarkdown}>
          {clickedBlog.attributes.blogContent}
        </ReactMarkdown>
      </div>
      <div className="ad text-center bg-secondary h-72 w-72 mx-auto mb-16">
        Ad
      </div>
      <h2 className="font-bangers text-2xl sm:text-3xl border-b-4 border-b-error w-fit tracking-wider mb-2">
        Category
      </h2>
      <div className="flex mb-4">
        {clickedBlog.attributes.categories.data.map((category) => {
          return (
            <Link
              href={`/category/${category.attributes.type}`}
              key={category.id}
            >
              <p className="font-montserrat border-2 border-error px-1 py-1 text-base sm:text-xl cursor-pointer rounded-md mr-4 hover:bg-error transition-all">
                {category.attributes.type}
              </p>
            </Link>
          );
        })}
      </div>
      <div className="share mt-8">
        <h2 className="font-bangers border-b-4 border-b-error w-fit text-2xl sm:text-3xl tracking-wider mb-2">
          Share
        </h2>
        <div className="flex mb-8 pb-4">
          <FaFacebookF className="mr-4 text-2xl sm:text-3xl cursor-pointer hover:text-error transition-all" />
          <FaTwitter className="mr-4 text-2xl sm:text-3xl cursor-pointer hover:text-error transition-all" />
        </div>
      </div>
      <div className="author my-8">
        <h2 className="font-bangers border-b-4 border-b-error w-fit tracking-wider text-2xl sm:text-3xl mb-8">
          About The Author
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center md:items-start md:justify-start">
          <Image
            src={`http://localhost:1337${clickedBlog.attributes.authorImg.data.attributes.url}`}
            width={100}
            height={100}
            className="rounded-full"
          />
          <div className="md:ml-8 md:mt-0 mt-4">
            <Link
              href={`/author/${clickedBlog.attributes.author.data.attributes.slug}`}
            >
              <h3 className="cursor-pointer font-bangers text-xl tracking-wider text-center md:text-left">
                {clickedBlog.attributes.author.data.attributes.authorName}
              </h3>
            </Link>
            <p className="font-montserrat text-center sm:text-left">
              {clickedBlog.attributes.author.data.attributes.authorDesc}
            </p>
            <Link
              href={`/author/${clickedBlog.attributes.author.data.attributes.slug}`}
            >
              <p className="font-montserrat text-center sm:text-left text-gray-500 mt-4 cursor-pointer">
                More From{" "}
                {clickedBlog.attributes.author.data.attributes.authorName}{" "}
                &rarr;
              </p>
            </Link>
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
