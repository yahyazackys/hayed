import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";

interface BannerData {
  id: number;
  judul: string;
  keterangan: string;
  gambar: string;
}

const Banner = () => {
  const [banners, setBanners] = useState<BannerData[]>([]);
  const apiUrl = "https://hayed-admin.com/api/banner";
  const apiKey = "wnAQvTGkmLG0zLV1zWQlQo7OrA42TbvEvcMLtGbzPGu4NSfXuJ";
  const imageBaseUrl = "http://hayed-admin.com/banner-images/";

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            api_key: apiKey,
          },
        });
        setBanners(response.data.data);
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };

    fetchBanners();
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      effect="slide"
      speed={1200}
      loop
      pagination={{
        clickable: true,
      }}
      className="mySwiper w-full"
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          <div className="w-full h-screen relative">
            <Image
              src={`${imageBaseUrl}${banner.gambar}`}
              alt={banner.judul}
              fill
              objectFit="cover"
              loading="lazy"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center mt-16 md:mt-20 lg:mt-24 xl:mt-28 px-6 md:px-12 lg:px-20 xl:px-28 pb-20 flex-col z-10 gap-y-4 max-w-full md:max-w-[80%] lg:max-w-[70%]">
              <span className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center md:text-left">
                {banner.judul}
              </span>
              <span
                className="text-white text-lg md:text-xl lg:text-2xl xl:text-2xl font-extralight text-center md:text-left"
                dangerouslySetInnerHTML={{ __html: banner.keterangan }}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
