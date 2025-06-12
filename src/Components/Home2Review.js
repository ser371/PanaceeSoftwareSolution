import React from "react";

import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home2Review(props) {
  return (
    <>
      <Swiper
        className=""
        style={{ paddingBottom: "1em",paddingTop: "1em", zIndex: "0" }}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={6}
        loop={true}
        breakpoints={{
          300: {
            slidesPerView: 1.25,
          },
          768: {
            slidesPerView: 1.75,
          },
          1024: {
            slidesPerView: 2.25,
          },
        }}
        speed={props.speed}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
      >
        <SwiperSlide >
          <div className="flex flex-col bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2023/11/bg-shape-3-1.svg')] bg-cover bg-right justify-between darkbg rounded-lg p-20 max-xl:p-3"  >
            <div>
            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/upwork-2.svg" className="mb-3" style={{width:"100px"}}/>
            <h1 className="text-white text-2xl mt-4 font-bold max-xl:text-lg mb-4">
            Slack improve my business to futuristic next level!
            </h1>
            <p className="text-xl text-gray-200  max-xl:text-lg">
            One aspect that sets IT Services apart is their proactive approach to security. In today's digital landscape, protecting our sensitive data
            </p>
            </div>
            <div className="flex gap-3 mt-5">
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
                <p className="font-semibold">Serana Belluci</p>
                <p className="text-gray-300">Product Designer</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="flex flex-col bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2023/11/bg-shape-3-1.svg')] bg-cover bg-right justify-between darkbg rounded-lg p-20 max-xl:p-3"  >
            <div>
            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/webflow-3.svg" className="mb-3" style={{width:"100px"}}/>
            <h1 className="text-white text-2xl mt-4 font-bold max-xl:text-lg mb-4">
            Slack improve my business to futuristic next level!
            </h1>
            <p className="text-xl text-gray-200  max-xl:text-lg">
            One aspect that sets IT Services apart is their proactive approach to security. In today's digital landscape, protecting our sensitive data
            </p>
            </div>
            <div className="flex gap-3 mt-5">
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
                <p className="font-semibold">Serana Belluci</p>
                <p className="text-gray-300">Product Designer</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="flex flex-col bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2023/11/bg-shape-3-1.svg')] bg-cover bg-right justify-between darkbg rounded-lg p-20 max-xl:p-3"  >
            <div>
            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/upwork-2.svg" className="mb-3" style={{width:"100px"}}/>
            <h1 className="text-white text-2xl mt-4 font-bold max-xl:text-lg mb-4">
            Slack improve my business to futuristic next level!
            </h1>
            <p className="text-xl text-gray-200  max-xl:text-lg">
            One aspect that sets IT Services apart is their proactive approach to security. In today's digital landscape, protecting our sensitive data
            </p>
            </div>
            <div className="flex gap-3 mt-5">
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
                <p className="font-semibold">Serana Belluci</p>
                <p className="text-gray-300">Product Designer</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="flex flex-col bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2023/11/bg-shape-3-1.svg')] bg-cover bg-right justify-between darkbg rounded-lg p-20 max-xl:p-3"  >
            <div>
            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/webflow-3.svg" className="mb-3" style={{width:"100px"}}/>
            <h1 className="text-white text-2xl mt-4 font-bold max-xl:text-lg mb-4">
            Slack improve my business to futuristic next level!
            </h1>
            <p className="text-xl text-gray-200  max-xl:text-lg">
            One aspect that sets IT Services apart is their proactive approach to security. In today's digital landscape, protecting our sensitive data
            </p>
            </div>
            <div className="flex gap-3 mt-5">
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
                <p className="font-semibold">Serana Belluci</p>
                <p className="text-gray-300">Product Designer</p>
              </div>
            </div>
          </div>
        </SwiperSlide>     
        </Swiper>
    </>
  );
}
