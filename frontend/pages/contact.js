import React from "react";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>AniLog - Contact Us</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto p-8 flex flex-col items-center justify-center">
        <section className="body-font relative">
          <div className="px-5 py-24 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full mb-12">
              <h1 className="text-3xl sm:text-5xl font-bangers tracking-wider mb-4 border-b-8 border-b-error w-fit">
                Contact Us
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed font-montserrat text-center text-base sm:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                est? Porro omnis facilis dolor libero.
              </p>
            </div>
            <form
              action="https://formsubmit.co/97118c8fd53b2d5c96ee5621605b4886"
              method="POST"
            >
              <input
                type="hidden"
                name="_autoresponse"
                value="Thanks for contacting with us"
              />
              <input
                type="hidden"
                name="_next"
                value={`${process.env.NEXT_PUBLIC_URL}/contact`}
              />
              <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="leading-7 text-base sm:text-lg font-bangers tracking-wide"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-gray-700 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        required
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="leading-7 text-base sm:text-lg font-bangers tracking-wide"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-gray-700 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        required
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="leading-7 text-base sm:text-lg font-bangers tracking-wide"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="w-full bg-gray-700 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out resize-none"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button
                      type="submit"
                      className="btn btn-primary flex mx-auto border-0 py-2 px-4 sm:px-8 text-base sm:text-lg"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
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
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/categories`,
      {
        headers: headers,
      }
    );
    const json = await res.json();
    navCategories = json.data;
  } catch (error) {
    throw new Error(error);
  }

  return {
    props: { navCategories }, // will be passed to the page component as props
  };
}

export default Contact;
