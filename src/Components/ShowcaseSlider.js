import React from "react";

import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ShowcaseSlider() {
  return (
    <>
      {/* First Slider - Right to Left */}
      <Swiper
        className="mt-10 max-xl:mt-0"
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
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        speed={1700}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          waitForTransition: true,
          reverseDirection: false,
        }}
      >
        <SwiperSlide>
          <img
            className="h-full"
            style={{
              borderRadius: "15px",
              width: "250px",
              height: "160px",
              objectFit: "cover",
            }}
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000"
            alt="Dashboard Analytics Interface"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full"
            style={{
              borderRadius: "15px",
              width: "250px",
              height: "160px",
              objectFit: "cover",
            }}
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000"
            alt="Developers Working Together"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full"
            style={{
              borderRadius: "15px",
              width: "250px",
              height: "160px",
              objectFit: "cover",
            }}
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000"
            alt="Cloud Services Infrastructure"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full"
            style={{
              borderRadius: "15px",
              width: "250px",
              height: "160px",
              objectFit: "cover",
            }}
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000"
            alt="UI/UX Mockups"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full"
            style={{
              borderRadius: "15px",
              width: "250px",
              height: "160px",
              objectFit: "cover",
            }}
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000"
            alt="Multi-device Display"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full"
            style={{
              borderRadius: "15px",
              width: "250px",
              height: "160px",
              objectFit: "cover",
            }}
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000"
            alt="Agile Planning Session"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full"
            style={{
              borderRadius: "15px",
              width: "250px",
              height: "160px",
              objectFit: "cover",
            }}
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000"
            alt="Customizable App Themes"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full"
            style={{
              borderRadius: "15px",
              width: "250px",
              height: "160px",
              objectFit: "cover",
            }}
            src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1000"
            alt="User Interaction with UI"
          />
        </SwiperSlide>
      </Swiper>

      {/* Second Slider - Left to Right */}
      <Swiper
        className="mt-10 max-xl:mt-0"
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
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        speed={1700}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          waitForTransition: true,
          reverseDirection: true,
        }}
      >
        <SwiperSlide>
          <img
            className="h-full"
            style={{
              borderRadius: "15px",
              width: "250px",
              height: "160px",
              objectFit: "cover",
            }}
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000"
            alt="Dashboard Analytics Interface"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full"
            style={{
              borderRadius: "15px",
              width: "250px",
              height: "160px",
              objectFit: "cover",
            }}
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000"
            alt="Developers Working Together"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full"
            style={{
              borderRadius: "15px",
              width: "250px",
              height: "160px",
              objectFit: "cover",
            }}
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000"
            alt="Cloud Services Infrastructure"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full"
            style={{
              borderRadius: "15px",
              width: "250px",
              height: "160px",
              objectFit: "cover",
            }}
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000"
            alt="UI/UX Mockups"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full"
            style={{
              borderRadius: "15px",
              width: "250px",
              height: "160px",
              objectFit: "cover",
            }}
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000"
            alt="Multi-device Display"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full"
            style={{
              borderRadius: "15px",
              width: "250px",
              height: "160px",
              objectFit: "cover",
            }}
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000"
            alt="Agile Planning Session"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full"
            style={{
              borderRadius: "15px",
              width: "250px",
              height: "160px",
              objectFit: "cover",
            }}
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000"
            alt="Customizable App Themes"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full"
            style={{
              borderRadius: "15px",
              width: "250px",
              height: "160px",
              objectFit: "cover",
            }}
            src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1000"
            alt="User Interaction with UI"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
