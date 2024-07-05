"use client";

import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";

export default function page() {
  return (
    <main className="w-full h-full">
      <Header />
      <section className="w-full h-screen flex flex-col justify-center items-center px-10 md:px-40">
        <div className="flex flex-col md:flex-row justify-between items-center w-full mb-20">
          <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-3 text-black">Our Vision</h2>
            <p className="max-w-lg text-black font-light text-justify">
              Our vision is to become a Leading Consultant and Knowledge Center
              in the fields of Taxation, Accounting, and Business Management.
            </p>
          </div>
          <div className="md:flex justify-center hidden">
            <Image
              src="/vision-mission/mission.png"
              alt="Vision Image"
              width={500}
              height={100}
              objectFit="cover"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="hidden md:flex justify-center order-2 md:order-1">
            <Image
              src="/vision-mission/vision.png"
              alt="Mission Image"
              width={500}
              height={400}
              objectFit="cover"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center text-center md:text-end order-1 md:order-2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-3 text-black">Our Mission</h2>
            <p className="max-w-lg text-black font-light md:self-end text-justify">
              Our missions are strengthening leadership in tax consulting
              services, accounting & business management, strengthening presence
              in the national market, providing the best service and quality for
              clients, and providing added value for client's business growth.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-10 md:px-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-10 text-black">
          Our Values
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              icon: "/solution.png",
              title: "Solution",
              description: "Description for value 1",
            },
            {
              icon: "/manageable.png",
              title: "Manageable",
              description: "Description for value 2",
            },
            {
              icon: "/accountable.png",
              title: "Accountable",
              description: "Description for value 3",
            },
            {
              icon: "/responsive.png",
              title: "Responsive",
              description: "Description for value 4",
            },
            {
              icon: "/trust.png",
              title: "Trust",
              description: "Description for value 5",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center max-w-xs text-center"
            >
              <img
                src={value.icon}
                alt={value.title}
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-2xl font-semibold text-black">
                {value.title}
              </h3>
              <p className="text-black font-light">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
