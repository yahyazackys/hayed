"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";
import Link from "next/link";
import axios from "axios";

interface Job {
  id: number;
  nama_pekerjaan: string;
  keterangan: string;
}

export default function Page() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const apiKey = "wnAQvTGkmLG0zLV1zWQlQo7OrA42TbvEvcMLtGbzPGu4NSfXuJ";
  const apiUrl = "https://hayed-admin.com/api/lowongan-pekerjaan";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            api_key: apiKey,
          },
        });
        setJobs(response.data.data);
      } catch (error) {
        console.error("Error fetching events:", error);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <main className="w-full h-full">
      <Header />
      <section className="w-full h-screen flex flex-col justify-center items-center px-10 md:px-40">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-3 text-black">
              Mengapa Anda Harus Bergabung Di Hayed Consulting ?
            </h2>
            <p className="max-w-lg text-black font-light text-justify">
              Hayed Consulting adalah perusahaan yang menawarkan layanan
              profesional kepada klien dan bisnis dari semua ukuran. Keduanya
              komersial dan pribadi. Kami bertujuan untuk membangun hubungan,
              kepercayaan, dan kesuksesan klien kami karena pertumbuhan klien
              adalah pertumbuhan kami. Visi kami adalah menjadi Terkemuka
              Konsultan dan Pusat Pengetahuan di bidang Perpajakan, Akuntansi,
              dan Manajemen Bisnis.
            </p>
          </div>
          <div className="md:flex justify-center hidden">
            <Image
              src="/job.png"
              alt="Vision Image"
              width={500}
              height={100}
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      <div
        id="job-vacancy"
        className="w-full flex items-center px-6 md:px-20 lg:px-40 pb-32"
      >
        <div className="flex flex-col w-full items-center gap-y-8">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-semibold text-start ml-3 text-black">
              Daftar List Lowongan Pekerjaan
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-16 mt-8 w-full">
            {jobs.map((job) => (
              <Link
                href={`/job-vacancy/${job.id}`}
                key={job.id}
                className="flex items-center shadow-md rounded-xl"
              >
                <Image
                  src={"/logo-2.png"}
                  alt={job.nama_pekerjaan}
                  width={140}
                  height={36}
                  objectFit="cover"
                  className="mx-4"
                />
                <p className="font-normal text-white text-center text-sm bg-[#00213F] p-10 rounded-r-xl">
                  {job.nama_pekerjaan}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
