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
import ArticleBanner from "../components/article/ArticleBanner";
import ArticleBreaking from "../components/article/ArticleBreaking";
import ArticleNew from "../components/article/ArticleNew";
import ArticleFeed from "../components/article/ArticleFeed";

export default function page() {
  return (
    <main className="w-full h-full">
      <Header />
      {/* Banner */}
      <ArticleBanner />
      {/* Berita Hangat */}
      <div
        id="breaking-news"
        className="w-full flex flex-col items-center px-6 md:px-40 py-16"
      >
        <div className="flex flex-col w-full">
          <h2 className="text-3xl font-semibold text-start text-black">
            Berita Hangat
          </h2>
          <ArticleBreaking />
        </div>
      </div>

      {/* Berita Terbaru dan Berita Teratas */}
      <div className="flex flex-col xl:flex-row w-full px-6 md:px-40 py-16 justify-between gap-x-20 gap-y-12">
        <ArticleFeed />
        <ArticleNew />
      </div>
      <Footer />
    </main>
  );
}
