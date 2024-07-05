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
  const imageBaseUrl = "http://hayed-admin.com/consultantBg-images/";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  //   useEffect(() => {
  //     axios
  //       .get(apiUrl, {
  //         headers: {
  //           api_key: apiKey,
  //         },
  //       })
  //       .then((response) => {
  //         setConsultants(response.data.data);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         setError("Failed to fetch data");
  //         setLoading(false);
  //       });
  //   }, []);

  //   if (loading) {
  //     return <div>Loading...</div>;
  //   }

  //   if (error) {
  //     return <div>{error}</div>;
  //   }

  useEffect(() => {
    const fetchConsultants = async () => {
      try {
        const apiUrl = "https://hayed-admin.com/api/consultant";
        const apiKey = "wnAQvTGkmLG0zLV1zWQlQo7OrA42TbvEvcMLtGbzPGu4NSfXuJ";

        const response = await axios.get(apiUrl, {
          headers: {
            api_key: apiKey,
          },
        });
        setConsultants(response.data.data);
      } catch (error) {
        console.error("Error fetching consultants:", error);
      }
    };

    fetchConsultants();
  }, []);

  return (
    <main className="w-full h-full">
      <Header />
      <section className="w-full h-screen flex flex-col justify-center items-center px-10 md:px-40">
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
          <div className="md:w-1/2 flex flex-col justify-center text-center md:text-end order-1 md:order-2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-3 text-black">Our Mission</h2>
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
          <Image
            src="/consultant/icon.png"
            alt=""
            width={100}
            height={400}
            objectFit="contain"
          />
          <h2 className="text-3xl font-bold text-start ml-3 text-black mt-4">
            TEAM CONSULTANT
          </h2>
          <h2 className="text-xl font-semibold text-start ml-3 text-black">
            HAYED CONSULTING
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {consultants.map((consultant) => (
            <Link
              href={`/consultant/${consultant.id}`}
              key={consultant.id}
              className="flex flex-col items-center max-w-xs text-center"
            >
              <div className="bg-blue-500 rounded-tl-[200px] rounded-tr-[400px] rounded-bl-[300px] rounded-br-[300px] w-60 h-60 flex items-center justify-center mb-4 overflow-hidden">
                <Image
                  src={`${imageBaseUrl}${consultant.gambar_bg}`}
                  //   src={`${imageBaseUrl}${article.gambar}`}
                  alt={consultant.nama_gelar}
                  width={120}
                  height={128}
                  //   layout="responsive"
                  objectFit="cover"
                  className="w-full"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-semibold text-black">
                {consultant.nama_gelar}
              </h3>
              <p className="text-black font-light">{consultant.pekerjaan}</p>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
