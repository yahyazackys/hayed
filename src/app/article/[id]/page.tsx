import Image from "next/image";
import axios from "axios";
import { Montserrat, Poppins } from "next/font/google";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

const InformasiDetail = async ({ params }: { params: { id: string } }) => {
  const apiUrl = `https://hayed-admin.com/api/berita/${params.id}/detail`;
  const apiKey = "wnAQvTGkmLG0zLV1zWQlQo7OrA42TbvEvcMLtGbzPGu4NSfXuJ";
  const imageBaseUrl = "http://hayed-admin.com/new-images/";

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        api_key: apiKey,
      },
    });
    const informasi = response.data.data;

    return (
      <div className="w-full flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <section
            id="about"
            className="w-[70%] min-h-screen flex items-center px-6 sm:px-12 xl:px-28 py-28 sm:py-32 xl:py-40"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between gap-x-10 w-full gap-y-8 sm:gap-y-0">
              <div className="w-full flex justify-center sm:justify-start">
                <div className="w-full flex flex-col items-start">
                  <h2 className="text-2xl xl:text-3xl mb-6 font-bold text-center sm:text-left text-black">
                    {informasi.judul}
                  </h2>
                  <p>{informasi.tanggal}</p>
                  <div className="relative flex justify-center w-full sm:justify-end items-center mb-6 mt-2">
                    <div className="relative w-full h-[20rem] xl:h-[30rem]">
                      <Image
                        src={`${imageBaseUrl}${informasi.gambar}`}
                        alt={`${informasi.judul}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                  <p className="max-w-full text-justify text-black">
                    <span
                      dangerouslySetInnerHTML={{ __html: informasi.konten }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error fetching data.</div>;
  }
};

export async function generateStaticParams() {
  const apiUrl = "https://hayed-admin.com/api/berita";
  const apiKey = "wnAQvTGkmLG0zLV1zWQlQo7OrA42TbvEvcMLtGbzPGu4NSfXuJ";

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        api_key: apiKey,
      },
    });
    const informasiList = response.data.data;

    return informasiList.map((informasi: { id: number }) => ({
      id: informasi.id.toString(),
    }));
  } catch (error) {
    console.error("Error fetching data for static params:", error);
    return [];
  }
}

export default InformasiDetail;
