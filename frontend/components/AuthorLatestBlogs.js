import React from "react";
import EachBlog from "./EachBlog";
import Link from "next/link";

const AuthorLatestBlogs = ({ blogData, checkAuthorSlug }) => {
  // console.log(blogData);
  // console.log(checkSlug);
  return (
    <section className="my-8">
      {blogData.map(
        (eachBlog) =>
          checkAuthorSlug ===
            eachBlog.attributes.author.data.attributes.slug && (
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

export default AuthorLatestBlogs;
