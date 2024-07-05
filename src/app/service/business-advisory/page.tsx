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
            src="/service/advisory-icon.png"
            alt="Background image"
            width={100}
            height={100}
            objectFit="cover"
            className="w-1/2"
            layout="responsive"
          />
        </div>
        <div className="flex flex-col items-start text-black w-full lg:w-1/2 gap-y-4 justify-center">
          <h2 className="text-3xl font-bold">APA ITU PENASIHAT BISNIS?</h2>
          <p className="text-lg font-normal text-justify">
            Layanan ini berfokus pada memberikan nasihat strategis, saran, dan
            panduan untuk membantu perusahaan mencapai tujuan bisnis mereka
            dengan lebih efektif dan efisien. Kami akan membantu perusahaan Anda
            dalam mengatasi tantangan, merencanakan pertumbuhan, dan
            meningkatkan kinerja perusahaan. Kami berharap dapat membantu
            perusahaan untuk menjalankan operasi dengan lebih efektif, meraih
            pertumbuhan berkelanjutan, dan tetap kompetitif dalam lingkungan
            bisnis yang dinamis.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full justify-between px-6 md:px-12 lg:px-40 py-20">
        <div className="flex flex-col w-full lg:w-1/2 text-black gap-y-2 lg:pr-24 mb-10 lg:mb-0">
          <h2 className="text-3xl font-bold">KAMI MELAYANI :</h2>

          <ul className="list-disc text-justify gap-y-4 flex flex-col">
            <li>
              <b>
                Penasihat Peraturan Ketenagakerjaan
                <br />
              </b>
              Memberikan nasihat dan panduan kepada perusahaan atau organisasi
              tentang cara mematuhi peraturan ketenagakerjaan yang berlaku dalam
              lingkup hukum yang relevan.
            </li>

            <li>
              <b>
                Pendirian bisnis baru
                <br />
              </b>
              Proses ini melibatkan berbagai tahapan, perencanaan, dan tindakan
              yang harus dilakukan untuk mengubah ide bisnis menjadi kenyataan.
            </li>

            <li>
              <b>
                Penasehat gaji
                <br />
              </b>
              Kami memastikan bahwa proses penggajian berjalan dengan lancar,
              akurat, dan sesuai dengan ketentuan hukum yang berlaku.
            </li>

            <li>
              <b>
                Layanan Pasar Modal (IPO Jasa)
                <br />
              </b>
              Layanan ini berfokus pada memberikan panduan dan dukungan kepada
              perusahaan yang ingin mencatatkan sahamnya di bursa saham. Proses
              IPO yang kompleks dan diatur oleh peraturan-peraturan yang ketat
              membutuhkan perencanaan dan pelaksanaan yang hati-hati. Selain
              itu, kami membantu perusahaan untuk menghadapi tantangan dan
              memaksimalkan peluang dalam mengakses pasar modal.
            </li>

            <li>
              <b>
                Manajemen risiko perusahaan
                <br />
              </b>
              Representasi perusahaan dalam melindungi aset, mengurangi
              kemungkinan kerugian, dan meningkatkan kemungkinan kesuksesan
              dalam mencapai sasaran bisnis.
            </li>

            <li>
              <b>
                Peningkatan performa
                <br />
              </b>
              Merujuk pada usaha dan tindakan yang diambil untuk meningkatkan
              kinerja, efisiensi, produktivitas, dan hasil kerja baik dalam
              konteks individu, tim, atau organisasi secara keseluruhan.
              Bertujuan agar dapat mencapai hasil yang lebih baik dan mencapai
              tujuan yang telah ditetapkan.
            </li>

            <li>
              <b>
                Efektivitas fungsi keuangan
                <br />
              </b>
              Perusahaan sangat penting untuk menjaga kesehatan keuangan,
              pengelolaan aset, dan pencapaian tujuan bisnis. Fungsi keuangan
              mencakup berbagai aspek, termasuk perencanaan keuangan,
              pengelolaan arus kas, pelaporan keuangan, pengelolaan risiko
              keuangan, dan pengambilan keputusan investasi.
            </li>

            <li>
              <b>
                Persiapan dan pengembangan dari prosedur operasi standar
                <br />
              </b>
              Merupakan langkah penting dalam menjaga konsistensi, efisiensi,
              dan kualitas dalam operasi bisnis. Hal ini disertai dengan dokumen
              yang menguraikan langkah-langkah yang harus diikuti untuk
              menyelesaikan suatu tugas atau aktivitas dengan cara yang
              konsisten dan sesuai dengan standar yang ditetapkan.
            </li>

            <li>
              <b>
                Persiapan dan bantuan dengan laporan tahunan perusahaan
                <br />
              </b>
              Bagian ini penting untuk memberikan gambaran menyeluruh tentang
              kinerja keuangan, pencapaian, dan aktivitas bisnis selama satu
              tahun. Laporan tahunan merupakan alat komunikasi penting kepada
              pemangku kepentingan, termasuk pemegang saham, investor, klien,
              pemasok, serta regulator.
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-full lg:w-1/2">
          <Image
            src="/service/advisory-serve.png"
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
