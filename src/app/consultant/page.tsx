"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";
import axios from "axios";
import Link from "next/link";

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
  const apiUrl = "https://hayed-admin.com/api/consultant";
  const apiKey = "wnAQvTGkmLG0zLV1zWQlQo7OrA42TbvEvcMLtGbzPGu4NSfXuJ";
  const imageBaseUrl = "https://hayed-admin.com/consultantNonbg-images/";
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
              src="/consultant.png"
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
        <div className="flex flex-wrap justify-center gap-8">
          {currentConsultants.map((consultant) => (
            <Link
              href={`/consultant/${consultant.id}`}
              key={consultant.id}
              className="flex flex-col items-center max-w-xs text-center w-80 mx-2"
            >
              <div className="bg-white shadow-xl p-4 rounded-xl w-60 h-72 flex items-center justify-center mb-4 overflow-hidden">
                <Image
                  src={`${imageBaseUrl}${consultant.gambar_nonbg}`}
                  alt={consultant.nama_gelar}
                  width={120}
                  height={128}
                  objectFit="cover"
                  className="w-full"
                  loading="lazy"
                  unoptimized
                />
              </div>
              <h3 className="text-2xl font-semibold text-black">
                {consultant.nama_gelar}
              </h3>
              <p className="text-black font-light">{consultant.pekerjaan}</p>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`py-2 px-4 mx-1 rounded ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
