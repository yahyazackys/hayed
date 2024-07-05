// components/ServiceCard.js

import { useState } from "react";
import Image from "next/image";
import { FaHandshakeSimple } from "react-icons/fa6";

const ServiceCard = () => {
  const [services] = useState([
    {
      imageName: "/accounting.png",
      title: "Accounting Service",
      description:
        "Accounting services are a process for preparing and preparing financial reports that begin with data collection/proof of transactions/invoices/recap records which are processed into financial reports.",
    },
    {
      imageName: "/advisory.png",
      title: "Auditing & Assurance",
      description:
        "Audit and assurance is the process of verifying the records available in a company's accounting records according to accounting standards and principles, It also confirms whether the accounting records are accurate.",
    },
    {
      imageName: "/auditing.png",
      title: "Tax Service",
      description:
        "Service tax is a tax collected by the government. In Indonesia it is generally 10% of your total bill. The bill includes food, drinks and other services such as ambiance.",
    },
    {
      imageName: "/business.png",
      title: "Business Advisory",
      description:
        "a business advisor is a wise strategist who works for the entrepreneur's company and helps him in various departments - business planning, marketing, finance and even business development.",
    },
    {
      imageName: "/tax.png",
      title: "Business Training",
      description:
        "Business training is a process of exploring the abilities/potential of individuals by asking questions to get the goals to be achieved.",
    },
  ]);

  return (
    <div
      id="service"
      className="w-full flex items-center px-4 md:px-8 lg:px-16 xl:px-20 py-8 md:py-12 lg:py-16"
    >
      <div className="flex flex-col w-full">
        <div className="flex items-center">
          <FaHandshakeSimple size={32} className="text-black" />
          <h2 className="text-2xl md:text-3xl font-bold text-start ml-3 text-black">
            OUR SERVICES
          </h2>
        </div>
        <div className="flex flex-wrap justify-center md:justify-between gap-4 mt-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-4 md:p-6 bg-[#00213F] border border-gray-200 rounded-lg shadow w-full md:w-72 flex flex-col items-center h-auto md:h-[420px]"
            >
              <Image
                src={service.imageName}
                alt={service.title}
                width={120}
                height={120}
                className="h-auto"
              />
              <h5 className="text-xl md:text-2xl font-bold tracking-tight text-gray-100 text-center h-20 mt-4">
                {service.title}
              </h5>
              <p className="font-normal text-gray-300 text-justify text-sm mt-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
