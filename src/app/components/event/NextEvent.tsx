// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import "swiper/css/autoplay";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import Link from "next/link";

// interface NextEvent {
//   id: number;
//   judul: string;
//   gambar: string;
// }

// const NextEvent = () => {
//   const [events, setEvents] = useState<NextEvent[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const imageBaseUrl = "http://hayed-admin.com/event-images/";

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const apiUrl = "https://hayed-admin.com/api/agenda-selanjutnya";
//         const apiKey = "wnAQvTGkmLG0zLV1zWQlQo7OrA42TbvEvcMLtGbzPGu4NSfXuJ";

//         const response = await axios.get(apiUrl, {
//           headers: {
//             api_key: apiKey,
//           },
//         });
//         setEvents(response.data.data);
//       } catch (error) {
//         console.error("Error fetching events:", error);
//         setError("Failed to fetch data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <Swiper
//       modules={[Navigation, Pagination, Autoplay]}
//       spaceBetween={30}
//       centeredSlides={false}
//       autoplay={{
//         delay: 5000,
//         disableOnInteraction: false,
//       }}
//       speed={1000}
//       slidesPerView={1}
//       slidesPerGroup={1}
//       navigation={{
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       }}
//       pagination={{
//         clickable: true,
//         dynamicBullets: true,
//       }}
//       breakpoints={{
//         640: {
//           slidesPerView: 1,
//           slidesPerGroup: 1,
//         },
//         768: {
//           slidesPerView: 2,
//           slidesPerGroup: 2,
//         },
//         1024: {
//           slidesPerView: 3,
//           slidesPerGroup: 1,
//         },
//         1400: {
//           slidesPerView: 4,
//           slidesPerGroup: 1,
//         },
//       }}
//       className="mySwiper w-full px-20"
//     >
//       {events.map((event) => (
//         <SwiperSlide key={event.id} className="py-8">
//           <div className="flex justify-center items-center h-full">
//             <div className="bg-white shadow-lg rounded-xl overflow-hidden w-72 md:w-80">
//               <Link href={`/previousEvent/${event.id}`}>
//                 <div className="relative h-72 w-full">
//                   <Image
//                     src={`${imageBaseUrl}${event.gambar}`}
//                     alt={event.judul}
//                     layout="fill"
//                     objectFit="cover"
//                   />
//                 </div>
//                 <div className="py-4 px-4 text-center">
//                   <h2 className="text-lg font-normal text-black-soft break-words">
//                     {event.judul}
//                   </h2>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//       <div className="swiper-button-prev absolute transform -translate-y-1/2 after:text-gray-400"></div>
//       <div className="swiper-button-next absolute transform -translate-y-1/2 after:text-gray-400"></div>
//     </Swiper>
//   );
// };

// export default NextEvent;
