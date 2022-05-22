import React from "react";
import EachBlog from "./EachBlog";
import Link from "next/link";

const LatestBlogs = ({ blogData }) => {
  // console.log(blogData);
  return (
    <section className="my-8">
      <h2 className="text-3xl font-bangers text-neutral-content border-b-4 border-error w-fit tracking-wider mb-4">
        Latest
      </h2>

      {blogData.map((eachBlog) => {
        {
          /* console.log(eachBlog.attributes.slug); */
        }
        return (
          <Link
            href={`/blogpost/${eachBlog.attributes.slug}`}
            key={eachBlog.id}
          >
            <div className="w-5/6 mx-auto lg:w-full">
              <EachBlog eachBlog={eachBlog} />
            </div>
          </Link>
        );
      })}

      {/* <Link href="/blogpost/berserk">
        <div>
          <EachBlog />
        </div>
      </Link>
      <Link href="/blogpost/berserk">
        <div>
          <EachBlog />
        </div>
      </Link>
      <Link href="/blogpost/berserk">
        <div>
          <EachBlog />
        </div>
      </Link>
      <Link href="/blogpost/berserk">
        <div>
          <EachBlog />
        </div>
      </Link>
      <Link href="/blogpost/berserk">
        <div>
          <EachBlog />
        </div>
      </Link>
      <Link href="/blogpost/berserk">
        <div>
          <EachBlog />
        </div>
      </Link>
      <Link href="/blogpost/berserk">
        <div>
          <EachBlog />
        </div>
      </Link>
      <Link href="/blogpost/berserk">
        <div>
          <EachBlog />
        </div>
      </Link>
      <Link href="/blogpost/berserk">
        <div>
          <EachBlog />
        </div>
      </Link>
      <Link href="/blogpost/berserk">
        <div>
          <EachBlog />
        </div>
      </Link>
      <Link href="/blogpost/berserk">
        <div>
          <EachBlog />
        </div>
      </Link>
      <Link href="/blogpost/berserk">
        <div>
          <EachBlog />
        </div>
      </Link>
      <Link href="/blogpost/berserk">
        <div>
          <EachBlog />
        </div>
      </Link>
      <Link href="/blogpost/berserk">
        <div>
          <EachBlog />
        </div>
      </Link>
      <Link href="/blogpost/berserk">
        <div>
          <EachBlog />
        </div>
      </Link>
      <Link href="/blogpost/berserk">
        <div>
          <EachBlog />
        </div>
      </Link>
      <Link href="/blogpost/berserk">
        <div>
          <EachBlog />
        </div>
      </Link>
      <Link href="/blogpost/berserk">
        <div>
          <EachBlog />
        </div>
      </Link>
      <Link href="/blogpost/berserk">
        <div>
          <EachBlog />
        </div>
      </Link>
      <Link href="/blogpost/berserk">
        <div>
          <EachBlog />
        </div>
      </Link>
      <Link href="/blogpost/berserk">
        <div>
          <EachBlog />
        </div>
      </Link>
      <Link href="/blogpost/berserk">
        <div>
          <EachBlog />
        </div>
      </Link>
      <Link href="/blogpost/berserk">
        <div>
          <EachBlog />
        </div>
      </Link>
      <Link href="/blogpost/berserk">
        <div>
          <EachBlog />
        </div>
      </Link> */}
    </section>
  );
};

export default LatestBlogs;
