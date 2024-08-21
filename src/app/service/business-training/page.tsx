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
          src="/service/business-training/bg.png"
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
            src="/service/business-training/icon.png"
            alt="Background image"
            width={100}
            height={100}
            objectFit="cover"
            className="w-1/2"
            layout="responsive"
          />
        </div>
        <div className="flex flex-col items-start text-black w-full lg:w-1/2 gap-y-4 justify-center">
          <h2 className="text-3xl font-bold">WHAT IS A TRAINING BUSINESS?</h2>
          <p className="text-lg font-normal text-justify">
            This service contains a series of activities aimed at develop one's
            knowledge, skills and competencies or group in a particular field.
            Training can organized by various types of organizations, including
            corporations, educational institutions, government agencies, and
            service providers independent training. The main aim of the training
            service is improve the abilities of individuals or groups so that
            they can work more effectively and productively.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full justify-between px-6 md:px-12 lg:px-40 py-20">
        <div className="flex flex-col w-full lg:w-1/2 text-black gap-y-2 lg:pr-24 mb-10 lg:mb-0">
          <h2 className="text-3xl font-bold">WE SERVE :</h2>

          <ul className="list-disc text-justify gap-y-4 flex flex-col">
            <li>
              <b>
                Accounting Seminar and Training
                <br />
              </b>
              Covers efforts to share knowledge and experience in the field of
              accounting through organizing seminars, workshops, or training.
              The purpose of this service is to provide participants with the
              latest information on accounting regulations, practices, and
              trends so that they can improve their skills and understanding.
            </li>

            <li>
              <b>
                Taxation Seminar and Training
                <br />
              </b>
              Specialized seminars and training on taxation issues, including
              value-added tax (VAT). Participants will be provided with
              information on the latest tax regulations and practices so that
              they can manage their taxes efficiently and in accordance with
              applicable regulations.
            </li>

            <li>
              <b>
                VAT Training
                <br />
              </b>
              Equip participants with in-depth knowledge of relevant VAT tax
              regulations, calculation methods, filing procedures, and tax
              compliance. Basic concepts of VAT, classification of taxable
              transactions, applicable VAT rates, and administrative and
              reporting requirements that must be met.
            </li>

            <li>
              <b>
                Brevet A, B, & C
                <br />
              </b>
              Training and exam preparation program for Brevet A, B, and C
              certifications, which are professional certifications in taxation.
              This program equips participants with the knowledge and skills
              necessary to succeed in the certification exam and become
              qualified tax professionals.
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
