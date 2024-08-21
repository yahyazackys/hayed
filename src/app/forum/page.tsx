"use client";

import React from "react";
import Header from "@/app/components/Header";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import SearchForum from "../components/forum/SearchForum";
import FeedForum from "../components/forum/FeedForum";
import PopularForum from "../components/forum/PopularForum";

export default function Page() {
  return (
    <main className="w-full h-full">
      <Header />

      <div className="w-full h-screen relative">
        <Image
          src="/forum.svg"
          alt="Background image"
          fill
          objectFit="cover"
          className="z-0"
          loading="eager"
        />
        <div className="absolute w-full h-full flex items-center justify-center mt-8 md:mt-12 lg:mt-16 xl:mt-20 px-6 md:px-12 lg:px-20 xl:px-28 pb-20 flex-col z-20 gap-y-2 max-w-full">
          <span className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center">
            Welcome to the Forum
          </span>
          <span className="text-white text-md md:text-lg xl:text-xl font-extralight text-center">
            We are always ready to help you
          </span>
          <SearchForum />
        </div>
      </div>

      <div className="flex flex-col xl:flex-row w-full px-6 md:px-40 py-16 justify-between gap-x-20 gap-y-12">
        <FeedForum />
        <PopularForum />
      </div>

      <Footer />
    </main>
  );
}
