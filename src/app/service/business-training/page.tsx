"use client";

import React from "react";
import Header from "@/app/components/Header";
import Image from "next/image";
import Footer from "@/app/components/Footer";

export default function Page() {
  return (
    <main className="w-full h-full">
      <Header />

      <div className="w-full h-screen relative">
        <Image
          src="/seminar/bg.png"
          alt="Background image"
          fill
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black-original opacity-40 rounded-lg transition-opacity duration-100 ease-in-out"></div>
        <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center mt-8 md:mt-12 lg:mt-16 xl:mt-20 px-6 md:px-12 lg:px-20 xl:px-28 pb-20 flex-col z-20 gap-y-4 max-w-full md:max-w-[80%] lg:max-w-[70%]">
          <span className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center md:text-left">
            Bingung cara membuat laporan keuangan?
          </span>
          <span className="text-white text-md md:text-lg xl:text-xl font-extralight text-center md:text-left">
            Kami Selalu Siap Membantumu
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full justify-between py-10 px-6 md:px-12 lg:px-40">
        <div className="flex flex-col w-1/4 items-center lg:items-start mb-10 lg:mb-0">
          <Image
            src="/service/business-icon.png"
            alt="Background image"
            width={100}
            height={100}
            objectFit="cover"
            className="w-1/2"
            layout="responsive"
          />
        </div>
        <div className="flex flex-col items-start text-black w-full lg:w-1/2 gap-y-4 justify-center">
          <h2 className="text-3xl font-bold">APA ITU BISNIS PELATIHAN?</h2>
          <p className="text-lg font-normal text-justify">
            Layanan ini berisi serangkaian kegiatan yang bertujuan untuk
            mengembangkan pengetahuan, keterampilan, dan kompetensi seseorang
            atau kelompok dalam suatu bidang tertentu. Pelatihan dapat
            diselenggarakan oleh berbagai jenis organisasi, termasuk perusahaan,
            institusi pendidikan, lembaga pemerintah, dan penyedia layanan
            pelatihan independen. Tujuan utama dari layanan pelatihan adalah
            meningkatkan kemampuan individu atau kelompok sehingga mereka dapat
            bekerja lebih efektif dan produktif.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full justify-between px-6 md:px-12 lg:px-40 py-20">
        <div className="flex flex-col w-full lg:w-1/2 text-black gap-y-2 lg:pr-24 mb-10 lg:mb-0">
          <h2 className="text-3xl font-bold">KAMI MELAYANI :</h2>

          <ul className="list-disc text-justify gap-y-4 flex flex-col">
            <li>
              <b>
                Seminar dan Pelatihan Akuntansi
                <br />
              </b>
              Mencakup upaya untuk berbagi pengetahuan dan pengalaman di bidang
              akuntansi melalui penyelenggaraan seminar, workshop, atau
              pelatihan. Tujuan dari jasa ini adalah untuk memberikan informasi
              terbaru tentang peraturan, praktik, dan tren akuntansi kepada
              peserta sehingga mereka dapat meningkatkan keterampilan dan
              pemahaman mereka.
            </li>

            <li>
              <b>
                Seminar dan Pelatihan Perpajakan
                <br />
              </b>
              Seminar dan pelatihan khusus tentang isu-isu perpajakan, termasuk
              Pajak Pertambahan Nilai (PPN). Peserta akan diberikan informasi
              mengenai peraturan dan praktik perpajakan terkini agar mereka
              dapat mengelola pajak secara efisien dan sesuai dengan peraturan
              yang berlaku.
            </li>

            <li>
              <b>
                Pelatihan VAT
                <br />
              </b>
              Membekali peserta dengan pengetahuan mendalam tentang peraturan
              perpajakan PPN, metode perhitungan, prosedur pengajuan, dan
              kepatuhan pajak yang relevan. Konsep dasar PPN, klasifikasi
              transaksi yang kena pajak, tarif PPN yang berlaku, serta
              persyaratan administrasi dan pelaporan yang harus dipenuhi.
            </li>

            <li>
              <b>
                Brevet A,B, & C
                <br />
              </b>
              Program pelatihan dan persiapan ujian untuk sertifikasi Brevet A,
              B, dan C, yang merupakan sertifikasi profesi di bidang perpajakan.
              Program ini membekali peserta dengan pengetahuan dan keterampilan
              yang diperlukan untuk berhasil dalam ujian sertifikasi dan menjadi
              profesional pajak yang berkualifikasi.
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-full lg:w-1/2">
          <Image
            src="/service/business-serve.png"
            alt="Background image"
            width={100}
            height={100}
            objectFit="cover"
            className="w-full"
            layout="responsive"
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
