import { useState, useEffect } from "react";
import axios from "axios";
import { GrArticle } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";

interface Article {
  id: number;
  judul: string;
  konten: string;
  gambar: string;
  keterangan_gambar: string;
}

const ArticleSection = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const imageBaseUrl = "http://hayed-admin.com/new-images/";
  const apiUrl = "https://hayed-admin.com/api/berita-hangat";
  const apiKey = "wnAQvTGkmLG0zLV1zWQlQo7OrA42TbvEvcMLtGbzPGu4NSfXuJ";

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

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div
      id="article"
      className="w-full flex items-center px-8 md:px-20 lg:px-40 py-12 md:py-16"
    >
      <div className="flex flex-col w-full">
        <div className="flex flex-row items-center mb-2 md:mb-8">
          <GrArticle size={32} />
          <h2 className="text-[24px] md:text-4xl font-bold text-start ml-3 text-black-original">
            Artikel
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link
              href={`/article/${article.id}`}
              key={article.id}
              className="relative bg-[#00213F] border border-gray-200 rounded-lg shadow h-[420px] bg-cover bg-center transition duration-300 ease-in-out group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Latar belakang hitam */}
              {/* <div className="absolute inset-0 bg-black opacity-50 rounded-lg transition-opacity duration-500 ease-in-out group-hover:opacity-70"></div> */}
              {/* Gambar dengan next/Image */}
              <div className="relative w-full h-full">
                <Image
                  src={`${imageBaseUrl}${article.gambar}`}
                  alt={article.keterangan_gambar}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              {/* Latar belakang hitam */}
              <div className="absolute inset-0 bg-black-original opacity-20 rounded-lg transition-opacity duration-500 ease-in-out group-hover:opacity-70"></div>
              {/* Konten teks */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                {/* Judul artikel */}
                <h5
                  className={`text-[19px] md:text-2xl font-bold tracking-tight text-gray-100 text-start mb-2 transition-all duration-500 ease-in-out group-hover:text-white`}
                >
                  {article.judul}
                </h5>
                {/* Deskripsi artikel */}
                <p
                  className={`font-normal text-gray-300 text-justify text-sm overflow-hidden ${
                    hoveredIndex === index
                      ? "max-h-[100px] text-lg"
                      : "max-h-10"
                  } transition-all duration-500 ease-in-out group-hover:max-h-[200px] group-hover:text-white`}
                >
                  {/* Gunakan dangerouslySetInnerHTML untuk menampilkan konten HTML */}
                  <span dangerouslySetInnerHTML={{ __html: article.konten }} />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;
