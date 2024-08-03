"use client";

import { Suspense } from "react";
import { NextPage } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface ArticleData {
  id: number;
  judul: string;
  konten: string;
  gambar: string;
  tanggal: string;
  keterangan_gambar: string;
}

const SearchResults = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<ArticleData[]>([]);

  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const imageBaseUrl = "http://hayed-admin.com/new-images/";

  useEffect(() => {
    console.log("Keyword:", keyword);
    const fetchSearchResults = async () => {
      try {
        const apiUrl = `https://hayed-admin.com/api/berita/search?keyword=${encodeURIComponent(
          keyword
        )}`;
        const apiKey = "wnAQvTGkmLG0zLV1zWQlQo7OrA42TbvEvcMLtGbzPGu4NSfXuJ";
        const response = await axios.get(apiUrl, {
          headers: {
            api_key: apiKey,
          },
        });
        setResults(response.data.data || []);
      } catch (error) {
        setError("Error fetching search results");
      } finally {
        setLoading(false);
      }
    };

    if (keyword.trim() !== "") {
      fetchSearchResults();
    } else {
      setLoading(false); // Set loading to false if no keyword is present
    }
  }, [keyword]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Error: {error}
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div>
        <Header />
        <div className="w-full h-screen flex items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">
            No results found for "{keyword}"
          </h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto py-44">
        <h1 className="text-3xl font-bold mb-4">
          Search Results for "{keyword}"
        </h1>
        <div className="flex flex-wrap mt-8 gap-8 justify-between">
          {results.map((article) => (
            <Link
              href={`/article/${article.id}`}
              key={article.id}
              className="relative bg-white rounded-lg shadow-xl shadow-slate-200 flex-grow sm:w-[48%] md:w-[48%] xl:w-[31%] flex flex-col justify-start items-center mb-4"
            >
              <Image
                src={`${imageBaseUrl}${article.gambar}`}
                alt={article.judul}
                width={100}
                height={100}
                objectFit="cover"
                className="w-full lg:max-h-72 md:max-h-60 max-h-52 object-cover"
              />
              <div className="flex flex-col p-4 gap-y-5 w-full">
                <h5 className="text-lg md:text-xl font-normal text-start text-black max-h-16">
                  {article.judul}
                </h5>
                <p
                  className="font-light text-black text-justify tracking-tighter text-md line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: article.konten }}
                />
              </div>
              <div className="px-8 py-3 mb-6 mt-3 text-white text-sm hover:text-black-original hover:border-black-original border-white border bg-[#00213F] hover:bg-white rounded-tr-[40px] rounded-bl-[40px] items-center flex flex-col justify-center">
                Selengkapnya
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

const SearchResultsPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <SearchResults />
  </Suspense>
);

export default SearchResultsPage;
