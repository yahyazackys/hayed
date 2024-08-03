"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

interface JobData {
  id: number;
  nama_pekerjaan: string;
  keterangan: string;
}

interface JobProps {
  job: JobData | null;
}

export default function Job({ job }: JobProps) {
  const pathname = usePathname();

  if (!job) {
    return (
      <div className="w-full h-screen text-center flex items-center justify-center">
        No job found
      </div>
    );
  }

  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center px-6 md:px-12 lg:px-20 xl:px-40 py-28 md:py-32 lg:py-40"
    >
      <div className="flex flex-col md:flex-row md:justify-between gap-x-10 w-full gap-y-8 md:gap-y-0">
        <div className="flex justify-center md:justify-start">
          <div className="max-w-full md:max-w-3xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 font-bold text-center md:text-left text-black">
              {job.nama_pekerjaan}
            </h2>
            <p className="text-justify text-black">
              <span dangerouslySetInnerHTML={{ __html: job.keterangan }} />
            </p>
          </div>
        </div>
        <div className="hidden md:flex justify-center md:justify-end items-center">
          <Image
            src="/logo-2.png"
            alt="Hayed Logo"
            width={400}
            height={300}
            className="w-auto h-auto max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
