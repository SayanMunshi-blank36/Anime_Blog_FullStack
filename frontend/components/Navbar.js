import React from "react";
import Link from "next/link";
import {
  BsFillSunFill,
  BsFillMoonFill,
  BsTwitter,
  BsReddit,
  BsInstagram,
} from "react-icons/bs";

const Navbar = ({ mode, modeSelected, willSearch }) => {
  return (
    <>
      <nav className="navbar bg-base-300 shadow-lg sticky top-0 z-40">
        <div className="navbar bg-base-300 sticky top-0 container mx-auto w-full">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 rounded-box w-72 bg-base-300 shadow-lg font-montserrat font-semibold"
              >
                <li>
                  <Link href="/category/anime">
                    <div>Anime</div>
                  </Link>
                </li>
                <li>
                  <Link href="/category/manga">
                    <div>Manga</div>
                  </Link>
                </li>
                <li>
                  <Link href="/category/reviews">
                    <div>Reviews</div>
                  </Link>
                </li>
                <li>
                  <Link href="/category/lists">
                    <div>Lists</div>
                  </Link>
                </li>
                <li>
                  <Link href="/category/comics">
                    <div>Comics</div>
                  </Link>
                </li>
                <li>
                  <Link href="/category/gaming">
                    <div>Gaming</div>
                  </Link>
                </li>
                <li tabIndex="0">
                  <div>
                    More
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </div>
                  <ul className="p-2 bg-base-300 shadow-lg">
                    <li>
                      <Link href="/category/submenu1">
                        <div>Submenu 1</div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/category/submenu2">
                        <div>Submenu 2</div>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <Link href="/">
              <div className="btn btn-ghost normal-case text-xl">AniLog</div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 font-montserrat font-semibold">
              <li>
                <Link href="/category/anime">
                  <div>Anime</div>
                </Link>
              </li>
              <li>
                <Link href="/category/manga">
                  <div>Manga</div>
                </Link>
              </li>
              <li>
                <Link href="/category/reviews">
                  <div>Reviews</div>
                </Link>
              </li>
              <li>
                <Link href="/category/lists">
                  <div>Lists</div>
                </Link>
              </li>
              <li>
                <Link href="/category/comics">
                  <div>Comics</div>
                </Link>
              </li>
              <li>
                <Link href="/category/gaming">
                  <div>Gaming</div>
                </Link>
              </li>
              <li tabIndex="0">
                <div>
                  More
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </div>
                <ul className="p-2 bg-base-300 shadow-lg">
                  <li>
                    <Link href="/category/submenu1">
                      <div>Submenu 1</div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/category/submenu2">
                      <div>Submenu 2</div>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {modeSelected === "halloween" ? (
              <BsFillSunFill
                onClick={() => mode("bumblebee")}
                className="mx-2 text-2xl cursor-pointer"
              />
            ) : (
              <BsFillMoonFill
                onClick={() => mode("halloween")}
                className="mx-2 text-2xl cursor-pointer"
              />
            )}
            <button
              className="btn btn-ghost btn-circle"
              onClick={() => willSearch(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <div className="flex p-2 rounded-md text-gray-900 bg-primary">
              <BsTwitter className="mx-1 text-xl md:text-3xl hover:text-error cursor-pointer transition-all" />
              <BsReddit className="mx-1 text-xl md:text-3xl hover:text-error cursor-pointer transition-all" />
              <BsInstagram className="mx-1 text-xl md:text-3xl hover:text-error cursor-pointer transition-all" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
