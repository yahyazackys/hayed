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
          src="/service/tax/bg.png"
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
            src="/service/tax/icon.png"
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
            src="/service/tax/icon.png"
            alt="Background image"
            width={200}
            height={100}
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col items-start text-black w-full lg:w-1/2 gap-y-2 justify-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            WHAT IS TAX SERVICE?
          </h2>
          <p className="text-[16px] md:text-lg font-normal text-justify">
            With constant changes in laws and regulations taxation, this tax
            service can help individuals and companies to remain in compliance
            with the rules and avoid tax problems which is undesirable.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full justify-between px-6 md:px-12 lg:px-40 py-8 md:py-20">
        <div className="flex flex-col w-full lg:w-1/2 text-black gap-y-2 lg:pr-24 mb-10 lg:mb-0">
          <h2 className="text-3xl font-bold">WE SERVE :</h2>
          <ul className="list-disc text-justify gap-y-4 flex flex-col">
            <li>
              <b>
                Annual Personal Tax
                <br />
              </b>
              Preparation and filing of personal tax declarations for
              individuals, including employees, entrepreneurs, or investors.
              Consultants will help optimize tax deductions and ensure
              compliance with applicable tax regulations.
            </li>
            <li>
              <b>
                Monthly and Annual Corporate and Business Tax
                <br />
              </b>
              Management of monthly and annual tax obligations for companies and
              businesses. Consultants will ensure compliance with tax
              regulations and preparation of financial reports in accordance
              with applicable tax standards.
            </li>
            <li>
              <b>
                Local and International Tax Planning
                <br />
              </b>
              Strategic tax planning at both local and international levels. The
              consultant will help identify opportunities to optimize tax
              structure and reduce tax burden by considering the tax laws of
              various jurisdictions.
            </li>
            <li>
              <b>
                Tax Diagnostic Review
                <br />
              </b>
              A comprehensive review of the tax situation of a company or
              individual. The consultant will identify tax risks, potential
              missed tax compliance, and provide recommendations for
              improvements and strategies to manage tax risks.
            </li>
            <li>
              <b>
                Tax Management Consulting
                <br />
              </b>
              Specialized guidance and consultation to company management on tax
              policy and strategic tax decision-making. The goal is to achieve
              business objectives while considering the impact on tax
              obligations.
            </li>
            <li>
              <b>
                Accounting Tax Advisor
                <br />
              </b>
              Assessment and adjustment of accounting methods to optimize the
              tax impact on the company's financial statements. The consultant
              will help identify appropriate methods to maximize tax benefits.
            </li>
            <li>
              <b>
                Tax Risk Advisor
                <br />
              </b>
              Identify, analyze, and mitigate tax risks that may be faced by the
              company. Consultants will help companies understand the potential
              impact of changes in tax laws or government policies.
            </li>
            <li>
              <b>
                Tax Optimization and Efficiency
                <br />
              </b>
              Optimize the company's tax structure to legally and efficiently
              reduce the tax burden. Consultants will help find ways to utilize
              tax incentives and reduce unnecessary tax payments.
            </li>
            <li>
              <b>
                Tax Audit, Objection, and Appeal
                <br />
              </b>
              Representation and defense on behalf of companies or individuals
              in tax audits by tax authorities. The consultant will help draft
              the necessary documents and arguments and assist in the appeal
              process if required.
            </li>
            <li>
              <b>
                Tax Review
                <br />
              </b>
              Review of previous tax returns to identify errors or potential
              improvements that may benefit the company or individual
              financially.
            </li>
            <li>
              <b>
                Merger & Acquisition Tax Audit Post (M&A)
                <br />
              </b>
              Tax audit review related to the process of merging and acquiring
              companies. The consultant will evaluate potential tax risks
              associated with M&A transactions and provide strategic
              recommendations to mitigate potential future tax issues.
            </li>
            <li>
              <b>
                Transfer Pricing Planning, Compliance, and Controversy
                Resolution
                <br />
              </b>
              Strategic planning related to transfer pricing, compliance, and
              resolution of issues or controversies relating to transfer pricing
              practices. The consultant will assist the company in following the
              tax rules applicable to transactions between affiliated companies.
            </li>
            <li>
              <b>
                Transfer Pricing Defense Strategy
                <br />
              </b>
              Formulation of defense strategies in the event of an audit or
              controversy related to transfer pricing by the tax authorities.
              Consultants will assist in drafting strong arguments and evidence
              to support the company's compliance with transfer pricing
              principles.
            </li>
            <li>
              <b>
                Transfer Pricing and Customs
                <br />
              </b>
              Planning and implementation of transfer pricing practices that
              comply with applicable tax provisions. Consultants will help
              companies optimize transfer pricing structures and ensure
              compliance with customs regulations.
            </li>
            <li>
              <b>
                VAT Refund
                <br />
              </b>
              Filing Value Added Tax (VAT) returns for companies or individuals
              who have the right to claim unused tax credits in their business
              transactions.
            </li>
            <li>
              <b>
                VAT Dispute Resolution (Audit, Objection, and Appeal)
                <br />
              </b>
              Representation and defense on behalf of companies or individuals
              in VAT dispute resolution with tax authorities. Consultants will
              assist in the audit process, draft objection arguments, and
              conduct the appeal process if needed.
            </li>
            <li>
              <b>
                Due Diligence Review on VAT
                <br />
              </b>
              In-depth review of VAT obligations relevant to the company's
              transactions or activities. The consultant will evaluate the
              company's compliance with VAT regulations and provide
              recommendations to improve compliance.
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
