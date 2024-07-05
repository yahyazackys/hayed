import Image from "next/image";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "PT Jaswita Jabar",
      testimonial:
        "Pengalaman bekerja sama dengan Hayed merupakan pengalaman yang luar biasa menyenangkan. Memiliki tim yang baik, dapat bekerja sama secara kooperatif dan transparan. Tidak ada batasan, namun tetap sesuai scope pekerjaan dan aturan. Cara berkomunikasi dengan tim sangat baik, fleksibel, dan mudah dipahami. Ketika menemukan problem sekalipun, kedua pihak seringkali mendapatkan solusi yang tepat. Semoga kerjasama antara PT Jaswita Jabar dan Hayed tetap terjalin ke depannya.",
      image: "/testimoni/jaswitajabar.png",
    },
    {
      name: "PT Tae Hang Indonesia",
      testimonial:
        "Untuk kerjasama sangat kooperatif, komunikasi bagus, dikala ada masalah cepat penanganannya, respon bagus. Semoga akan terus dipertahankan, sehingga tetap menjadi partner yang nyaman.",
      image: "/testimoni/tahaeng.jpg",
    },
  ];

  return (
    <div className="w-full flex items-center px-6 md:px-12 lg:px-20 py-16">
      <div className="flex flex-col w-full items-center gap-y-8 md:gap-y-12 lg:gap-y-16">
        <h2 className="text-3xl font-bold text-start ml-3 text-black">
          TESTIMONI CLIENT
        </h2>
        <div className="flex flex-col md:flex-row mt-8 w-full gap-x-8 lg:gap-x-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 bg-[#0B436B] shadow w-full md:w-1/2 flex flex-col items-center mb-8 rounded-[40px]"
            >
              <div className="absolute -top-12 md:top-[-40px] w-24 h-24 bg-white rounded-full flex items-center justify-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={100}
                  height={80}
                  className="rounded-full object-cover"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h5 className="my-8 md:mt-16 text-2xl font-bold tracking-tight text-gray-100 text-center">
                {testimonial.name}
              </h5>
              {/* <p className="font-normal text-gray-300 text-md mb-8 text-center w-[80%]">
                {testimonial.position}
              </p> */}
              <p className="font-normal text-gray-300 text-md mb-8 text-center w-[80%]">
                {testimonial.testimonial}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
