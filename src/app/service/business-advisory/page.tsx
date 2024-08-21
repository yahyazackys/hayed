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
          src="/service/business-advisory/bg.png"
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
            src="/service/business-advisory/icon.png"
            alt="Background image"
            width={100}
            height={100}
            objectFit="cover"
            className="w-1/2"
            layout="responsive"
          />
        </div>
        <div className="flex flex-col items-start text-black w-full lg:w-1/2 gap-y-4 justify-center">
          <h2 className="text-3xl font-bold">WHAT IS A BUSINESS ADVISOR?</h2>
          <p className="text-lg font-normal text-justify">
            This service focuses on providing strategic advice, suggestions, and
            a guide to help companies achieve their business goals more
            effectively and efficiently. We will help your company in overcoming
            challenges, planning growth, and improve company performance. We
            hope to help company to run operations more effectively, achieve
            sustainable growth, and remain competitive in the environment
            dynamic business.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full justify-between px-6 md:px-12 lg:px-40 py-20">
        <div className="flex flex-col w-full lg:w-1/2 text-black gap-y-2 lg:pr-24 mb-10 lg:mb-0">
          <h2 className="text-3xl font-bold">WE SERVE :</h2>

          <ul className="list-disc text-justify gap-y-4 flex flex-col">
            <li>
              <b>
                Labor Regulation Advisor
                <br />
              </b>
              Provide advice and guidance to companies or organizations on how
              to comply with applicable labor regulations within the scope of
              relevant laws.
            </li>

            <li>
              <b>
                New Business Establishment
                <br />
              </b>
              This process involves various stages, planning, and actions that
              must be taken to turn a business idea into reality.
            </li>

            <li>
              <b>
                Payroll Advisory
                <br />
              </b>
              We ensure that the payroll process runs smoothly, accurately, and
              in accordance with applicable legal provisions.
            </li>

            <li>
              <b>
                Capital Market Services (IPO Services)
                <br />
              </b>
              This service focuses on providing guidance and support to
              companies looking to list their shares on the stock exchange. The
              IPO process is complex and governed by strict regulations that
              require careful planning and execution. In addition, we help
              companies overcome challenges and maximize opportunities in
              accessing the capital market.
            </li>

            <li>
              <b>
                Enterprise Risk Management
                <br />
              </b>
              The representation of companies in protecting assets, reducing the
              probability of loss, and increasing the likelihood of success in
              achieving business goals.
            </li>

            <li>
              <b>
                Performance Improvement
                <br />
              </b>
              Refers to the efforts and actions taken to improve performance,
              efficiency, productivity, and work results, whether in the context
              of an individual, team, or the organization as a whole. Aims to
              achieve better results and reach the goals that have been set.
            </li>

            <li>
              <b>
                Effectiveness of the Finance Function
                <br />
              </b>
              It is critical for companies to maintain financial health, manage
              assets, and achieve business objectives. The finance function
              covers various aspects, including financial planning, cash flow
              management, financial reporting, financial risk management, and
              investment decision-making.
            </li>

            <li>
              <b>
                Preparation and Development of Standard Operating Procedures
                <br />
              </b>
              An important step in maintaining consistency, efficiency, and
              quality in business operations. It is accompanied by a document
              that outlines the steps to be followed to accomplish a task or
              activity in a consistent manner and in accordance with established
              standards.
            </li>

            <li>
              <b>
                Preparation and Assistance with Company Annual Reports
                <br />
              </b>
              This section is important to provide a comprehensive overview of
              the financial performance, achievements, and activities of the
              business during the year. The annual report is an important
              communication tool for stakeholders, including shareholders,
              investors, clients, suppliers, and regulators.
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
