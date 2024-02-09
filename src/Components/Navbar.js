import React from "react";
import { ArrowLeft, Help, Lock } from "./Icon";

export const Navbar = () => {
  return (
    <>
      <section className="flex w-full h-full justify-between m-auto text-black items-center py-5 md:px-24 px-4">
        <div className="md:hidden block">
          <ArrowLeft />
        </div>

        <h1 className="font-bold md:block sm:block hidden text-4xl">tickete</h1>

        <div className="flex gap-2 text-lg text-[gray] font-medium items-center">
          <Lock />
          <h1>Checkout</h1>
        </div>
        <div className="flex gap-2 font-medium items-center">
          <Help />
          <h1>Help</h1>
        </div>
      </section>

      <section className="text-center bg-black text-white p-2">
        <h1>Holding your tickets for 30:00</h1>
      </section>
    </>
  );
};
