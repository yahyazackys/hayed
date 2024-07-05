import { useState } from "react";

const ProgramSection = () => {
  const [faqs] = useState([
    {
      question:
        "Bagaimana saya dapat menggunakan layanan konsultasi dari Hayed Consulting?",
      answer:
        "Anda dapat menghubungi tim konsultan kami melalui telepon (0812-9090-8214 / 0811-9001-009) atau email (info@hayedconsulting.com) untuk mengatur pertemuan awal. Kami akan mendengarkan kebutuhan bisnis Anda dan memberikan solusi yang sesuai dengan tujuan perusahaan atau bisnis Anda.",
    },
    {
      question:
        "Apakah Hayed Consulting melayani dari berbagai industri? Jika iya, apa yang menjadi fokus utama dari layanan Hayed Consulting?",
      answer:
        "Ya, kami melayani klien dari berbagai industri, termasuk industri manufaktur, layanan profesional, perdagangan, Non-Goverment Organization (NGO), Teknologi, Telekomunikasi, Perbankan, Agribisnis, dan lainnya. Tim kami telah memiliki pengetahuan yang luas untuk mengatasi kebutuhan khusus dari berbagai sektor.",
    },
    {
      question:
        "Mengapa saya harus menggunakan jasa konsultasi dari Hayed Consulting?",
      answer:
        "Karena Hayed Consulting memiliki berbagai layanan jasa konsultan, meliputi keuangan, audit, pajak, bisnis, dan juga pelatihan.",
    },
    {
      question: "Kapan waktu yang tepat untuk menggunakan jasa konsultan?",
      answer:
        "Saat Anda mencari panduan dari ahli untuk mengoptimalkan strategi, meningkatkan efisiensi operasional, dan mendorong pertumbuhan bagi perusahaan atau bisnis Anda.",
    },
    {
      question:
        "Siapa saja yang dapat menggunakan layanan dan jasa dari Hayed Consulting?",
      answer:
        "Semua, bagi Anda yang ingin mengembangkan bisnis mulai dari skala kecil hingga besar.",
    },
    {
      question: "Jam berapa operasional Hayed Consulting?",
      answer:
        "Senin-Jumat pukul 08.00 - 17.00, namun di luar itu anda dapat menghubungi kami melalui email info@hayedconsulting.com.",
    },
    {
      question: "Apa saja akun sosial media Hayed Consulting?",
      answer:
        "Instagram: @hayed_consulting\n\nWebsite: https://hayedconsulting.com/\nLinkedin: Hayed Consulting\nFacebook Fanpage: hayedconsulting\nTwitter: Hayedconsulting",
    },
    {
      question:
        "Bagaimana cara mengikuti aktivitas terbaru dari Hayed Consulting?",
      answer:
        "Anda bisa mengikuti akun media sosial kami atau berlangganan newsletter kami melalui situs web untuk mendapatkan update terbaru mengenai aktivitas dan acara yang kami adakan.",
    },
    {
      question: "Apakah ada program khusus untuk startup di Hayed Consulting?",
      answer:
        "Ya, kami memiliki program khusus untuk startup yang mencakup mentoring, pendampingan dalam perencanaan bisnis, dan akses ke jaringan investor.",
    },
    {
      question: "Bagaimana cara mendaftar untuk pelatihan di Hayed Consulting?",
      answer:
        "Anda bisa mendaftar melalui situs web kami atau menghubungi tim kami langsung melalui telepon atau email untuk informasi lebih lanjut.",
    },
  ]);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const programFaqs = faqs.slice(0, 5);
  const activityFaqs = faqs.slice(5);

  return (
    <div className="w-full flex items-center px-6 md:px-12 lg:px-20 pt-20 pb-32 bg-[#00213F] rounded-t-[100px] -mb-24">
      <div className="flex flex-col w-full items-center">
        <h2 className="text-3xl font-bold text-start ml-3 text-white">
          Program dan Aktivitas
        </h2>
        <p className="font-normal text-md mb-8 text-white items-center">
          Program dan Aktivitas yang ada di Hayed Consulting
        </p>
        <div className="flex flex-wrap w-full justify-center gap-x-8 mt-8">
          <div className="w-full md:w-1/2 lg:w-[45%] flex flex-col items-center">
            <h3 className="text-2xl font-extrabold text-white mb-4">Program</h3>
            {programFaqs.map((faq, index) => (
              <div
                key={index}
                className="collapse collapse-plus bg-transparent mb-4 w-full"
              >
                <input
                  type="radio"
                  name="accordion"
                  id={`accordion-radio-program-${index}`}
                  className="hidden"
                />
                <label
                  onClick={() => toggleAccordion(index)}
                  className={`collapse-title text-xl font-medium cursor-pointer ${
                    activeIndex === index
                      ? "bg-white text-black"
                      : "text-white bg-transparent"
                  }`}
                  htmlFor={`accordion-radio-program-${index}`}
                >
                  {faq.question}
                </label>
                <div
                  className={`collapse-content ${
                    activeIndex === index
                      ? "bg-white transition-max-h duration-500 ease-out max-h-[500px]"
                      : "max-h-0"
                  } overflow-hidden`}
                >
                  <p className="text-black p-4">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2 lg:w-[45%] flex flex-col items-center">
            <h3 className="text-2xl font-extrabold text-white mb-4">
              Aktivitas
            </h3>
            {activityFaqs.map((faq, index) => (
              <div
                key={index + 5}
                className="collapse collapse-plus bg-transparent mb-4 w-full"
              >
                <input
                  type="radio"
                  name="accordion"
                  id={`accordion-radio-activity-${index}`}
                  className="hidden"
                />
                <label
                  onClick={() => toggleAccordion(index + 5)}
                  className={`collapse-title text-xl font-medium cursor-pointer ${
                    activeIndex === index + 5
                      ? "bg-white text-black"
                      : "text-white bg-transparent"
                  }`}
                  htmlFor={`accordion-radio-activity-${index}`}
                >
                  {faq.question}
                </label>
                <div
                  className={`collapse-content ${
                    activeIndex === index + 5
                      ? "bg-white transition-max-h duration-500 ease-out max-h-[500px]"
                      : "max-h-0"
                  } overflow-hidden`}
                >
                  <p className="text-black p-4">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramSection;
