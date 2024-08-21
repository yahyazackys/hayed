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
import Link from "next/link";

interface ArticleData {
  id: number;
  judul: string;
  konten: string;
  gambar: string;
  tanggal: string;
  keterangan_gambar: string;
}

const ArticleBanner = () => {
  const [articles, setArticles] = useState<ArticleData[]>([]);
  const apiUrl = "https://admin.hayedconsulting.com/api/berita-terbaru";
  const apiKey = "wnAQvTGkmLG0zLV1zWQlQo7OrA42TbvEvcMLtGbzPGu4NSfXuJ";
  const imageBaseUrl = "https://admin.hayedconsulting.com/new-images/";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            api_key: apiKey,
          },
        });
        setArticles(response.data.data);
      } catch (error) {
        console.error("Error fetching events:", error);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen text-center flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!articles || articles.length === 0) {
    return <div>No Articles found</div>;
  }

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
      {articles.map((article) => (
        <SwiperSlide key={article.id}>
          <div className="w-full h-screen relative">
            <Image
              src={`${imageBaseUrl}${article.gambar}`}
              alt={article.judul}
              fill
              objectFit="cover"
              loading="lazy"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black-original opacity-50 rounded-lg transition-opacity duration-500 ease-in-out group-hover:opacity-70"></div>
            <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center mt-16 md:mt-20 lg:mt-24 xl:mt-28 px-6 md:px-12 lg:px-20 xl:px-28 pb-20 flex-col z-10 gap-y-4 max-w-full md:max-w-[80%] lg:max-w-[70%]">
              <span className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-left">
                {article.judul}
              </span>
              <span className="text-white text-sm md:text-md font-extralight">
                {new Date(article.tanggal).toLocaleDateString()}
              </span>
              <span
                className="text-white text-lg md:text-xl lg:text-2xl xl:text-2xl font-extralight text-left line-clamp-2"
                dangerouslySetInnerHTML={{ __html: article.konten }}
              />
              <Link
                href={`/article/${article.id}`}
                key={article.id}
                className="text-white text-sm md:text-md font-light mt-2 hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ArticleBanner;
