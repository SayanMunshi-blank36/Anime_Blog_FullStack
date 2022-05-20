import { useState } from "react";
import "../styles/globals.css";
import { Theme } from "react-daisyui";
import Navbar from "../components/Navbar";
import SearchModal from "../components/SearchModal";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps, navCategories }) {
  const [modeSelected, setModeSelected] = useState("halloween");
  const [search, setSearch] = useState(false);

  const mode = (preferredMode) => {
    setModeSelected(preferredMode);
  };

  const willSearch = (searchChoise) => {
    setSearch(searchChoise);
  };

  // const getCategories = (achievedCategories) => {
  //   console.log(achievedCategories);
  // };

  return (
    <>
      <Theme className="relative" dataTheme={modeSelected}>
        <SearchModal willSearch={willSearch} search={search} />
        <Navbar
          mode={mode}
          modeSelected={modeSelected}
          willSearch={willSearch}
          navCategories={navCategories}
        />{" "}
        <Component {...pageProps} /> <Footer />
      </Theme>
    </>
  );
}

// export async function getServerSideProps(context) {
//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }

MyApp.getInitialProps = async (ctx) => {
  let json;
  let headers = {
    Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
  };
  try {
    const res = await fetch("http://localhost:1337/api/categories", {
      headers: headers,
    });
    json = await res.json();
  } catch (error) {
    throw new Error(error);
  }
  return { navCategories: json.data };
};

export default MyApp;
