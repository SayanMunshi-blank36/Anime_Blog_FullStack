import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import RightSection from "../../components/RightSection";
import BlogBody from "../../components/BlogBody";
import ReadMore from "../../components/ReadMore";
import styles from "../../styles/Home.module.css";

const Slug = ({
  navCategories,
  blogData,
  clickedBlog,
  moreBlogs,
  popular1,
  popular2,
  mangaFeatured,
}) => {
  const router = useRouter();
  const { slug } = router.query;

  // console.log(clickedBlogCategories);

  // console.log(clickedBlog);

  return (
    <>
      <Head>
        <title>{clickedBlog.attributes.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto p-8 flex flex-col items-center justify-center">
        <div className="ad bg-secondary w-3/4 h-36 mb-8">Ad</div>
        <section
          className={`${styles.home_grid} border-b-2 border-b-gray-700 mb-8`}
        >
          <BlogBody clickedBlog={clickedBlog} />
          <RightSection
            moreBlogs={moreBlogs}
            popular1={popular1}
            popular2={popular2}
            mangaFeatured={mangaFeatured}
          />
        </section>
        <div className="ReadNext w-full mb-8">
          <h2 className="text-2xl sm:text-3xl font-bangers text-neutral-content border-b-4 border-error w-fit tracking-wider mb-4">
            Read More
          </h2>
          <ReadMore blogData={blogData} />
        </div>
        <div className="ad bg-secondary w-3/4 h-36 mb-8">Ad</div>
      </main>
    </>
  );
};

export async function getServerSideProps(context) {
  let navCategories;
  let blogData;
  let clickedBlog;
  let moreBlogs;
  let popular1;
  let popular2;
  let mangaFeatured;
  let headers = {
    Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
  };

  try {
    const [res1, res2, res3, res4, res5, res6, res7] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/categories`, {
        headers: headers,
      }),
      fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blog-posts?populate=*&sort=createdAt%3Adesc&pagination[limit]=10`,
        {
          headers: headers,
        }
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blog-posts?filters[slug]=${context.query.slug}&populate=*`,
        {
          headers: headers,
        }
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blog-posts?sort=createdAt%3Adesc&pagination[limit]=3&populate=blogImg&populate=author&populate=categories&filters[moreBlogs]=true`,
        {
          headers: headers,
        }
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blog-posts?sort=createdAt%3Adesc&pagination[limit]=3&populate=blogImg&populate=author&populate=categories&filters[popular1]=true`,
        {
          headers: headers,
        }
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blog-posts?sort=createdAt%3Adesc&pagination[limit]=3&populate=blogImg&populate=author&populate=categories&filters[popular2]=true`,
        {
          headers: headers,
        }
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blog-posts?pagination[limit]=10&sort=createdAt%3Adesc&populate=blogImg&populate=author&populate=categories&filters[mangaFeatured]=true`,
        {
          headers: headers,
        }
      ),
    ]);
    const [json1, json2, json3, json4, json5, json6, json7] = await Promise.all(
      [
        res1.json(),
        res2.json(),
        res3.json(),
        res4.json(),
        res5.json(),
        res6.json(),
        res7.json(),
      ]
    );
    navCategories = json1.data;
    blogData = json2.data;
    clickedBlog = json3.data[0];
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
      clickedBlog,
      moreBlogs,
      popular1,
      popular2,
      mangaFeatured,
    }, // will be passed to the page component as props
  };
}

export default Slug;
