/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Navbar } from "./Navbar";
import {
  AButton,
  Calender,
  Cancel,
  ChevronDown,
  Credit,
  Disable,
  Ellipsis,
  GButton,
  Globe,
  Lock,
  Plus,
  Star,
  Stop,
  Ticket,
  Time,
  Users,
} from "./Icon";
import { Faqs } from "./Faqs";
import { Footer } from "./Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Homepage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="flex flex-col h-full m-auto w-full">
        <Navbar />
        <h1 className="sm:text-6xl md:hidden block text-3xl font-Lora font-bold md:px-24 px-4 mt-4">
          Confirm & pay
        </h1>
        <section className="w-full h-full m-auto gap-3 md:gap-12 flex flex-col md:flex-row mt-7 md:mt-16 md:px-24 px-4">
          <section className="w-full flex flex-col order-2 md:order-none">
            <h1 className="sm:text-6xl text-3xl font-Lora font-bold md:block hidden">
              Confirm & pay
            </h1>
            <div className="flex justify-between border-2 rounded-xl p-4 md:my-16 my-3">
              <div className="flex flex-col">
                <h1 className="font-semibold">Free cancellation</h1>
                <p className="text-[gray]">
                  Tickets can be cancelled by 30th Decemeber, 2024.
                </p>
              </div>
              <Cancel />
            </div>
            {/* Detail form */}
            <div className="flex flex-col gap-4 md:my-10 my-3 text-black">
              <div className="md:mb-5 mb-2 gap-10">
                <h1 className="font-semibold text-2xl">Enter your details</h1>
                <p className="text-[gray] md:text-base text-sm">
                  We'll be sending your tickets to the details below. Booking
                  for a friend? Add their details.
                </p>
                <div className="border-2 rounded-3xl my-5 p-4">
                  <button className="flex text-[gray] items-center gap-1">
                    Full name <Star />
                  </button>
                </div>
                <div className="flex md:flex-row flex-col w-full my-5 gap-5">
                  <div className="border-2 rounded-3xl p-4 md:w-1/2 w-full">
                    <button className="flex w-full justify-between text-[gray] items-center">
                      <div className="flex items-center gap-2">
                        <Globe />
                        <div className="flex gap-1 items-center">
                          Country code
                          <Star />
                        </div>
                      </div>

                      <ChevronDown />
                    </button>
                  </div>
                  <div className="border-2 rounded-3xl p-4 md:w-1/2 w-full">
                    <button className="flex text-[gray] items-center gap-1">
                      Phone number
                      <Star />
                    </button>
                  </div>
                </div>

                <div className="flex md:flex-row flex-col w-full gap-5">
                  <div className="border-2 rounded-3xl p-4 md:w-1/2 w-full">
                    <button className="flex text-[gray] items-center gap-1">
                      Email <Star />
                    </button>
                  </div>
                  <div className="border-2 rounded-3xl p-4 md:w-1/2 w-full">
                    <button className="flex text-[gray] items-center gap-1">
                      Confirm email <Star />
                    </button>
                  </div>
                </div>
              </div>
              <hr className="border" />

              {/* Additional details */}
              <div className="gap-10 my-3 md:my-10">
                <h1 className="font-semibold text-2xl">
                  Additional information
                </h1>
                <p className="text-[gray] md:text-base text-sm">
                  We need a few more details to complete your reservation.
                </p>

                <div className="flex md:flex-row flex-col w-full my-5 gap-5">
                  <div className="border-2 rounded-3xl p-4 md:w-1/2 w-full">
                    <button className="flex text-[gray] items-center gap-1">
                      Input label <Star />
                    </button>
                  </div>
                  <div className="border-2 rounded-3xl p-4 md:w-1/2 w-full">
                    <button className="flex w-full justify-between text-[gray] items-center">
                      <div className="flex gap-1 items-center">
                        Select
                        <Star />
                      </div>
                      <ChevronDown />
                    </button>
                  </div>
                </div>
                <div className="border-2 my-5 rounded-3xl p-4">
                  <button className="flex w-full justify-between text-[gray] items-center">
                    <div className="flex gap-1 items-center">
                      Multiselector
                      <Star />
                    </div>

                    <ChevronDown />
                  </button>
                </div>
                <hr className="border" />
              </div>
            </div>

            {/* Mode of payment */}
            <div className="flex flex-col">
              <div className="gap-3 flex flex-col my-10 w-full">
                <h1 className="font-semibold text-2xl">
                  Select your mode of payment
                </h1>
                <p className="text-[gray] md:text-base text-sm">
                  Payments with tickete are secure and encrypted.
                </p>
              </div>
              {/* card */}
              <div className="border-2 border-black rounded-lg p-4">
                <div className="flex justify-between">
                  <div className="gap-2 flex">
                    <Credit />
                    <h1>Credit & debit card</h1>
                  </div>
                  <div>
                    <Stop />
                  </div>
                </div>

                <div className="flex gap-3 my-3">
                  <button className="border text-xs px-2 font-bold rounded-md border-[gray] text-blue-950">
                    VISA
                  </button>
                  <button className="border text-xs px-2 rounded-md border-[gray] text-blue-950">
                    <Ellipsis />
                  </button>
                  <button className="border text-xs px-2 rounded-md border-[gray] text-blue-950">
                    VISA
                  </button>
                </div>

                <div className="flex md:flex-row flex-col w-full my-5 lg:gap-5 gap-2">
                  <div className="border-2 rounded-3xl p-4 md:w-1/2 w-full">
                    <button className="flex text-[gray] items-center gap-1">
                      Card name <Star />
                    </button>
                  </div>
                  <div className="border-2 rounded-3xl p-4 md:w-1/2 w-full">
                    <button className="flex text-[gray] items-center gap-1">
                      Card number <Star />
                    </button>
                  </div>
                </div>

                <div className="flex md:flex-row flex-col w-full my-5 gap-5">
                  <div className="border-2 rounded-3xl p-4 md:w-1/2 w-full">
                    <button className="flex text-[gray] items-center gap-1">
                      Expire date <Star />
                    </button>
                  </div>
                  <div className="border-2 rounded-3xl p-4 md:w-1/2 w-full">
                    <button className="flex text-[gray] items-center gap-1">
                      (CVV/CVC) <Star />
                    </button>
                  </div>
                </div>

                <hr />

                <div className="flex md:flex-row flex-col justify-between items-start md:items-center">
                  <div className="gap-1 md:gap-3 flex flex-col my-10">
                    <h1 className="font-semibold text-2xl">
                      Total payable: $xxx
                    </h1>
                    <p className="text-[gray] underline">
                      You will be charged in AED{" "}
                    </p>
                  </div>

                  <div className="bg-[green] p-1 px-2 text-white rounded-xl">
                    <button>You save price </button>
                  </div>
                </div>

                <p className="text-xs">
                  By clicking "Confirm & pay", you agree to Tickete's general
                  terms and conditions and cancellation policy.
                </p>

                {/* pay button */}

                <div className="">
                  <button className="p-3 px-5 items-center text-center flex gap-2 bg-black text-white my-6 rounded-xl text-xl md:w-1/2 w-full">
                    <Lock />
                    Confirm & pay
                  </button>
                </div>
              </div>
            </div>

            <div className="my-10">
              <div className="flex justify-between gap-2 border-2 rounded-3xl p-6 text-[gray] bg-slate-50 my-5">
                <div className="flex gap-4">
                  <AButton />{" "}
                  <p className="text-lg font-semibold">Coming soon</p>
                </div>
                <div>
                  <Disable />
                </div>
              </div>

              <div className="flex justify-between gap-2 border-2 rounded-3xl p-6 text-[gray] bg-slate-50 my-5">
                <div className="flex gap-4">
                  <GButton />{" "}
                  <p className="text-lg font-semibold">Coming soon</p>
                </div>
                <div>
                  <Disable />
                </div>
              </div>
            </div>
            <hr />

            <div className="mt-10 mb-3">
              <h1 className="font-semibold text-2xl">Total payable: $xxx</h1>
              <div className="flex gap-4 items-start border-2 p-4 rounded-2xl my-8">
                <Cancel />
                <div className="flex flex-col">
                  <p className="font-bold">You will be charged in AED</p>
                  <p>
                    The price shown here is in US Dollar (USD) as per the
                    current conversion rate. You will be charged in United Arab
                    Emirates Dirham (AED)
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="border border-[#bdbbbb] rounded-xl h-full w-full lg:w-1/2 overflow-hidden order-1 md:order-none">
            <Slider {...settings} className="p-4">
              <div>
                <img
                  src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/travel-photography/thumbnail.jpeg"
                  alt="Image 1"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww"
                  alt="Image 2"
                />
              </div>
              {/* Add more images here */}
            </Slider>

            <div className="flex flex-col gap-2 p-4">
              <p>⭐ 4.9(4.5k) . (category)</p>
              <h1 className="text-sm font-semibold">
                Amsterdam open boat canal cruise - Live Guiye - from Anne Frank
                Housef
              </h1>
              <div className="flex gap-2">
                <Ticket />
                <p>ticket type-varient</p>
              </div>

              <div className="flex gap-2">
                <Calender />
                <div className="flex flex-col gap-1">
                  <p>day, month, date</p>
                  <p className="text-xs text-[gray]">Duration</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Time />
                <div className="flex flex-col gap-1">
                  <p>time</p>
                  <p className="text-xs text-[gray]">
                    Opening hours: time to time
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <Users />
                <p>5 guests</p>
              </div>

              <p></p>
            </div>

            <hr className="border border-dotted mx-4" />

            <div className="flex justify-between text-[gray] underline p-4">
              <p>View payment summary</p>
              <Plus />
            </div>

            <hr className="border" />

            <div className="flex justify-between p-4">
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">Total payable</h1>
                <button className="bg-[#e6f6e6] text-[green] px-2 rounded-xl">
                  You saved price
                </button>
              </div>
              <div>
                <h1 className="text-lg font-semibold">$XXX</h1>
              </div>
            </div>

            <div className="flex p-4 gap-2 mb-1">
              <p className="text-xs font-semibold underline">
                You will be charged in AED
              </p>
              <Cancel />
            </div>

            <div>
              <p className="text-xs p-4 text-[gray]">
                By clicking "Confirm & pay", you agree to Tickete's general
                terms and conditions and cancellation policy.
              </p>
            </div>

            <div className="p-4 md:block hidden">
              <button className="p-3 px-5 items-center flex gap-2 bg-black text-white my-6 rounded-xl text-xl w-full align-middle">
                <Lock />
                Confirm & pay
              </button>
            </div>
          </section>
        </section>

        <hr className="w-full border mb-4" />

        <section className="">
          <Faqs />
          <hr className="my-5 border-[lightGray]" />
        </section>
      </div>

      <Footer />
    </>
  );
};
