import React from "react";
import EachBlog from "./EachBlog";
import Link from "next/link";

const CategoryLatestBlogs = ({ blogData, checkSlug }) => {
  // console.log(blogData);
  // console.log(checkSlug);
  return (
    <section className="my-8">
      <h2 className="text-3xl font-bangers text-neutral-content border-b-4 border-error w-fit tracking-wider mb-4">
        Latest
      </h2>

      {blogData.map(
        (eachBlog) =>
          (checkSlug ===
            eachBlog.attributes.categories.data[0].attributes.type ||
            (eachBlog.attributes.categories.data[1] &&
              checkSlug ===
                eachBlog.attributes.categories.data[1].attributes.type)) && (
            <Link
              href={`/blogpost/${eachBlog.attributes.slug}`}
              key={eachBlog.id}
            >
              <div className="w-5/6 mx-auto lg:w-full">
                <EachBlog key={eachBlog.id} eachBlog={eachBlog} />
              </div>
            </Link>
          )
      )}
    </section>
  );
};

export default CategoryLatestBlogs;
