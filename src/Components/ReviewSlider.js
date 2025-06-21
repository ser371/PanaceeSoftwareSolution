import React from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ReviewSlider() {
  const slides = [
    {
      heading: "Transforming Business with Cutting-Edge Software Solutions",
      text: "Our innovative software solutions have revolutionized the way businesses operate, providing tools that enhance efficiency and drive growth. The impact on our productivity has been truly remarkable.",
      name: "Alex Johnson",
      title: "CTO, TechGrowth Inc.",
      textColor: "text-black",
      nameColor: "text-black",
      titleColor: "text-gray-500",
    },
    {
      heading: "Unmatched Customer Support and Service Excellence",
      text: "The exceptional customer support and service quality we received were pivotal in seamlessly integrating the software solutions into our operations. Their team went above and beyond to ensure our success.",
      name: "Sarah Williams",
      title: "Director of Operations, NextGen Solutions",
      textColor: "text-black",
      nameColor: "text-black",
      titleColor: "text-gray-500",
    },
    {
      heading: "Driving Innovation through Custom Software Development",
      text: "By focusing on custom software development, we've been able to address unique business challenges and unlock new opportunities for innovation. Their solutions have propelled our business forward.",
      name: "Michael Brown",
      title: "CEO, Innovatech Systems",
      textColor: "text-black",
      nameColor: "text-black",
      titleColor: "text-gray-500",
    },
    {
      heading: "Empowering Teams with Advanced Software Tools",
      text: "The advanced software tools provided have empowered our teams to achieve higher productivity and better collaboration across departments. It's been a game-changer for our organization.",
      name: "Emily Davis",
      title: "Project Manager, EliteCorp",
      textColor: "text-gray-950",
      nameColor: "text-gray-600",
      titleColor: "text-gray-500",
    },
    {
      heading: "Securing Business Success with Robust Software Solutions",
      text: "Robust software solutions have been crucial in securing our business success, ensuring data protection and operational efficiency. We've seen a significant improvement in our processes and security.",
      name: "James Wilson",
      title: "IT Director, SecureFuture Ltd.",
      textColor: "text-gray-600",
      nameColor: "text-black",
      titleColor: "text-gray-400",
    },
  ];

  return (
    <Swiper
      className="max-xl:mt-0 mb-32 mt-32"
      style={{ paddingBottom: "5em", zIndex: "0" }}
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={6}
      loop={true}
      breakpoints={{
        300: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1,
        },
      }}
      speed={5000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        waitForTransition: true,
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="px-24 max-xl:px-3">
          <div className="bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2023/11/bg-shape-3-1.svg')] bg-cover bg-top darkbg rounded-lg py-20 px-40 max-xl:px-20">
            <h1
              className={`text-4xl font-bold max-xl:text-3xl ${slide.textColor}`}
            >
              {slide.heading}
            </h1>
            <p className={`text-2xl mt-5 max-xl:text-xl ${slide.textColor}`}>
              {slide.text}
            </p>
            <div className="flex gap-3 mt-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={50}
                viewBox="0 0 448 512"
              >
                <path
                  fill="#ffffff"
                  d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
                />
              </svg>
              <div className="flex-col">
                <p className={`font-semibold ${slide.nameColor}`}>
                  {slide.name}
                </p>
                <p className={slide.titleColor}>{slide.title}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
