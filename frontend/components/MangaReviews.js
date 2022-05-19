import React from "react";
import Image from "next/image";

const MangaReviews = () => {
  return (
    <div>
      <Image
        className="cursor-pointer hover:opacity-90 shadow-lg rounded-md"
        src="/manga.jpg"
        width={250}
        height={400}
      />
      <h3 className="text-center font-bangers my-1 tracking-wider text-xl cursor-pointer hover:underline">
        Oyasumi Punpun
      </h3>
    </div>
  );
};

export default MangaReviews;
