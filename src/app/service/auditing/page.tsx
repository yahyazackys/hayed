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
            src="/service/auditing-icon.png"
            alt="Background image"
            width={100}
            height={100}
            objectFit="cover"
            className="w-1/2"
            layout="responsive"
          />
        </div>
        <div className="flex flex-col items-start text-black w-full lg:w-1/2 gap-y-4 justify-center">
          <h2 className="text-3xl font-bold">APA ITU AUDIT DAN JAMINAN?</h2>
          <p className="text-lg font-normal text-justify">
            Layanan ini memastikan bahwa laporan keuangan dan informasi lainnya
            akurat, andal, dan sesuai dengan standar akuntansi yang berlaku.
            Layanan audit penting untuk menjaga transparansi, akuntabilitas, dan
            kepercayaan dalam bisnis dan organisasi.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full justify-between px-6 md:px-12 lg:px-40 py-20">
        <div className="flex flex-col w-full lg:w-1/2 text-black gap-y-2 lg:pr-24 mb-10 lg:mb-0">
          <h2 className="text-3xl font-bold">KAMI MELAYANI :</h2>

          <ul className="list-disc text-justify gap-y-4 flex flex-col">
            <li>
              <b>
                Laporan Keuangan Keuangan
                <br />
              </b>
              Penyusunan laporan keuangan yang akurat, lengkap, sesuai dengan
              standar akuntansi yang berlaku, serta memberikan gambaran
              menyeluruh tentang kinerja keuangan suatu perusahaan dalam periode
              tertentu.
            </li>
            <li>
              <b>
                Prosedur yang Disetujui (AUP)
                <br />
              </b>
              Pemeriksaan independen terhadap informasi atau aspek tertentu
              dalam suatu perusahaan sesuai dengan prosedur yang telah disetujui
              sebelumnya. Hasil dari pemeriksaan disajikan dalam bentul laporan
              yang berisi temuan berdasarkan fakta dan bukti yang ditemukan
              selama proses AUP.
            </li>
            <li>
              <b>
                Pemeriksaan Pada Pro-forma Informasi keuangan
                <br />
              </b>
              Pemeriksaan independen atas informasi keuangan yang disajikan
              dalam bentuk laporan keuangan yang mencerminkan dampak potensial
              dan transaksi atau peristiwa tertentu di masa depan.
            </li>
            <li>
              <b>
                Audit Kinerja/Pengendalian Internal
                <br />
              </b>
              Pemeriksaan independen yang bertujuan untuk mengevaluasi efisiensi
              dan efektivitas operasional suatu perusahaan, termasuk
              pengendalian internal yang diterapkan dalam proses bisnis. Hasil
              audit akan memberikan rekomendasi untuk perbaikan dan peningkatan
              dalam manajemen risiko dan tata kelola perusahaan.
            </li>
            <li>
              <b>
                Comfort Letter tentang Pengungkapan Prospektus
                <br />
              </b>
              Penerbitan surat jaminan oleh konsultan atau auditor yang
              memberikan keyakninan kepada pihak lain tentang kelayakan dan
              kepatuhan informasi keuangan yang terdapat dalam prospectus
              penawaran saham atau surat berharga.
            </li>
            <li>
              <b>
                Tinjauan Independen secara Eksternal Informasi yang Dilaporkan
                <br />
              </b>
              Tinjauan independen atas informasi yang dilaporkan oleh suatu
              perusahaan, seperti tinjauan atas pembahasan dan analisis
              manajemen dalam laporan tahunan untuk memberikan keyakninan atas
              kualitas dan keandalan informasi yang disajikan.
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-full lg:w-1/2">
          <Image
            src="/service/auditing-serve.png"
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
