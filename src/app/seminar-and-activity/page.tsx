"use client";

import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";
import PreviousEvent from "../components/event/previous-event/page";
import NextEvent from "../components/event/next-event/page";

export default function page() {
  return (
    <main className="w-full h-full">
      <Header />

      <div className="w-full h-screen relative">
        <Image
          src="/seminar/bg.png"
          alt="Background image"
          fill
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black-original opacity-40 rounded-lg transition-opacity duration-100 ease-in-out"></div>
        <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center mt-8 md:mt-12 lg:mt-16 xl:mt-20 px-6 md:px-12 lg:px-20 xl:px-28 pb-20 flex-col z-20 gap-y-4 max-w-full md:max-w-[80%] lg:max-w-[70%]">
          <span className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center md:text-left">
            Seminar dan Kegiatan
          </span>
          <span className="text-white text-md md:text-lg xl:text-xl font-extralight text-center md:text-left">
            Kami membuat program Seminar dan Training bertujuan untuk membentuk
            dan mengembangkan potensi anak muda dalam menjalankan suatu bisnis
            ataupun perusahaan agar dapat berjalan sesuai dengan yang seharusnya
            dan sesuai dengan aturan yang berlaku.
          </span>
        </div>
      </div>

      <div className="flex flex-col px-6 md:px-12 lg:px-20 xl:px-28 items-center justify-center my-20 gap-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-black-soft">
          Kegiatan Sebelumnya
        </h2>
        <PreviousEvent />
      </div>

      <div className="flex flex-col px-6 md:px-12 lg:px-20 xl:px-28 items-center justify-center gap-y-10 bg-[#00213F] rounded-t-[100px] pt-20 pb-40 -mb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Kegiatan Yang Akan Datang
        </h2>
        <NextEvent />
      </div>

      <Footer />
    </main>
  );
}
