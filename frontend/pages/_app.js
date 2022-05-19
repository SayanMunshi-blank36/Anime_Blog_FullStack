import { useState } from "react";
import "../styles/globals.css";
import { Theme } from "react-daisyui";
import Navbar from "../components/Navbar";
import SearchModal from "../components/SearchModal";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const [modeSelected, setModeSelected] = useState("halloween");
  const [search, setSearch] = useState(false);

  const mode = (preferredMode) => {
    setModeSelected(preferredMode);
  };

  const willSearch = (searchChoise) => {
    setSearch(searchChoise);
  };

  return (
    <>
      <Theme className="relative" dataTheme={modeSelected}>
        <SearchModal willSearch={willSearch} search={search} />
        <Navbar
          mode={mode}
          modeSelected={modeSelected}
          willSearch={willSearch}
        />{" "}
        <Component {...pageProps} /> <Footer />
      </Theme>
    </>
  );
}

export default MyApp;
