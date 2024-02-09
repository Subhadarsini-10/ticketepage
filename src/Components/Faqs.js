import React, { useState } from "react";
import { Close, Plus } from "./Icon";

export const Faqs = () => {
  const [showAnswers, setShowAnswers] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggleAnswer = (index) => {
    const newShowAnswers = [...showAnswers];
    newShowAnswers[index] = !newShowAnswers[index];
    setShowAnswers(newShowAnswers);
  };

  return (
    <section className="flex md:flex-row flex-col w-full justify-between gap-10 mt-10 md:px-24 px-4">
      <div className="flex flex-col gap-4 md:order-none order-2">
        <div className="gap-3 flex-col md:flex hidden">
          <h1 className="font-semibold text-2xl">Frequently asked questions</h1>
          <p className="text-[gray]">Here are some of our most asked</p>
        </div>

        <div className="bg-slate-50 rounded-xl flex justify-between w-full items-center ">
          <div className="gap-7 flex flex-col p-5">
            <div className="text-lg font-medium">
              <h1>Still need help?</h1>
              <p>We're here for you.</p>
            </div>
            <div>
              <button className="bg-black text-white rounded-lg py-3 px-4">
                Chat with us
              </button>
            </div>
          </div>
          <div className="">
            <img
              className="bg-slate-50 w-40"
              alt=""
              src="https://png.pngtree.com/png-vector/20230225/ourmid/pngtree-smart-chatbot-cartoon-clipart-png-image_6620453.png"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-3/5 md:order-none order-1">
        <div className="gap-3 flex-col flex md:hidden my-3">
          <h1 className="font-semibold text-2xl">Frequently asked questions</h1>
          <p className="text-[gray]">Here are some of our most asked</p>
        </div>
        <div
          className="border-2 rounded-3xl my-3 p-4"
          onClick={() => toggleAnswer(0)}
        >
          <button className="font-bold flex gap-3 text-start mb-2 items-center">
            {showAnswers[0] ? <Close /> : <Plus />}
            What payment methods do you accept?
          </button>
          {showAnswers[0] && (
            <p className="ml-8">We accept Visa, Mastercard, and PayPal.</p>
          )}
        </div>
        <div
          className="border-2 rounded-3xl my-3 p-4"
          onClick={() => toggleAnswer(1)}
        >
          <button className="font-bold flex gap-3 text-start mb-2 items-center">
            {showAnswers[1] ? <Close /> : <Plus />}
            How do I cancel my booking?
          </button>
          {showAnswers[1] && (
            <p className="ml-8">
              You can cancel your booking by logging into your account and
              following the cancellation process.
            </p>
          )}
        </div>
        <div
          className="border-2 rounded-3xl my-3 p-4"
          onClick={() => toggleAnswer(2)}
        >
          <button className="font-bold flex gap-3 text-start mb-2 items-center">
            {showAnswers[2] ? <Close /> : <Plus />}
            Is there a refund policy?
          </button>
          {showAnswers[2] && (
            <p className="ml-8">
              Yes, we have a refund policy. Please refer to our Terms and
              Conditions for more information.
            </p>
          )}
        </div>
        <div
          className="border-2 rounded-3xl my-3 p-4"
          onClick={() => toggleAnswer(3)}
        >
          <button className="font-bold flex gap-3 text-start mb-2 items-center">
            {showAnswers[3] ? <Close /> : <Plus />}
            How do I contact customer support?
          </button>
          {showAnswers[3] && (
            <p className="ml-8">
              You can contact our customer support team through email or phone.
              Visit our Contact Us page for details.
            </p>
          )}
        </div>
        <div
          className="border-2 rounded-3xl my-3 p-4"
          onClick={() => toggleAnswer(4)}
        >
          <button className="font-bold flex gap-3 text-start mb-2 items-center">
            {showAnswers[4] ? <Close /> : <Plus />}
            Are there any hidden fees?
          </button>
          {showAnswers[4] && (
            <p className="ml-8">No, we do not have any hidden fees.</p>
          )}
        </div>
      </div>
    </section>
  );
};
