import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";

const SearchModal = ({ willSearch, search }) => {
  return (
    <div
      className={`search_modal w-screen h-screen fixed bg-zinc-900 opacity-95 z-50 ${
        search ? "block" : "hidden"
      }`}
    >
      <div className="search_modal_body w-screen h-screen flex flex-col items-start justify-center relative">
        <form className="w-screen flex items-center justify-center bg-transparent">
          <input
            type="text"
            className="md:w-3/5 w-5/6 sm:w-4/5 h-16 sm:h-20 bg-transparent border-b-2 border-b-primary placeholder-primary text-3xl sm:text-5xl font-bangers tracking-wider outline-none text-primary"
            placeholder="Search"
          />
          <BiSearchAlt className="text-4xl sm:text-5xl -ml-10 sm:-ml-12 text-primary cursor-pointer" />
        </form>
        <FaTimes
          className="text-2xl sm:text-4xl cursor-pointer hover:text-error transition-all text-primary absolute top-5 sm:right-10 right-5"
          onClick={() => willSearch(false)}
        />
      </div>
    </div>
  );
};

export default SearchModal;
