"use client";

import { useEffect, useState } from "react";
import axios from "axios";
// import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface Consultant {
  id: number;
  nama_asli: string;
  nama_gelar: string;
  pekerjaan: string;
  keterangan: string;
  gambar_bg: string;
  gambar_nonbg: string;
}

export default function ConsultantPage() {
  //   const router = useRouter();
  const pathname = usePathname();
  const id = pathname.split("/").pop();
  const [consultant, setConsultant] = useState<Consultant | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const imageBaseUrl = "http://hayed-admin.com/consultantNonbg-images/";

  useEffect(() => {
    if (id) {
      const fetchConsultant = async () => {
        try {
          const apiUrl = `https://hayed-admin.com/api/consultant/${id}/detail`;
          const apiKey = "wnAQvTGkmLG0zLV1zWQlQo7OrA42TbvEvcMLtGbzPGu4NSfXuJ";

          const response = await axios.get(apiUrl, {
            headers: {
              api_key: apiKey,
            },
          });
          setConsultant(response.data.data);
        } catch (error) {
          setError("Failed to fetch consultant data");
        } finally {
          setLoading(false);
        }
      };

      fetchConsultant();
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

  if (!consultant) {
    return <div>No consultant found</div>;
  }

  return (
    <main className="w-full h-full">
      <Header />
      <section className="w-full h-screen flex flex-col justify-center items-center px-10 md:px-40">
        {/* <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="md:w-1/2 flex flex-col justify-center text-center md:text-start mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-3 text-black">
              {consultant.nama_gelar}
            </h2>
            <p className="max-w-lg text-black font-light md:self-end text-justify">
              {consultant.keterangan}
            </p>
          </div>
          <div className="md:flex justify-center hidden">
            <Image
              src={`${imageBaseUrl}${consultant.gambar_nonbg}`}
              alt={`${consultant.nama_gelar}`}
              width={500}
              height={400}
              objectFit="cover"
              loading="lazy"
            />
          </div>
        </div> */}
        <div className="flex flex-col md:flex-row justify-between items-start w-full mb-20">
          <div className="md:w-1/2 flex flex-col justify-center  md:text-left mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-3 text-black">
              {consultant.nama_gelar}
            </h2>
            <p className="max-w-lg text-black font-light text-justify">
              <span
                dangerouslySetInnerHTML={{ __html: consultant.keterangan }}
              />
            </p>
          </div>
          <div className="md:flex justify-center hidden">
            <Image
              src={`${imageBaseUrl}${consultant.gambar_nonbg}`}
              alt={`${consultant.nama_gelar}`}
              width={400}
              height={400}
              objectFit="cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
