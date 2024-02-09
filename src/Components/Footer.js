import React from "react";

export const Footer = () => {
  return (
    <div className="bg-black text-white h-full">
      <div className="">
        <h1 className="text-5xl font-bold py-20 w-full m-auto md:px-24 px-4">
          tickete
        </h1>
        <hr className="bg-[gray]" />
        <div className="flex md:flex-row flex-col w-full m-auto py-6 gap-10 items-start md:px-24 px-4">
          <h1 className="text-[gray] md:order-none order-2">Made with ❤️</h1>
          <div className="flex gap-2 text-xs md:text-base">
            <h1>Privacy policy</h1>
            <span className="text-gray-400">&bull;</span>
            <h1>Terms of usage</h1>
            <span className="text-gray-400">&bull;</span>
            <h1>Cancellation policy</h1>
            <span className="text-gray-400">&bull;</span>
            <h1>Sitemap</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
