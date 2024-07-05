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
            src="/service/accounting-icon.png"
            alt="Background image"
            width={100}
            height={100}
            objectFit="cover"
            className="w-1/2"
            layout="responsive"
          />
        </div>
        <div className="flex flex-col items-start text-black w-full lg:w-1/2 gap-y-4 justify-center">
          <h2 className="text-3xl font-bold">APA ITU JASA AKUNTANSI?</h2>
          <p className="text-lg font-normal text-justify">
            Layanan ini memastikan bahwa keuangan perusahaan terkelola dengan
            baik, akurat, dan sesuai dengan standar akuntansi yang berlaku.
            Selain itu, layanan ini mencakup berbagai aktivitas, termasuk
            pencatatan transaksi keuangan, pelaporan keuangan, perencanaan
            pajak, analisis kinerja keuangan, serta konsultasi keuangan.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full justify-between px-6 md:px-12 lg:px-40 py-20">
        <div className="flex flex-col w-full lg:w-1/2 text-black gap-y-2 lg:pr-24 mb-10 lg:mb-0">
          <h2 className="text-3xl font-bold">KAMI MELAYANI :</h2>

          <ul className="list-disc text-justify gap-y-4 flex flex-col">
            <li>
              <b>
                Review Struktur Pengendalian Internal dan Sistem Informasi
                Keuangan
                <br />
              </b>
              Mengidentifikasi potensi risiko dan kelemahan dalam sistem agar
              perusahaan dapat meningkatkan efisiensi profesional dan keandalan
              laporan keuangan.
            </li>
            <li>
              <b>
                Saran Akuntansi dan Peraturan tentang GAAP dan IFRS Indonesia
                <br />
              </b>
              Panduan dan penjelasan tentang penerapan Standar Akuntansi
              Keuangan Indonesia (SAK) atau International Financial Reporting
              Standards (IFRS) di Indonesia.
            </li>
            <li>
              <b>
                Pelaporan Kinerja, Prakiraan dan Proyeksi
                <br />
              </b>
              Penyusunan laporan kinerja perusahaan, termasuk analisis data
              historis, peramalan masa depan, dan proyeksi keuangan. Bertujuan
              untuk membantu menajemen dalam pengambilan keputusan strategis dan
              merencanakan pertumbuhan bisnis.
            </li>
            <li>
              <b>
                Reviu Laporan Keuangan
                <br />
              </b>
              Pemeriksaan independen atas laporan keuangan perusahaan untuk
              memastikan kepatuhan terhadap standar akuntansi yang berlaku dan
              keakuratan informasi yang disajikan. Review ini memberikan
              keyakinan kepada pemangku kepentingan bahwa laporan keuangan telah
              diperiksa secara cermat.
            </li>
            <li>
              <b>
                Kompilasi Laporan Keuangan Bulanan dan Tahunan
                <br />
              </b>
              Penyusunan laporan keuangan bulanan dan tahunan perusahaan. Tim
              konsultan akan membantu dalam menutup periode akuntansi, neraca
              saldo, rekonsiliasi, serta mengumpulkan dan menganalisis data
              keuangan agar laporan akhir mencerminkan kinerja dan posisi
              keuangan perusahaan secara akurat.
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-full lg:w-1/2">
          <Image
            src="/service/accounting-serve.png"
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
