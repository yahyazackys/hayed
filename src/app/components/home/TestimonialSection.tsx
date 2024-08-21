import Image from "next/image";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "PT Jaswita Jabar",
      testimonial:
        "The experience of working with Hayed was an incredibly enjoyable experience. Have a good team, able to work together cooperatively and transparently. There are no restrictions, but still according to the scope of work and regulations. The way to communicate with the team is very good, flexible and easy to understand. Even when problems are encountered, both parties often find the right solution. Hopefully the collaboration between PT Jaswita Jabar and Hayed will continue to exist in the future.",
      image: "/testimoni/jaswitajabar.png",
    },
    {
      name: "PT Tae Hang Indonesia",
      testimonial:
        "Very cooperative cooperation, good communication, if there is a problem it is handled quickly, good response. Hopefully it will continue to be maintained, so that it remains a comfortable partner.",
      image: "/testimoni/tahaeng.jpg",
    },
  ];

  return (
    <div className="w-full flex items-center px-6 md:px-12 lg:px-20 py-12 md:py-16">
      <div className="flex flex-col w-full items-center gap-y-8 md:gap-y-12 lg:gap-y-16">
        <h2 className="text-[24px] md:text-4xl font-bold text-start ml-3 text-black">
          Testimoni Client
        </h2>
        <div className="flex flex-col md:flex-row mt-8 w-full gap-y-8 md:gap-x-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 bg-[#0B436B] shadow w-full md:w-1/2 flex flex-col items-center mb-8 rounded-[40px]"
            >
              <div className="absolute -top-12 md:top-[-72px] w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full object-contain"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h5 className="my-8 md:mt-16 text-[22px] md:text-[30px] font-bold tracking-tight text-gray-100 text-center">
                {testimonial.name}
              </h5>
              {/* <p className="font-normal text-gray-300 text-md mb-8 text-center w-[80%]">
                {testimonial.position}
              </p> */}
              <p className="font-normal text-gray-300 text-[16px] md:text-[18px] mb-8 text-center w-[80%]">
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
