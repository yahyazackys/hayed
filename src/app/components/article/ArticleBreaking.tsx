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

const ArticleBreaking = () => {
  const [articles, setArticles] = useState<ArticleData[]>([]);
  const apiUrl = "https://admin.hayedconsulting.com/api/berita-hangat";
  const apiKey = "wnAQvTGkmLG0zLV1zWQlQo7OrA42TbvEvcMLtGbzPGu4NSfXuJ";
  const imageBaseUrl = "http://admin.hayedconsulting.com/new-images/";
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
    <div className="flex flex-wrap mt-8 gap-8 justify-between">
      {articles.map((article) => (
        <Link
          href={`/article/${article.id}`}
          key={article.id}
          className="relative overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl shadow-slate-200 flex-grow sm:w-[48%] md:w-[48%] xl:w-[31%] flex flex-col justify-start items-center mb-4"
        >
          <Image
            src={`${imageBaseUrl}${article.gambar}`}
            alt={article.judul}
            width={100}
            height={100}
            objectFit="cover"
            className=" h-72 object-cover w-full"
          />
          <div className="flex flex-col p-4 gap-y-5 w-full">
            <h5 className="text-lg md:text-xl font-normal text-start text-black h-16 overflow-hidden">
              {article.judul}
            </h5>
            <p
              className="font-light text-black text-justify tracking-tighter text-md line-clamp-3 h-[4.5rem]"
              dangerouslySetInnerHTML={{ __html: article.konten }}
            />
          </div>
          <div className="px-8 py-3 mb-6 mt-3 text-white text-sm hover:text-black-original hover:border-black-original border-white border bg-[#00213F] hover:bg-white rounded-tr-[40px] rounded-bl-[40px] items-center flex flex-col justify-center">
            Selengkapnya
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ArticleBreaking;
