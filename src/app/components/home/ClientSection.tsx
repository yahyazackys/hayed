import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const ClientSection = () => {
  const clients = [
    { name: "agrojabar", logo: "/client/agrojabar.png" },
    { name: "alkautsar", logo: "/client/alkautsar.png" },
    { name: "aql", logo: "/client/aql.png" },
    { name: "avillajaya", logo: "/client/avillajaya.png" },
    { name: "baitulmaal", logo: "/client/baitulmaal.png" },
    { name: "bangunprimasemesta", logo: "/client/bangunprimasemesta.png" },
    { name: "bjb", logo: "/client/bjb.png" },
    { name: "cendikiaglobalsolusi", logo: "/client/cendikiaglobalsolusi.png" },
    { name: "effori", logo: "/client/effori.png" },
    { name: "elgayasa", logo: "/client/elgayasa.png" },
    { name: "indomobil", logo: "/client/indomobil.png" },
    { name: "indomobil2", logo: "/client/indomobil2.png" },
    { name: "jaswitajabar", logo: "/client/jaswitajabar.png" },
    { name: "octa", logo: "/client/octa.png" },
    { name: "pasifictech", logo: "/client/pasifictech.png" },
    { name: "pratama", logo: "/client/pratama.png" },
    { name: "sucofindo", logo: "/client/sucofindo.png" },
    { name: "sulutgo", logo: "/client/sulutgo.png" },
    { name: "surveyorindonesia", logo: "/client/surveyorindonesia.png" },
    { name: "tanhaeng", logo: "/client/tanhaeng.png" },
    { name: "voksel", logo: "/client/voksel.png" },
  ];

  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="clients"
      className="w-full py-12 md:py-16 overflow-hidden flex justify-center items-center"
    >
      <div className="flex flex-col items-center w-full">
        <h2 className="text-[24px] md:text-4xl font-bold text-black mb-2 md:mb-16">
          Our Clients
        </h2>
        <div className="hidden md:block w-full">
          <Slider {...settings}>
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={280}
                  height={180}
                  className="object-contain"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="md:hidden max-md:block w-full">
          <Slider {...settings}>
            {clients.map((client, index) => (
              <div
                key={index}
                className="max-w-40 flex items-center justify-center"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
