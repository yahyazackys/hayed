// components/ServiceCard.js

import { useState } from "react";
import Image from "next/image";
import { FaHandshakeSimple } from "react-icons/fa6";

const ServiceCard = () => {
  const [services] = useState([
    {
      imageName: "/service/accounting/icon-white.png",
      title: "Accounting",
      description:
        "Accounting services are a process for preparing and preparing financial reports that begin with data collection/proof of transactions/invoices/recap records which are processed into financial reports.",
    },
    {
      imageName: "/service/tax/icon-white.png",
      title: "Tax",
      description:
        "Service tax is a tax collected by the government. In Indonesia it is generally 10% of your total bill. The bill includes food, drinks and other services such as ambiance.",
    },
    {
      imageName: "/service/business-advisory/icon-white.png",
      title: "Business & Financial Advisor",
      description:
        "a business advisor is a wise strategist who works for the entrepreneur's company and helps him in various departments - business planning, marketing, finance and even business development.",
    },
    {
      imageName: "/service/business-training/icon-white.png",
      title: "Business Training",
      description:
        "Business training is a process of exploring the abilities/potential of individuals by asking questions to get the goals to be achieved.",
    },
  ]);

  return (
    <div
      id="service"
      className="w-full flex items-center px-6 md:px-12 lg:px-20 xl:px-40 py-12 md:py-16"
    >
      <div className="flex flex-col w-full">
        <div className="flex items-center">
          <FaHandshakeSimple size={32} className="text-black" />
          <h2 className="text-2xl md:text-3xl font-bold text-start ml-3 text-black">
            OUR SERVICES
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-4 md:p-6 bg-[#00213F] border border-gray-200 rounded-lg shadow flex flex-col items-center"
            >
              <Image
                src={service.imageName}
                alt={service.title}
                width={260}
                height={120}
                className="h-auto"
              />
              <h5 className="text-xl md:text-2xl font-bold tracking-tight text-gray-100 text-center mt-4">
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
