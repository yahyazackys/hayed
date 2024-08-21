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
          src="/service/accounting/bg.png"
          alt="Background image"
          fill
          objectFit="cover"
          className="z-0"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black-original opacity-50 rounded-lg transition-opacity duration-100 ease-in-out"></div>
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
            src="/service/accounting/icon.png"
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
            src="/service/accounting/icon.png"
            alt="Background image"
            width={200}
            height={100}
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col items-start text-black w-full lg:w-1/2 gap-y-4 justify-center">
          <h2 className=" text-2xl md:text-3xl font-bold">
            WHAT ARE ACCOUNTING SERVICES?
          </h2>
          <p className="text-[16px] md:text-lg font-normal text-justify">
            This service ensures that the company's finances are well managed
            good, accurate, and in accordance with applicable accounting
            standards. Additionally, the service covers a wide range of
            activities, including recording financial transactions, financial
            reporting, planning taxes, financial performance analysis, and
            financial consulting.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full justify-between px-6 md:px-12 lg:px-40 py-8 md:py-20">
        <div className="flex flex-col w-full lg:w-1/2 text-black gap-y-2 lg:pr-24 mb-10 lg:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold">OUR SERVICE :</h2>

          <ul className="text-[16px] list-disc text-justify gap-y-4 flex flex-col">
            <li>
              <b>
                Review of Internal Control Structure and Information Systems
                Finance.
                <br />
              </b>
              Identify potential risks and weaknesses in the agar system The
              company can improve professional efficiency and reliability
              financial statements.
            </li>
            <li>
              <b>
                Accounting Advice and Regulations on Indonesian GAAP and IFRS
                <br />
              </b>
              Guidance and explanation regarding the application of Accounting
              Standards Indonesian Finance (SAK) or International Financial
              Reporting Standards (IFRS) in Indonesia.
            </li>
            <li>
              <b>
                Performance Reporting, Forecasts, and Projections
                <br />
              </b>
              Preparation of company performance reports, including data
              analysis historical, future forecasting, and financial
              projections. Purposeful to assist management in making strategic
              decisions and planning business growth.
            </li>
            <li>
              <b>
                Financial Report Review
                <br />
              </b>
              Independent examination of the company's financial statements for
              ensure compliance with applicable accounting standards and
              accuracy of the information presented. This review delivers
              confidence to stakeholders that the financial statements have been
              checked carefully.
            </li>
            <li>
              <b>
                Compilation of Monthly and Annual Financial Reports
                <br />
              </b>
              Preparation of company monthly and annual financial reports. Team
              the consultant will assist in closing the accounting period,
              balance sheet balances, reconciliations, and collecting and
              analyzing data financial statements so that the final report
              reflects performance and position company finances accurately.
            </li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col w-full lg:w-1/2">
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
