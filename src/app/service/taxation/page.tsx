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
          loading="eager"
        />
        <div className="absolute inset-0 bg-black-original opacity-40 rounded-lg transition-opacity duration-100 ease-in-out"></div>
        <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center mt-8 md:mt-12 lg:mt-16 xl:mt-20 px-6 md:px-12 lg:px-20 xl:px-28 pb-20 flex-col z-20 gap-y-4 max-w-full md:max-w-[80%] lg:max-w-[70%]">
          <span className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-left">
            Bingung cara membuat laporan keuangan?
          </span>
          <span className="text-white text-md md:text-lg xl:text-xl font-extralight text-left">
            Kami Selalu Siap Membantumu
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full justify-between py-8 md:py-10 px-6 md:px-12 lg:px-40">
        <div className="hidden md:flex flex-col w-1/4 items-center lg:items-start mb-10 lg:mb-0">
          <Image
            src="/service/tax-icon.png"
            alt="Background image"
            width={100}
            height={100}
            objectFit="contain"
            className="w-1/2"
            layout="responsive"
          />
        </div>
        <div className="max-md:flex md:hidden flex-col items-center justify-center w-full mb-10 lg:mb-0">
          <Image
            src="/service/tax-icon.png"
            alt="Background image"
            width={200}
            height={100}
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col items-start text-black w-full lg:w-1/2 gap-y-2 md:gap-y-4 justify-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            APA ITU LAYANAN PAJAK ?
          </h2>
          <p className="text-[16px] md:text-lg font-normal text-justify">
            Dengan adanya perubahan terus-menerus dalam hukum dan regulasi
            perpajakan, layanan perpajakan ini dapat membantu individu dan
            perusahaan untuk tetap mematuhi aturan dan menghindari masalah pajak
            yang tidak diinginkan.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full justify-between px-6 md:px-12 lg:px-40 py-8 md:py-20">
        <div className="flex flex-col w-full lg:w-1/2 text-black gap-y-2 lg:pr-24 mb-10 lg:mb-0">
          <h2 className="text-3xl font-bold">KAMI MELAYANI :</h2>

          <ul className="list-disc text-justify gap-y-4 flex flex-col">
            <li>
              <b>
                Pajak pribadi tahunan
                <br />
              </b>
              Penyusunan dan pengajuan deklarasi pajak pribadi bagi individu,
              termasuk karyawan, pengusaha, atau investor. Konsultan akan
              membantu mengoptimalkan pemotongan pajak dan memastikan ketaatan
              terhadap peraturan pajak yang berlaku.
            </li>
            <li>
              <b>
                Pajak perusahaan dan bisnis bulanan dan tahunan
                <br />
              </b>
              Pengelolaan kewajiban pajak bulanan dan tahunan bagi perusahaan
              dan bisnis. Konsultan akan memastikan pemenuhan peraturan
              perpajakan dan penyusunan laporn keuangan yang sesuai dengan
              standar pajak yang berlaku.
            </li>
            <li>
              <b>
                Perencanaan pajak lokal dan internasional
                <br />
              </b>
              Perencanaan pajak strategis baik di tingkat lokal maupun
              internasional. Konsultan akan membantu mengidentifikasi peluang
              untuk menoptimalkan struktur perpajakan dan mengurangi beban pajak
              dengan mempertimbangkan hukum pajak dari berbagai yurisdiksi.
            </li>
            <li>
              <b>
                Tinjauan diagnostik pajak
                <br />
              </b>
              Tinjauan menyeluruh atas situasi pajak suatu perusahaan atau
              individu. Konsultan akan mengidentifikasi risiko pajak, potensi
              kepatuhan pajak yang terlewatkan, serta memberikan rekomendasi
              perbaikan dan strategi untuk mengelola risiko pajak.
            </li>
            <li>
              <b>
                Konsultasi manajemen pajak
                <br />
              </b>
              Bimibingan dan konsultasi khusus kepada manajemen perusahaan
              terkait kebijakan pajak dan pengambilan keputusan strategis dalam
              bidang perpajakan. Tujuannya untuk mencapai tujuan bisnis sambal
              mempertimbangkan dampaknya terhadap kewajiban pajak.
            </li>
            <li>
              <b>
                Penasihat pajak akuntansi
                <br />
              </b>
              Penilaian dan penyesuaian metode akuntansi untuk mengoptimalkan
              dampak pajak pada laporan keuangan perusahaan. Konsultan akan
              membantu mengidentifikasi metode yang sesuai untuk memaksimalkan
              manfaat pajak.
            </li>
            <li>
              <b>
                Penasihat risiko pajak
                <br />
              </b>
              Mengidentifikasi, menganalisis, dan mitigasi risiko pajak yang
              meungkin dihadapi oleh perusahaan. Konsultan akan membantu
              perusahaan memahami dampak potensial dari perubahan hukum pajak
              atau kebijakan pemerintah.
            </li>
            <li>
              <b>
                Optimalisasi dan efisiensi pajak
                <br />
              </b>
              Mengoptimalkan struktur perpajakan perusahaan guna mengurangi
              beban pajak secara sah dan efisien. Konsultan akan membantu
              menemukan cara-cara untuk memanfaatkan insentif pajak dan
              mengurangi pembayaran pajak yang tidak perlu.
            </li>
            <li>
              <b>
                Pemeriksaan Pajak, Keberatan dan Banding
                <br />
              </b>
              Representasi dan pembelaan atas nama perusahaan atau individu
              dalam pemeriksaan pajak oleh otoritas pajak. Konsultan akan
              membantu menyusun dokumen dan argumen yang diperlukan serta
              membantu dalam proses banding jika diperlukan.
            </li>
            <li>
              <b>
                Peninjauan kembali pajak
                <br />
              </b>
              Peninjauan ulang atas laporan pajak sebelumnya guna
              mengidentifikasi kesalahan atau potensi perbaikan yang dapat
              menguntungkan perusahaan atau individu secara finansial.
            </li>
            <li>
              <b>
                Penggabungan & akuisisi pasca pemeriksaan pajak (M&A)
                <br />
              </b>
              Peninjauan pemeriksaan pajak terkait dengan proses penggabungan
              dan akuisisi perusahaan. Konsultan akan mengevaluasi potensi
              risiko pajak yang terkait dengan transaksi M&A dan memberikan
              rekomendasi strategis untuk mengurangi potensi masalah perpajakan
              masa depan.
            </li>
            <li>
              <b>
                Perencanaan penetapan harga transfer pricing, kepatuhan, dan
                resolusi kontroversi
                <br />
              </b>
              Perencanaan strategis terkait penetapan harga transfer, kepatuhan,
              dan penyelesaian masalah atau kontroversi yang berkaitan dengan
              praktik penetapan harga transfer. Konsultan akan membantu
              perusahaan dalam mengikuti aturan perpajakan yang berlaku untuk
              transaksi antar perusahaan yang terafiliasi.
            </li>
            <li>
              <b>
                Strategi Pertahanan Penetapan Transfer Pricing
                <br />
              </b>
              Penyusunan strategi pertahanan jika terjadi pemeriksaan atau
              kontroversi terkait penetapan harga transfer oleh otoritas pajak.
              Konsultan akan membantu dalam menyusun argumen dan bukti yang kuat
              untuk mendukung kepatuhan perusahaan dengan prinsip-prinsip
              transfer pricing.
            </li>
            <li>
              <b>
                Transfer Pricing dan Bea Cukai
                <br />
              </b>
              Perencanaan dan implementasi praktik transfer harga yang mematuhi
              ketentuan perpajakan yang berlaku. Konsultan akan membantu
              perusahaan mengoptimalkan struktur transfer harga dan memastikan
              kepatuhan dengan regulasi bea cukai.
            </li>
            <li>
              <b>
                Pengembalian PPN
                <br />
                Pengajuan pengembalian Pajak Pertambahan Nilai (PPN) bagi
                perusahaan atau individu yang memiliki hak untuk mengklaim
                kredit pajak yang belum digunakan dalam transaksi bisnis mereka.
              </b>
            </li>
            <li>
              <b>
                Penyelesaian sengketa PPN (audit, keberatan, dan banding)
                <br />
              </b>
              Representasi dan pembelaan atas nama perusahaan atau individu
              dalam penyelesaian sengketa PPN dengan otoritas pajak. Konsultan
              akan membantu dalam proses audit, menyusun argumen keberatan, dan
              melakukan proses banding jika diperlukan.
            </li>
            <li>
              <b>
                Tinjauan uji tuntas PPN
                <br />
              </b>
              Tinjauan mendalam atas kewajiban PPN yang relevan untuk transaksi
              atau kegiatan perusahaan. Konsultan akan mengevaluasi kepatuhan
              perusahaan terhadap peraturan PPN dan memberikan rekomendasi untuk
              meningkatkan ketaatan.
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
