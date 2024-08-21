"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";
import axios from "axios";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

interface Consultant {
  id: number;
  nama_asli: string;
  nama_gelar: string;
  pekerjaan: string;
  keterangan: string;
  gambar_bg: string;
  gambar_nonbg: string;
}

export default function Page() {
  const [consultants, setConsultants] = useState<Consultant[]>([]);
  const apiUrl = "https://admin.hayedconsulting.com/api/consultant";
  const apiKey = "wnAQvTGkmLG0zLV1zWQlQo7OrA42TbvEvcMLtGbzPGu4NSfXuJ";
  const imageBaseUrl =
    "https://admin.hayedconsulting.com/consultantNonbg-images/";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            api_key: apiKey,
          },
        });
        setConsultants(response.data.data);
      } catch (error) {
        console.error("Error fetching events:", error);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const totalPages = Math.ceil(consultants.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const currentConsultants = consultants.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) {
    return (
      <div className="w-full h-screen text-center flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!consultants || consultants.length === 0) {
    return <div>No Consultant found</div>;
  }

  return (
    <main className="w-full h-full">
      <Header />
      <section className="w-full md:h-screen flex flex-col justify-center items-center max-md:pt-28 px-10 md:px-40">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="flex justify-center order-2 md:order-1">
            <Image
              src="/consultant/consultant.png"
              alt="Consultant Image"
              width={500}
              height={400}
              objectFit="cover"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center text-start md:text-end order-1 md:order-2 mb-8 md:mb-0">
            <h2 className="text-[30px] md:text-4xl font-bold mb-3 text-black">
              Our Mission
            </h2>
            <p className="max-w-lg text-black font-light md:self-end text-justify">
              Our missions are strengthening leadership in tax consulting
              services, accounting & business management, strengthening presence
              in the national market, providing the best service and quality for
              clients, and providing added value for client's business growth.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-10 md:px-20 bg-white">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-[30px] md:text-4xl font-bold text-start ml-3 text-black mt-4 text-[#1E3E79]">
            TEAM CONSULTANT
          </h2>
          <h2 className="text-[18px] md:text-xl font-semibold text-start ml-3 text-black">
            HAYED CONSULTING
          </h2>
        </div>
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          centeredSlides={false}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={1000}
          slidesPerView={1}
          slidesPerGroup={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 1,
            },
            1400: {
              slidesPerView: 4,
              slidesPerGroup: 1,
            },
          }}
          className="mySwiper w-full px-20"
        >
          {consultants.map((consultant) => (
            <SwiperSlide key={consultant.id} className="py-8">
              <div className="flex justify-center items-center h-full">
                <Link
                  href={`/consultant/${consultant.id}`}
                  key={consultant.id}
                  className="flex flex-col items-center max-w-xs text-center w-80 mx-2"
                >
                  <div className="bg-[#A9A5A9] shadow-xl rounded-xl w-80 h-[21rem] flex items-end justify-end mb-4 overflow-hidden">
                    <Image
                      src={`${imageBaseUrl}${consultant.gambar_nonbg}`}
                      alt={consultant.nama_asli}
                      width={480}
                      height={128}
                      objectFit="contain"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-black">
                    {consultant.nama_asli}
                  </h3>
                  <p className="text-black font-light">
                    {consultant.pekerjaan}
                  </p>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <Footer />
    </main>
  );
}
