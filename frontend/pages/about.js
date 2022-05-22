import React from "react";
import Head from "next/head";
import { BsTwitter, BsReddit, BsInstagram } from "react-icons/bs";

const About = () => {
  return (
    <>
      <Head>
        <title>AniLog - About Us</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto px-4 py-8 sm:p-8 flex flex-col items-center justify-center">
        <h1 className="font-bangers text-3xl sm:text-5xl text-center my-4 sm:my-8 border-b-8 border-b-error">
          About Us
        </h1>
        <p className="mx-auto md:w-3/4 text-center font-montserrat text-base sm:text-xl mb-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit magni
          sint voluptas corporis qui nulla architecto quos placeat tempora alias
          facilis laudantium nisi ut quasi doloribus asperiores ea sequi
          praesentium, assumenda quas, optio eaque. Inventore quae sequi harum
          temporibus fugiat tempora recusandae, ipsum voluptates dolorem dolorum
          velit praesentium distinctio odio rem sed exercitationem aperiam
          voluptas. Laborum labore suscipit saepe voluptatum dolore porro!
          Repellendus assumenda illum temporibus possimus veritatis provident.
          Reiciendis assumenda iste quibusdam, voluptate totam eveniet rerum
          unde natus vero esse architecto explicabo labore dolores minus
          provident quo quos. Suscipit ex reiciendis ipsa sequi expedita
          consequatur soluta exercitationem veritatis quos!
        </p>
        <h2 className="font-bangers text-2xl sm:text-4xl tracking-wider border-b-2 border-b-error w-fit">
          Follow Us On
        </h2>
        <div className="flex mt-4 mb-8">
          <BsTwitter className="text-2xl sm:text-4xl mx-4 hover:text-error cursor-pointer transition-all" />
          <BsReddit className="text-2xl sm:text-4xl mx-4 hover:text-error cursor-pointer transition-all" />
          <BsInstagram className="text-2xl sm:text-4xl mx-4 hover:text-error cursor-pointer transition-all" />
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  let navCategories;
  let headers = {
    Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
  };

  try {
    const res = await fetch("http://localhost:1337/api/categories", {
      headers: headers,
    });
    const json = await res.json();
    navCategories = json.data;
  } catch (error) {
    throw new Error(error);
  }

  return {
    props: { navCategories }, // will be passed to the page component as props
  };
}

export default About;
