import Image from "next/image";
import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { FaSort } from "react-icons/fa";

interface ArticleData {
  id: number;
  id_servis: number;
  judul: string;
  konten: string;
  gambar: string;
  tanggal: string;
  keterangan_gambar: string;
  services: {
    id: number;
    servis: string;
  };
}

const ArticleFeed = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [articles, setArticles] = useState<ArticleData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const apiUrl = "https://hayed-admin.com/api/berita-terbaru";
  const apiKey = "wnAQvTGkmLG0zLV1zWQlQo7OrA42TbvEvcMLtGbzPGu4NSfXuJ";
  const imageBaseUrl = "https://hayed-admin.com/new-images/";

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

  const handleServiceClick = (serviceId: number | null) => {
    setSelectedService(serviceId);
  };

  const uniqueServices = useMemo(() => {
    return Array.from(
      new Map(
        articles.map((article) => [article.services.id, article.services])
      ).values()
    );
  }, [articles]);

  const filteredArticles = useMemo(() => {
    return selectedService
      ? articles.filter((article) => article.id_servis === selectedService)
      : articles;
  }, [articles, selectedService]);

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
    <div className="flex flex-col w-full xl:w-[60%]">
      <div className="flex justify-between w-full mb-8 items-center">
        <h2 className="text-3xl font-semibold text-start text-black">
          Feed Berita
        </h2>
        <div className="relative">
          <div className="dropdown dropdown-end dropdown-hover text-black-soft">
            <div className="flex gap-x-2 items-center">
              <FaSort size={16} color="black" />
              <p
                tabIndex={0}
                className="bg-white text-black-soft hover:cursor-pointer"
              >
                Pilih Servis
              </p>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box"
            >
              <li>
                <button onClick={() => handleServiceClick(null)}>
                  Semua Berita
                </button>
              </li>
              {uniqueServices.map((service) => (
                <li key={service.id}>
                  <button onClick={() => handleServiceClick(service.id)}>
                    {service.servis}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-8">
        {filteredArticles.map((article) => (
          <Link
            href={`/article/${article.id}`}
            key={article.id}
            className="flex w-full text-black gap-x-5 group"
          >
            {/* <div className="w-32 md:w-80"> */}
            <div>
              <Image
                src={`${imageBaseUrl}${article.gambar}`}
                alt={article.judul}
                width={100}
                height={100}
                objectFit="cover"
                className="h-32 w-80 object-cover"
                unoptimized
              />
            </div>
            {/* </div> */}
            <div className="w-full flex flex-col items-start justify-start gap-y-1">
              <p className="text-[18px] md:text-[20px] group-hover:text-[#21409A]">
                {article.judul}
              </p>
              <p className="text-[11px] font-light">
                {new Date(article.tanggal).toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticleFeed;
