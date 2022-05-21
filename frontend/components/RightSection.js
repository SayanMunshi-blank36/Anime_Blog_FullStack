import React from "react";
import RightSideBlog from "./RightSideBlog";
import MangaReviews from "./MangaReviews";
import ComicReviews from "./ComicReviews";
import MoreBlogs from "./MoreBlogs";
import Link from "next/link";

const RightSection = ({ blogData }) => {
  // console.log(blogData);

  return (
    <section className="my-8 px-4">
      <div className="ad text-center bg-secondary h-72 mb-16">Ad</div>
      <div className="content_display">
        <h2 className="text-3xl font-bangers text-neutral-content border-b-4 border-error w-fit tracking-wider mb-4">
          Popular
        </h2>
        {blogData.map(
          (eachBlog) =>
            eachBlog.attributes.popular1 && (
              <Link
                key={eachBlog.id}
                href={`/blogpost/${eachBlog.attributes.slug}`}
              >
                <div>
                  <RightSideBlog key={eachBlog.id} eachBlog={eachBlog} />
                </div>
              </Link>
            )
        )}

        {/* <Link href="/blogpost/berserk">
          <div>
            <RightSideBlog />
          </div>
        </Link>
        <Link href="/blogpost/berserk">
          <div>
            <RightSideBlog />
          </div>
        </Link> */}
        <div className="ad text-center bg-secondary h-72 mb-16">Ad</div>

        {blogData.map(
          (eachBlog) =>
            eachBlog.attributes.popular2 && (
              <Link
                key={eachBlog.id}
                href={`/blogpost/${eachBlog.attributes.slug}`}
              >
                <div>
                  <RightSideBlog key={eachBlog.id} eachBlog={eachBlog} />
                </div>
              </Link>
            )
        )}

        {/* <Link href="/blogpost/berserk">
          <div>
            <RightSideBlog />
          </div>
        </Link>
        <Link href="/blogpost/berserk">
          <div>
            <RightSideBlog />
          </div>
        </Link>
        <Link href="/blogpost/berserk">
          <div>
            <RightSideBlog />
          </div>
        </Link> */}
        <h2 className="text-3xl font-bangers text-neutral-content border-b-4 border-error w-fit tracking-wider mb-4">
          Featured Manga Posts
        </h2>
        <div className="mx-2 manga_reviews md:justify-center grid grid-cols-2 gap-6">
          {blogData.map(
            (eachBlog) =>
              eachBlog.attributes.mangaFeatured && (
                <Link
                  key={eachBlog.id}
                  href={`/blogpost/${eachBlog.attributes.slug}`}
                >
                  <div>
                    <MangaReviews eachBlog={eachBlog} />
                  </div>
                </Link>
              )
          )}
          {/* <Link href="/blogpost/oyasumi-punpun">
            <div>
              <MangaReviews />
            </div>
          </Link>
          <Link href="/blogpost/oyasumi-punpun">
            <div>
              <MangaReviews />
            </div>
          </Link>
          <Link href="/blogpost/oyasumi-punpun">
            <div>
              <MangaReviews />
            </div>
          </Link> */}
        </div>
        <Link href="/category/Manga">
          <div>
            <button className="mb-4 btn btn-primary mt-4 w-full font-montserrat font-extrabold">
              See More
            </button>
          </div>
        </Link>
        {/* <div className="ad text-center bg-secondary h-72 mb-16">Ad</div>
        <h2 className="text-3xl font-bangers text-neutral-content border-b-4 border-error w-fit tracking-wider mb-4">
          Featured Comic Posts
        </h2>
        <div className="mx-2 manga_reviews md:place-items-center grid grid-cols-2 gap-6">
          <Link href="/blogpost/spider-man">
            <div>
              <ComicReviews />
            </div>
          </Link>
          <Link href="/blogpost/spider-man">
            <div>
              <ComicReviews />
            </div>
          </Link>
          <Link href="/blogpost/spider-man">
            <div>
              <ComicReviews />
            </div>
          </Link>
          <Link href="/blogpost/spider-man">
            <div>
              <ComicReviews />
            </div>
          </Link>
        </div>
        <Link href="/category/comics">
          <div>
            <button className="mb-4 btn btn-primary mt-4 w-full font-montserrat font-extrabold">
              See More
            </button>
          </div>
        </Link> */}
        <div>
          <div className="ad text-center bg-secondary h-72 mb-16">Ad</div>
          <h2 className="text-3xl font-bangers text-neutral-content border-b-4 border-error w-fit tracking-wider mb-4">
            More
          </h2>

          {blogData.map(
            (eachBlog) =>
              eachBlog.attributes.moreBlogs && (
                <Link
                  key={eachBlog.id}
                  href={`/blogpost/${eachBlog.attributes.slug}`}
                >
                  <div>
                    <MoreBlogs eachBlog={eachBlog} />
                  </div>
                </Link>
              )
          )}

          {/* <Link href="/blogpost/oyasumi-punpun">
            <div>
              <MoreBlogs />
            </div>
          </Link>
          <Link href="/blogpost/oyasumi-punpun">
            <div>
              <MoreBlogs />
            </div>
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default RightSection;
