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
  const apiUrl = "https://admin.hayedconsulting.com/api/lowongan-pekerjaan";
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
        console.error("Error fetching jobs:", error);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className="w-full h-full">
      <Header />
      <section className="w-full h-screen flex flex-col justify-center items-center px-10 md:px-40">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-3 text-black">
              Why should you join Hayed Consulting?
            </h2>
            <p className="max-w-2xl text-black font-light text-justify">
              Hayed Consulting is a company that offers professional services to
              clients and businesses of all sizes. Both commercial and private.
              We aim to build relationships, trust, and success for our clients
              because client growth is our growth. Our vision is to be the
              leading consultant and knowledge center in taxation, accounting,
              and business management.
            </p>
          </div>
          <div className="md:flex justify-center hidden">
            <Image
              src="/consultant/consultant.png"
              alt="Consultant Image"
              width={500}
              height={400}
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
              List of Job Vacancies
            </h2>
          </div>
          {jobs.length === 0 ? (
            <p>There are currently no job vacancies available</p>
          ) : (
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-16 mt-4 w-full">
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
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}
