import Head from "next/head";
import Image from "next/image";
import LatestBlogs from "../components/LatestBlogs";
import RightSection from "../components/RightSection";
import styles from "../styles/Home.module.css";
import FeaturedPosts from "../components/FeaturedPosts";

export default function Home({ blogData }) {
  // console.log(blogData);

  return (
    <div>
      <Head>
        <title>AniLog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto p-8">
        <h1 className="font-bangers text-6xl tracking-wider text-center mb-2">
          Anilog
        </h1>
        <p className="font-montserrat mx-auto text-center mb-16 text-lg pb-2 border-b-2 border-b-error w-3/4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur,
          molestias!
        </p>
        <FeaturedPosts blogData={blogData} />
        <section className={styles.home_grid}>
          <LatestBlogs blogData={blogData} />
          <RightSection />
        </section>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  let navCategories;
  let blogData;
  let headers = {
    Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
  };

  try {
    const [res1, res2] = await Promise.all([
      fetch("http://localhost:1337/api/categories", {
        headers: headers,
      }),
      fetch(
        "http://localhost:1337/api/blog-posts?populate=*&sort=createdAt%3Adesc",
        {
          headers: headers,
        }
      ),
    ]);
    const [json1, json2] = await Promise.all([res1.json(), res2.json()]);
    navCategories = json1.data;
    blogData = json2.data;
  } catch (error) {
    throw new Error(error);
  }

  return {
    props: { navCategories, blogData }, // will be passed to the page component as props
  };
}