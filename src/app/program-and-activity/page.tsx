"use client";

import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";
import Link from "next/link";
import ProgramSection from "../components/program/ProgramSection";

export default function page() {
  return (
    <main className="w-full h-full">
      <Header />
      <section className="w-full h-screen flex flex-col justify-center items-center px-10 md:px-40">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-3 text-black">
              Program dan Aktivitas Hayed Consulting
            </h2>
            <p className="max-w-lg text-black font-light text-justify">
              Hayed Consulting memiliki beberapa program dan aktivitas yang
              dilakukan untuk membantu dalam proses pengembangan dan maintanance
              perusahaan agar dapat berjalan sesuai dengan prosedur dan
              ketentuan yang berlaku.
            </p>
          </div>
          <div className="md:flex justify-center hidden">
            <Image
              src="/logo-2.png"
              alt="Vision Image"
              width={400}
              height={100}
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      <ProgramSection />
      <Footer />
    </main>
  );
}
