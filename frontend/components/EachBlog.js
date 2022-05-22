import React from "react";
import Image from "next/image";
import styles from "../styles/EachBlog.module.css";
import Link from "next/link";
import moment from "moment";

const EachBlog = ({ eachBlog }) => {
  // console.log(
  //   eachBlog.attributes.blogImg.data.attributes.formats.thumbnail.url
  // );

  return (
    <div
      className={`${styles.eachBlogTemp} pb-6 mb-6 border-b-2 border-b-gray-700`}
    >
      <Image
        className="cursor-pointer hover:opacity-90"
        // src="/393055.png"
        src={`http://localhost:1337${eachBlog.attributes.blogImg.data.attributes.url}`}
        // src="http://localhost:1337/uploads/YI_Fw2i_9cf3d98744.jpg"
        width={350}
        height={250}
      />
      <div className="right_latest-blog flex flex-col">
        <div className="right_latest_internal mb-8">
          <div className="flex">
            {eachBlog.attributes.categories.data.map((category) => {
              return (
                <Link
                  key={category.attributes.type}
                  href={`/category/${category.attributes.type}`}
                >
                  <div>
                    <div className="cursor-pointer bg-error w-fit p-0.5 text-xs sm:text-sm rounded-sm font-montserrat mr-2">
                      {category.attributes.type}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <h3 className="font-bangers my-1 tracking-wider text-2xl sm:text-3xl cursor-pointer hover:underline">
            {eachBlog.attributes.title}
          </h3>
          <p className="font-montserrat text-xs sm:text-sm cursor-text">
            {eachBlog.attributes.blogDesc}
          </p>
        </div>
        <div className="each_blog_bottom flex">
          <p className="cursor-text font-bold text-sm text-primary mr-4">
            By {eachBlog.attributes.author.data.attributes.authorName}
          </p>
          <p className="text-sm text-primary-focus cursor-text">
            {moment(eachBlog.attributes.createdAt).format("MMM DD, YYYY")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EachBlog;
