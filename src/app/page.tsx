"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/home/Banner";
import Image from "next/image";
import ServiceCard from "./components/home/ServiceCard";
import ClientSection from "./components/home/ClientSection";
import ArticleSection from "./components/home/ArticleSection";
import TestimonialSection from "./components/home/TestimonialSection";
import FaqSection from "./components/home/FaqSection";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Header />
      <Banner />

      <section
        id="about"
        className="w-full flex items-center px-6 md:px-12 lg:px-20 xl:px-40 py-16 md:py-24 lg:py-32"
      >
        <div className="flex flex-col md:flex-row md:justify-between w-full gap-y-8 md:gap-y-0">
          <div className="flex justify-center md:justify-start">
            <div className="max-w-full md:max-w-[557px]">
              <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 font-bold text-center md:text-left text-black">
                HAYED CONSULTING
              </h2>
              <p className="max-w-full md:max-w-lg text-justify text-black">
                Hayed Consulting is a company that offers professional services
                to clients and businesses of all sizes. Both commercial and
                personal. We aim to build a relationship, trust, and the success
                of our client because client growth is our growth. Our vision is
                to become a Leading Consultant and Knowledge Center in the
                fields of Taxation, Accounting, and Business Management.
              </p>
            </div>
          </div>
          <div className="flex justify-center md:justify-end items-center">
            <Image
              src="/logo-2.png"
              alt="Hayed Logo"
              width={400}
              height={300}
              className="w-auto h-auto"
            />
          </div>
        </div>
      </section>

      <ServiceCard />

      <section
        id="information"
        className="flex w-full items-center py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 xl:px-40"
      >
        <div className="flex flex-col w-full items-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            Butuh Layanan Konsultasi?
          </h2>
          <p className="text-base md:text-lg lg:text-xl font-normal italic text-black mt-4">
            Informasi Lebih Lanjut
          </p>
          <div className="flex flex-col md:flex-row items-center mt-16 md:mt-24 lg:mt-32 gap-y-12 md:gap-y-0 md:gap-x-16 lg:gap-x-32">
            <div className="flex flex-col items-center gap-y-4">
              <Image
                src="/mission.png"
                alt="Mission"
                width={120}
                height={120}
              />
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#AE7C34]">
                MISSION
              </h2>
            </div>
            <div className="flex flex-col items-center gap-y-4">
              <Image src="/vision.png" alt="Vision" width={160} height={160} />
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#214193]">
                VISION
              </h2>
            </div>
            <div className="flex flex-col items-center gap-y-4">
              <Image src="/value.png" alt="Value" width={120} height={120} />
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#8EC744]">
                VALUE
              </h2>
            </div>
          </div>
        </div>
      </section>

      <ArticleSection />

      <ClientSection />

      <TestimonialSection />

      <FaqSection />

      <Footer />
    </main>
  );
}
