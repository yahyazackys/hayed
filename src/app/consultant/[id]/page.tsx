import Image from "next/image";
import axios from "axios";
import { Montserrat, Poppins } from "next/font/google";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

const InformasiDetail = async ({ params }: { params: { id: string } }) => {
  const apiUrl = `https://admin.hayedconsulting.com/api/consultant/${params.id}/detail`;
  const apiKey = "wnAQvTGkmLG0zLV1zWQlQo7OrA42TbvEvcMLtGbzPGu4NSfXuJ";
  const imageBaseUrl = "http://admin.hayedconsulting.com/consultantBg-images/";

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        api_key: apiKey,
      },
    });
    const informasi = response.data.data;

    return (
      <main className="w-full h-full">
        <Header />
        <section
          id="about"
          className="w-full min-h-screen flex items-center px-6 md:px-12 lg:px-20 xl:px-40 py-28 md:py-32 lg:py-40"
        >
          <div className="flex flex-col md:flex-row md:justify-between gap-x-10 w-full gap-y-8 md:gap-y-0">
            <div className="w-[50%] flex justify-center md:justify-start">
              <div className="max-w-full">
                <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 font-bold text-center md:text-left text-black-original">
                  {informasi.nama_asli}
                </h2>
                <p className="max-w-full md:max-w-3xl text-justify text-black">
                  <span
                    dangerouslySetInnerHTML={{ __html: informasi.keterangan }}
                  />
                </p>
              </div>
            </div>
            <div className="flex justify-center md:justify-end items-center">
              <Image
                src={`${imageBaseUrl}${informasi.gambar_bg}`}
                alt="Hayed Logo"
                width={500}
                height={300}
              />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error fetching data.</div>;
  }
};

export async function generateStaticParams() {
  const apiUrl = "https://admin.hayedconsulting.com/api/consultant";
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
