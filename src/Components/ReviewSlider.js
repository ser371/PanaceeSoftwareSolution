import React from "react";

import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ReviewSlider() {
  return (
    <>
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
        <SwiperSlide className="px-24 max-xl:px-3">
          <div className="bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2023/11/bg-shape-3-1.svg')] bg-cover bg-top darkbg rounded-lg py-20 px-40 max-xl:px-20">
            <h1 className="text-white text-4xl font-bold max-xl:text-3xl">
              Bluebase give the best service and top customer support. Really
              like to have more projects with you
            </h1>
            <p className="text-2xl text-gray-200 mt-5 max-xl:text-xl">
              One aspect that sets IT Services apart is their proactive approach
              to security. In today's digital landscape, protecting our
              sinsitive data is of utmost importance.
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
              <div className="flex-col text-white">
                <p className="font-semibold">Megan Clarke</p>
                <p className="text-gray-300">CEO, Sanlab</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-24 max-xl:px-3">
          <div className="bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2023/11/bg-shape-3-1.svg')] bg-cover bg-top darkbg rounded-lg py-20 px-40 max-xl:px-20">
            <h1 className="text-white text-4xl font-bold max-xl:text-3xl">
              Bluebase give the best service and top customer support. Really
              like to have more projects with you
            </h1>
            <p className="text-2xl text-gray-200 mt-5 max-xl:text-xl">
              One aspect that sets IT Services apart is their proactive approach
              to security. In today's digital landscape, protecting our
              sinsitive data is of utmost importance.
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
              <div className="flex-col text-white">
                <p className="font-semibold">Megan Clarke</p>
                <p className="text-gray-300">CEO, Sanlab</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-24 max-xl:px-3">
          <div className="bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2023/11/bg-shape-3-1.svg')] bg-cover bg-top darkbg rounded-lg py-20 px-40 max-xl:px-20">
            <h1 className="text-white text-4xl font-bold max-xl:text-3xl">
              Bluebase give the best service and top customer support. Really
              like to have more projects with you
            </h1>
            <p className="text-2xl text-gray-200 mt-5 max-xl:text-xl">
              One aspect that sets IT Services apart is their proactive approach
              to security. In today's digital landscape, protecting our
              sinsitive data is of utmost importance.
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
              <div className="flex-col text-white">
                <p className="font-semibold">Megan Clarke</p>
                <p className="text-gray-300">CEO, Sanlab</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-24 max-xl:px-3">
          <div className="bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2023/11/bg-shape-3-1.svg')] bg-cover bg-top darkbg rounded-lg py-20 px-40 max-xl:px-20">
            <h1 className="text-white text-4xl font-bold max-xl:text-3xl">
              Bluebase give the best service and top customer support. Really
              like to have more projects with you
            </h1>
            <p className="text-2xl text-gray-200 mt-5 max-xl:text-xl">
              One aspect that sets IT Services apart is their proactive approach
              to security. In today's digital landscape, protecting our
              sinsitive data is of utmost importance.
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
              <div className="flex-col text-white">
                <p className="font-semibold">Megan Clarke</p>
                <p className="text-gray-300">CEO, Sanlab</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-24 max-xl:px-3">
          <div className="bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2023/11/bg-shape-3-1.svg')] bg-cover bg-top darkbg rounded-lg py-20 px-40 max-xl:px-20">
            <h1 className="text-white text-4xl font-bold max-xl:text-3xl">
              Bluebase give the best service and top customer support. Really
              like to have more projects with you
            </h1>
            <p className="text-2xl text-gray-200 mt-5 max-xl:text-xl">
              One aspect that sets IT Services apart is their proactive approach
              to security. In today's digital landscape, protecting our
              sinsitive data is of utmost importance.
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
              <div className="flex-col text-white">
                <p className="font-semibold">Megan Clarke</p>
                <p className="text-gray-300">CEO, Sanlab</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide ><img className=' h-full' style={{borderRadius:"15px"}}  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-4.png" alt="" /></SwiperSlide>
                <SwiperSlide ><img className=' h-full' style={{borderRadius:"15px"}}  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-5-new.png" alt="" /></SwiperSlide>
                <SwiperSlide ><img className=' h-full' style={{ borderRadius:"15px"}}  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-1.png" alt="" /></SwiperSlide>
                <SwiperSlide ><img className=' h-full' style={{borderRadius:"15px"}}  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-6-new.png" alt="" /></SwiperSlide> */}
      </Swiper>
    </>
  );
}
