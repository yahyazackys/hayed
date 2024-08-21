import { useState } from "react";

const FaqSection = () => {
  const [faqs] = useState([
    {
      question: "How can I use Hayed Consulting's consulting services?",
      answer:
        "You can contact our consulting team by phone (0811-9001-009) or email (info@hayedconsulting.com) to arrange an initial meeting. We will listen to your business needs and provide solutions that suit your company or business goals.",
    },
    {
      question: "Does Hayed Consulting serve from various industries?",
      answer:
        "Yes, we serve industrial clients, including manufacturing, issuers, professional services, trading, non-governmental organizations (NGO), technology, telecommunications, banking, agribusiness, and others. Our team has extensive knowledge to address the specialized needs of various sectors.",
    },
    {
      question: "Why should I use consulting services from Hayed Consulting?",
      answer:
        "Because Hayed Consulting has a wide range of consulting services, including finance, audit, tax, business, and training.",
    },
    {
      question: "When is the right time to use a consultant?",
      answer:
        "When you seek expert guidance to optimize strategy, improve operational efficiency, and drive growth for your company or business.",
    },
    {
      question: "Who can use the services of Hayed Consulting?",
      answer:
        "All, for those of you who want to develop businesses ranging from small to large scale.",
    },
    {
      question: "What are the operational hours of Hayed Consulting?",
      answer:
        "Monday-Friday at 08.00–17.00 WIB, but outside of that, you can contact us via email at info@hayedconsulting.com.",
    },
  ]);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full flex items-center px-6 md:px-12 lg:px-20 pt-20 pb-32 bg-[#00213F] rounded-t-[40px] md:rounded-t-[100px] -mb-24">
      <div className="flex flex-col w-full items-center">
        <h2 className="text-[24px] md:text-[30px] font-bold text-start ml-3 text-white">
          FAQ's
        </h2>
        <p className="font-normal text-[17px] md:text-[19px] mb-8 text-white items-center">
          View the frequently asked questions below
        </p>
        <div className="flex flex-wrap w-full justify-center">
          {faqs.map((faq, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-[45%] mb-4">
              <div
                onClick={() => toggleAccordion(index)}
                className={`cursor-pointer transition-colors duration-300 p-4 rounded-t-lg ${
                  activeIndex === index
                    ? "bg-white text-black-original"
                    : "bg-transparent text-white"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-[16px] md:text-xl font-medium">
                    {faq.question}
                  </span>
                  <span className="text-xl">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </div>
              </div>
              <div
                className={`overflow-hidden transition-max-height duration-500 rounded-b-lg ease-in-out ${
                  activeIndex === index
                    ? "max-h-[200px] bg-white p-4"
                    : "max-h-0"
                }`}
              >
                <p className="text-black">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
