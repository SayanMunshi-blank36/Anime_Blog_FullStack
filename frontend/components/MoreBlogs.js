import React from "react";
import Image from "next/image";

const MoreBlogs = () => {
  return (
    <div className="flex items-center my-4">
      <Image
        className="cursor-pointer hover:opacity-90 shadow-lg"
        src="/manga.jpg"
        width={150}
        height={100}
      />
      <h3 className="ml-2 text-center font-bangers my-1 tracking-wider text-sm cursor-pointer hover:underline">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
        nobis?
      </h3>
    </div>
  );
};

export default MoreBlogs;
