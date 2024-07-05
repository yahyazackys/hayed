"use client";

import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaRegClock } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="w-full py-16 px-4 md:px-8 lg:px-16 xl:px-40 bg-[#0B436B] z-20 flex flex-col  gap-y-12 rounded-t-[100px] shadow-xl shadow-white"
    >
      <div className="flex flex-col lg:flex-row justify-between w-full items-center gap-y-16 lg:gap-y-0">
        <div className="flex flex-col items-center lg:items-start">
          <Image
            src={"/logo-white.png"}
            width={200}
            height={100}
            alt={"Hayed Logo"}
          ></Image>
        </div>
        <div className="flex flex-col gap-y-8 w-full lg:w-[50%]">
          <h3 className="text-xl font-bold text-white text-center lg:text-left">
            Lokasi
          </h3>
          <div className="flex flex-col gap-y-10 font-medium lg:max-w-[90%]">
            <div className="flex items-center gap-x-3">
              <CiLocationOn size={32} color="white" />
              <div className="flex flex-col gap-y-2">
                <div className="font-semibold text-lg text-white">Kantor</div>
                <div className="font-normal text-sm text-white">
                  Pusat Bisnis Thamrin City, Jl. Thamrin Boulevard Lt 7 OS 23,
                  Tanah Abang, Jakarta Pusat 10230
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-3">
              <CiLocationOn size={32} color="white" />
              <div className="flex flex-col gap-y-2">
                <div className="font-semibold text-lg text-white">
                  Lokakarya & Korespondensi
                </div>
                <div className="font-normal text-sm text-white">
                  Golden Office Durian, Jl. Durian No.44c, Kota Jakarta Selatan,
                  Daerah Khusus Ibukota Jakarta 12620
                </div>
              </div>
            </div>
            {/* <div className="flex items-center gap-x-3">
              <CiLocationOn size={32} color="white" />
              <div className="flex flex-col gap-y-2">
                <div className="font-semibold text-lg text-white">
                  Lokakarya & Korespondensi
                </div>
                <div className="font-normal text-sm text-white">
                  Golden Office Durian, Jl. Durian No.44c, RT.2/RW.4, Jagakarsa,
                  Kec. Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota
                  Jakarta 12620
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="flex flex-col gap-y-8 w-full lg:w-[25%]">
          <h3 className="text-xl text-white font-bold text-center lg:text-left">
            Kontak Kami
          </h3>
          <div className="flex items-center gap-x-3">
            <BsTelephone size={24} color="white" />
            <div className="flex flex-col gap-y-2">
              <div className="font-semibold text-md text-white">
                0812 9090 8214 / 0811-9001-009
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <HiOutlineMail size={24} color="white" />
            <div className="flex flex-col gap-y-2">
              <div className="font-semibold text-md text-white">
                info@hayedconsulting.com
              </div>
            </div>
          </div>
          <div className="flex items-start gap-x-3">
            <FaRegClock size={24} color="white" />
            <div className="flex flex-col gap-y-2">
              <div className="font-semibold text-md text-white">Jam Buka</div>
              <div className="font-normal text-sm text-white">
                Senin - Jumat : 08.00 - 17.00 WIB
              </div>
              <div className="font-normal text-sm text-white">
                Sabtu - Minggu : Tutup
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pt-4 text-sm text-white">
        &copy;2023 Copyright by Hayed Consulting
      </div>
    </footer>
  );
}
