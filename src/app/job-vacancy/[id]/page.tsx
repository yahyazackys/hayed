"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface Job {
  id: number;
  nama_pekerjaan: string;
  keterangan: string;
}

export default function ConsultantPage() {
  const pathname = usePathname();
  const id = pathname.split("/").pop();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchJob = async () => {
        try {
          const apiUrl = `https://hayed-admin.com/api/lowongan-pekerjaan/${id}/detail`;
          const apiKey = "wnAQvTGkmLG0zLV1zWQlQo7OrA42TbvEvcMLtGbzPGu4NSfXuJ";

          const response = await axios.get(apiUrl, {
            headers: {
              api_key: apiKey,
            },
          });
          setJob(response.data.data);
        } catch (error) {
          setError("Failed to fetch job data");
        } finally {
          setLoading(false);
        }
      };

      fetchJob();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="w-full h-screen text-center items-center flex justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!job) {
    return <div>No Job found</div>;
  }

  return (
    <main className="w-full h-full">
      <Header />
      {/* <section className="w-full h-screen flex flex-col justify-center items-center px-10 md:px-40">
        <div className="flex flex-col md:flex-row justify-between items-start w-full mb-20">
          <div className="md:w-1/2 flex flex-col justify-center  md:text-left mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-3 text-black">
              {job.nama_pekerjaan}
            </h2>
            <p className="max-w-2xl text-black font-light text-justify">
              <span dangerouslySetInnerHTML={{ __html: job.keterangan }} />
            </p>
          </div>
          <div className="md:flex justify-center hidden items-center">
            <Image
              src="/logo-2.png"
              alt="Hayed Logo"
              width={400}
              height={300}
              className="w-auto h-auto"
            />
          </div>
        </div>
      </section> */}
      <section
        id="about"
        className="w-full h-screen flex items-center px-6 md:px-12 lg:px-20 xl:px-40 py-16 md:py-24 lg:py-32"
      >
        <div className="flex flex-col md:flex-row md:justify-between w-full gap-y-8 md:gap-y-0">
          <div className="flex justify-center md:justify-start">
            <div className="max-w-full">
              <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 font-bold text-center md:text-left text-black">
                {job.nama_pekerjaan}
              </h2>
              <p className="max-w-full md:max-w-3xl text-justify text-black">
                <span dangerouslySetInnerHTML={{ __html: job.keterangan }} />
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
      <Footer />
    </main>
  );
}
