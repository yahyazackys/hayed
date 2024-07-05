"use client";

import React, { SetStateAction, useState } from "react";
import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaSort } from "react-icons/fa";

export default function page() {
  const [selectedLanguage, setSelectedLanguage] = useState("IDN");

  const handleLanguageChange = (lang: SetStateAction<string>) => {
    setSelectedLanguage(lang);
  };

  return (
    <main className="w-full h-full">
      <Header />
      {/* Banner */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="slide"
        speed={1200}
        loop
        pagination={{
          clickable: true,
        }}
        className="mySwiper w-full"
      >
        <SwiperSlide>
          <div className="w-full h-screen relative">
            <Image
              src="/bg.png"
              alt="Background image"
              fill
              objectFit="cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black-original opacity-50"></div>
            <div className="absolute top-0 left-0 w-full h-full flex items-start justify-end mx-10 md:mx-28 pb-20 flex-col z-10 gap-y-4 max-w-[90%] md:max-w-[70%]">
              <span className="text-white text-3xl md:text-5xl font-semibold">
                Stock Exchanges in Indonesia Increase Drastically
              </span>
              <span className="text-white text-sm md:text-md font-extralight">
                14 Minutes ago, 2022
              </span>
              <span className="text-white text-lg md:text-2xl font-extralight">
                The Stock Exchange in Indonesia Increased drastically in 2023
                due to the large number of entrepreneurs who joined the Stock
                Exchange, causing a surge in the Market...
              </span>
              <Link
                href=""
                className="text-white text-sm md:text-md font-light mt-2 hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-screen relative">
            <Image
              src="/bg.png"
              alt="Background image"
              fill
              objectFit="cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black-original opacity-50"></div>
            <div className="absolute top-0 left-0 w-full h-full flex items-start justify-end mx-10 md:mx-28 pb-20 flex-col z-10 gap-y-4 max-w-[90%] md:max-w-[70%]">
              <span className="text-white text-3xl md:text-5xl font-semibold">
                Stock Exchanges in Indonesia Increase Drastically
              </span>
              <span className="text-white text-sm md:text-md font-extralight">
                14 Minutes ago, 2022
              </span>
              <span className="text-white text-lg md:text-2xl font-extralight">
                The Stock Exchange in Indonesia Increased drastically in 2023
                due to the large number of entrepreneurs who joined the Stock
                Exchange, causing a surge in the Market...
              </span>
              <Link
                href=""
                className="text-white text-sm md:text-md font-light mt-2 hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-screen relative">
            <Image
              src="/bg.png"
              alt="Background image"
              fill
              objectFit="cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black-original opacity-50"></div>
            <div className="absolute top-0 left-0 w-full h-full flex items-start justify-end mx-10 md:mx-28 pb-20 flex-col z-10 gap-y-4 max-w-[90%] md:max-w-[70%]">
              <span className="text-white text-3xl md:text-5xl font-semibold">
                Stock Exchanges in Indonesia Increase Drastically
              </span>
              <span className="text-white text-sm md:text-md font-extralight">
                14 Minutes ago, 2022
              </span>
              <span className="text-white text-lg md:text-2xl font-extralight">
                The Stock Exchange in Indonesia Increased drastically in 2023
                due to the large number of entrepreneurs who joined the Stock
                Exchange, causing a surge in the Market...
              </span>
              <Link
                href=""
                className="text-white text-sm md:text-md font-light mt-2 hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* Berita Hangat */}
      <div
        id="breaking-news"
        className="w-full flex flex-col items-center px-6 md:px-40 py-16"
      >
        <div className="flex flex-col w-full">
          <h2 className="text-3xl font-semibold text-start text-black">
            Berita Hangat
          </h2>
          <div className="flex flex-wrap mt-8 gap-8 justify-between">
            <Link
              href="#"
              className="relative bg-white rounded-lg shadow-xl shadow-slate-200 flex-grow sm:w-[48%] md:w-[48%] xl:w-[31%] flex flex-col justify-start items-center"
            >
              <Image
                src="/article/article-breaking.svg"
                alt="Background image"
                width={100}
                height={100}
                objectFit="cover"
                className="w-full"
              />
              <div className="flex flex-col p-4 gap-y-5 w-full">
                <h5 className="text-lg md:text-xl font-normal text-start text-black max-h-16">
                  Indonesian oil is of international interest
                </h5>
                <p className="font-light text-black text-justify tracking-tighter text-md line-clamp-3">
                  Indonesia Establishes International Cooperation in the oil
                  business sector Indonesia Establishes International
                  Cooperation in the oil business sector Indonesia Establishes
                  International Cooperation in the oil business sectorIndonesia
                  Establishes International Cooperation in the oil business
                  sector
                </p>
              </div>
              <div className="px-8 py-3 mb-6 mt-3 text-white text-sm hover:text-black-original hover:border-black-original border-white border bg-[#00213F] hover:bg-white rounded-tr-[40px] rounded-bl-[40px] items-center flex flex-col justify-center">
                Selengkapnya
              </div>
            </Link>
            <Link
              href="#"
              className="relative bg-white rounded-lg shadow-xl shadow-slate-200 flex-grow sm:w-[48%] md:w-[48%] xl:w-[31%] flex flex-col justify-start items-center"
            >
              <Image
                src="/article/article-breaking.svg"
                alt="Background image"
                width={100}
                height={100}
                objectFit="cover"
                className="w-full"
              />
              <div className="flex flex-col p-4 gap-y-5 w-full">
                <h5 className="text-lg md:text-xl font-normal text-start text-black max-h-16">
                  Indonesian oil is of international interest
                </h5>
                <p className="font-light text-black text-justify tracking-tighter text-md line-clamp-3">
                  Indonesia Establishes International Cooperation in the oil
                  business sector Indonesia Establishes International
                  Cooperation in the oil business sector Indonesia Establishes
                  International Cooperation in the oil business sectorIndonesia
                  Establishes International Cooperation in the oil business
                  sector
                </p>
              </div>
              <div className="px-8 py-3 mb-6 mt-3 text-white text-sm hover:text-black-original hover:border-black-original border-white border bg-[#00213F] hover:bg-white rounded-tr-[40px] rounded-bl-[40px] items-center flex flex-col justify-center">
                Selengkapnya
              </div>
            </Link>
            <Link
              href="#"
              className="relative bg-white rounded-lg shadow-xl shadow-slate-200 flex-grow sm:w-[48%] md:w-[48%] xl:w-[31%] flex flex-col justify-start items-center"
            >
              <Image
                src="/article/article-breaking.svg"
                alt="Background image"
                width={100}
                height={100}
                objectFit="cover"
                className="w-full"
              />
              <div className="flex flex-col p-4 gap-y-5 w-full">
                <h5 className="text-lg md:text-xl font-normal text-start text-black max-h-16">
                  Indonesian oil is of international interest
                </h5>
                <p className="font-light text-black text-justify tracking-tighter text-md line-clamp-3">
                  Indonesia Establishes International Cooperation in the oil
                  business sector Indonesia Establishes International
                  Cooperation in the oil business sector Indonesia Establishes
                  International Cooperation in the oil business sectorIndonesia
                  Establishes International Cooperation in the oil business
                  sector
                </p>
              </div>
              <div className="px-8 py-3 mb-6 mt-3 text-white text-sm hover:text-black-original hover:border-black-original border-white border bg-[#00213F] hover:bg-white rounded-tr-[40px] rounded-bl-[40px] items-center flex flex-col justify-center">
                Selengkapnya
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Berita Terbaru dan Berita Teratas */}
      <div className="flex flex-col lg:flex-row w-full px-6 md:px-40 py-16 justify-between gap-8 lg:gap-0">
        <div
          id="beritaterbaru"
          className="flex flex-col max-w-full lg:max-w-[650px]"
        >
          <div className="flex justify-between w-full mb-8 items-center">
            <h2 className="text-3xl font-semibold text-start text-black">
              Feed Berita
            </h2>
            <div className="relative">
              <div className="dropdown dropdown-end dropdown-hover text-black-soft">
                <div className="flex gap-x-2 items-center">
                  <FaSort size={16} color="black" />
                  <p
                    tabIndex={0}
                    className="bg-white text-black-soft w-10 hover:cursor-pointer"
                  >
                    {selectedLanguage}
                  </p>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box"
                >
                  <li>
                    <button onClick={() => handleLanguageChange("IDN")}>
                      Indonesia
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleLanguageChange("ENG")}>
                      English
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            <a href="" className="flex w-full text-black gap-x-5 group">
              <div className="w-28 md:w-80">
                <Image
                  src="/article/article-breaking.svg"
                  alt="Background image"
                  width={100}
                  height={100}
                  objectFit="contain"
                  className="w-full"
                />
              </div>
              <div className="w-full flex flex-col items-start justify-center gap-y-4">
                <p className="text-[16px] md:text-[20px] group-hover:text-[#21409A]">
                  Indonesian Oil Stocks Rise Drastically in 2023
                </p>
                <p className="text-[11px] font-light">44 minute ago</p>
              </div>
            </a>
            <a href="" className="flex w-full text-black gap-x-5 group">
              <div className="w-28 md:w-80">
                <Image
                  src="/article/article-breaking.svg"
                  alt="Background image"
                  width={100}
                  height={100}
                  objectFit="contain"
                  className="w-full"
                />
              </div>
              <div className="w-full flex flex-col items-start justify-center gap-y-4">
                <p className="text-[16px] md:text-[20px] group-hover:text-[#21409A]">
                  Indonesian Oil Stocks Rise Drastically in 2023
                </p>
                <p className="text-[11px] font-light">44 minute ago</p>
              </div>
            </a>
          </div>
        </div>
        <div id="beritateratas" className="flex flex-col w-full lg:w-[40%]">
          <h2 className="text-3xl font-semibold text-start text-black mb-8">
            Berita Teratas
          </h2>
          <div className="flex flex-col w-full bg-white p-4 rounded-xl shadow-lg shadow-slate-200">
            <div className="flex flex-col">
              <a href="" className="flex w-full text-black group gap-x-4">
                <div className="w-24 md:w-40">
                  <Image
                    src="/article/article-breaking.svg"
                    alt="Background image"
                    width={100}
                    height={100}
                    objectFit="contain"
                    className="w-full"
                  />
                </div>
                <div className="w-full flex flex-col items-start justify-center gap-y-4">
                  <p className="text-[14px] md:text-[16px] group-hover:text-[#21409A]">
                    Indonesian Oil Stocks Rise Drastically in 2023
                  </p>
                  <p className="text-[11px] font-light">44 minute ago</p>
                </div>
              </a>
              <hr className="my-5 border-black" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
