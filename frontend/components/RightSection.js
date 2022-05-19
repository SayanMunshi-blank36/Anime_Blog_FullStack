import React from "react";
import RightSideBlog from "./RightSideBlog";
import MangaReviews from "./MangaReviews";
import ComicReviews from "./ComicReviews";
import MoreBlogs from "./MoreBlogs";
import Link from "next/link";

const RightSection = () => {
  return (
    <section className="my-8 px-4">
      <div className="ad text-center bg-secondary h-72 mb-16">Ad</div>
      <div className="content_display">
        <h2 className="text-3xl font-bangers text-neutral-content border-b-4 border-error w-fit tracking-wider mb-4">
          Popular
        </h2>
        <Link href="/blogpost/berserk">
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
        </Link>
        <div className="ad text-center bg-secondary h-72 mb-16">Ad</div>
        <Link href="/blogpost/berserk">
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
        </Link>
        <h2 className="text-3xl font-bangers text-neutral-content border-b-4 border-error w-fit tracking-wider mb-4">
          Manga Reviews
        </h2>
        <div className="mx-2 manga_reviews md:place-items-center grid grid-cols-2 gap-6">
          <Link href="/blogpost/oyasumi-punpun">
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
          </Link>
          <Link href="/blogpost/oyasumi-punpun">
            <div>
              <MangaReviews />
            </div>
          </Link>
        </div>
        <Link href="/category/manga">
          <div>
            <button className="mb-4 btn btn-primary mt-4 w-full font-montserrat font-extrabold">
              See More
            </button>
          </div>
        </Link>
        <div className="ad text-center bg-secondary h-72 mb-16">Ad</div>
        <h2 className="text-3xl font-bangers text-neutral-content border-b-4 border-error w-fit tracking-wider mb-4">
          Comic Reviews
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
        </Link>
        <div className="ad text-center bg-secondary h-72 mb-16">Ad</div>
        <h2 className="text-3xl font-bangers text-neutral-content border-b-4 border-error w-fit tracking-wider mb-4">
          More
        </h2>
        <Link href="/blogpost/oyasumi-punpun">
          <div>
            <MoreBlogs />
          </div>
        </Link>
        <Link href="/blogpost/oyasumi-punpun">
          <div>
            <MoreBlogs />
          </div>
        </Link>
        <Link href="/blogpost/oyasumi-punpun">
          <div>
            <MoreBlogs />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default RightSection;
