import Image from "next/image";
import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";

interface ArticleData {
  id: number;
  judul: string;
  konten: string;
  gambar: string;
  tanggal: string;
  keterangan_gambar: string;
}

const ArticleNew = () => {
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
    <div className="flex flex-col w-full xl:w-[40%]">
      <h2 className="text-3xl font-semibold text-start text-black mb-8">
        Berita Teratas
      </h2>
      <div className="flex flex-col w-full bg-white p-4 rounded-xl shadow-lg shadow-slate-200">
        <div className="flex flex-col gap-y-4">
          {articles.map((article) => (
            <Link
              href={`/article/${article.id}`}
              key={article.id}
              className="flex w-full text-black group gap-x-4 items-start"
            >
              <div>
                <Image
                  src={`${imageBaseUrl}${article.gambar}`}
                  alt={article.judul}
                  width={100}
                  height={100}
                  objectFit="cover"
                  className="h-20 w-48"
                />
              </div>
              <div className="w-full flex flex-col items-start justify-between gap-y-1">
                <p className="text-[16px] md:text-[16px] group-hover:text-[#21409A]">
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
    </div>
  );
};

export default ArticleNew;
