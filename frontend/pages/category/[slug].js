import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
// import CategoryLatestBlogs from "../../components/CategoryLatestBlogs";
import RightSection from "../../components/RightSection";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import EachBlog from "../../components/EachBlog";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from "react";

const Slug = ({
  getCategories,
  navCategories,
  blogData,
  moreBlogs,
  popular1,
  popular2,
  mangaFeatured,
  numberofBlogs,
  headers,
}) => {
  // console.log(blogData);

  const router = useRouter();
  const { slug } = router.query;

  const [posts, setPosts] = useState(blogData);

  const [hasMore, setHasMore] = useState(true);

  // console.log(posts);

  const getMorePosts = async () => {
    const res = await fetch(
      `http://localhost:1337/api/blog-posts?pagination[start]=${posts.length}&pagination[limit]=5&sort=createdAt%3Adesc&populate=blogImg&populate=author&populate=categories&filters[categories][type]=${slug}`,
      {
        headers: headers,
      }
    );

    const dataPosts = await res.json();

    const newPosts = dataPosts.data;

    setTimeout(() => {
      setPosts((posts) => [...posts, ...newPosts]);
      // console.log(posts);
    }, 2000);
  };

  useEffect(() => {
    setHasMore(numberofBlogs > posts.length ? true : false);
  }, [posts]);

  return (
    <div>
      <Head>
        <title>AniLog - {slug}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="upper_intro mx-auto w-full flex flex-col justify-center items-center">
        <h1 className="font-bangers tracking-widest text-center text-4xl sm:text-5xl my-4 sm:my-8">
          {slug}
        </h1>
        <p className="font-montserrat text-sm sm:text-base text-center mb-4 sm:mb-8 w-10/12">
          {navCategories.map((category) => {
            return (
              category.attributes.type === slug &&
              category.attributes.typeDescription
            );
          })}
        </p>
      </div>
      <main className="container mx-auto px-8 sm:p-8">
        <section className={styles.home_grid}>
          {/* <CategoryLatestBlogs blogData={blogData} checkSlug={slug} /> */}
          <section className="my-8">
            <h2 className="text-3xl font-bangers text-neutral-content border-b-4 border-error w-fit tracking-wider mb-4">
              Latest
            </h2>
            <InfiniteScroll
              dataLength={posts.length}
              next={getMorePosts}
              hasMore={hasMore}
              loader={<img src="/loader.gif" />}
              endMessage={
                <p className="text-center">
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              {posts.map(
                (eachBlog) =>
                  (slug ===
                    eachBlog.attributes.categories.data[0].attributes.type ||
                    (eachBlog.attributes.categories.data[1] &&
                      slug ===
                        eachBlog.attributes.categories.data[1].attributes
                          .type)) && (
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
            </InfiniteScroll>
          </section>
          <RightSection
            moreBlogs={moreBlogs}
            popular1={popular1}
            popular2={popular2}
            mangaFeatured={mangaFeatured}
          />
        </section>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  let navCategories;
  let blogData;
  let moreBlogs;
  let popular1;
  let popular2;
  let mangaFeatured;
  let numberofBlogs;
  let headers = {
    Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
  };

  try {
    const [res1, res2, res4, res5, res6, res7] = await Promise.all([
      fetch("http://localhost:1337/api/categories", {
        headers: headers,
      }),
      fetch(
        `http://localhost:1337/api/blog-posts?pagination[limit]=17&sort=createdAt%3Adesc&populate=blogImg&populate=author&populate=categories&filters[categories][type]=${context.query.slug}`,
        {
          headers: headers,
        }
      ),
      fetch(
        "http://localhost:1337/api/blog-posts?sort=createdAt%3Adesc&pagination[limit]=3&populate=blogImg&populate=author&populate=categories&filters[moreBlogs]=true",
        {
          headers: headers,
        }
      ),
      fetch(
        "http://localhost:1337/api/blog-posts?sort=createdAt%3Adesc&pagination[limit]=3&populate=blogImg&populate=author&populate=categories&filters[popular1]=true",
        {
          headers: headers,
        }
      ),
      fetch(
        "http://localhost:1337/api/blog-posts?sort=createdAt%3Adesc&pagination[limit]=3&populate=blogImg&populate=author&populate=categories&filters[popular2]=true",
        {
          headers: headers,
        }
      ),
      fetch(
        "http://localhost:1337/api/blog-posts?pagination[limit]=10&sort=createdAt%3Adesc&populate=blogImg&populate=author&populate=categories&filters[mangaFeatured]=true",
        {
          headers: headers,
        }
      ),
    ]);
    const [json1, json2, json4, json5, json6, json7] = await Promise.all([
      res1.json(),
      res2.json(),
      res4.json(),
      res5.json(),
      res6.json(),
      res7.json(),
    ]);
    navCategories = json1.data;
    blogData = json2.data;
    numberofBlogs = json2.meta.pagination.total;
    moreBlogs = json4.data;
    popular1 = json5.data;
    popular2 = json6.data;
    mangaFeatured = json7.data;
  } catch (error) {
    throw new Error(error);
  }

  return {
    props: {
      navCategories,
      blogData,
      moreBlogs,
      popular1,
      popular2,
      mangaFeatured,
      numberofBlogs,
      headers,
    }, // will be passed to the page component as props
  };
}

export default Slug;
