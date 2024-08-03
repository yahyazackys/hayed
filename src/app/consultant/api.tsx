"use client";

import Image from "next/image";

interface ConsultantData {
  id: number;
  nama_asli: string;
  nama_gelar: string;
  pekerjaan: string;
  keterangan: string;
  gambar_bg: string;
  gambar_nonbg: string;
}

interface ConsultantProps {
  consultant: ConsultantData | null;
}

const imageBaseUrl = "http://hayed-admin.com/consultantBg-images/";

export default function Consultant({ consultant }: ConsultantProps) {
  if (!consultant) {
    return (
      <div className="w-full h-screen text-center flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <section className="w-full min-h-screen flex items-center px-6 md:px-12 lg:px-20 xl:px-40 py-28 md:py-32 lg:py-40">
      <div className="flex flex-col md:flex-row md:justify-between gap-x-10 w-full gap-y-8 md:gap-y-0">
        <div className="flex justify-center md:justify-start">
          <div className="max-w-full md:max-w-3xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 font-bold text-center md:text-left text-black">
              {consultant.nama_gelar}
            </h2>
            <p className="text-justify text-black">
              <span
                dangerouslySetInnerHTML={{ __html: consultant.keterangan }}
              />
            </p>
          </div>
        </div>
        <div className="hidden md:flex justify-center md:justify-end items-center">
          <div className="w-72 h-72 rounded-full overflow-hidden">
            <Image
              src={`${imageBaseUrl}${consultant.gambar_bg}`}
              alt={consultant.nama_gelar}
              layout="responsive"
              width={400}
              height={300}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
