"use client"

import Testimonial from "@/components/Testimonial/Testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

export default function Testimonials() {
  return (
    <div className="ps-3 my-[50px]">
      <div className="mb-[10px]">
        <div className="inline-flex justify-center align-middle me-3">
        <span className="inline-block w-[22px] h-[2px] bg-[#F63D68]"></span>
        </div>
        <span className="text-[18px] font-bold text-[#F63D68]">Testimonials</span>
      </div>
      <div className="mb-[30px]">
        <span className="text-[30px] font-bold">Our Customers’ Testimonies</span>
      </div>
      <Swiper
        spaceBetween={20} // General spacing
        breakpoints={{
          // For mobile screens
          320: {
            slidesPerView: 1, // 1 slide on very small devices
            spaceBetween: 10,
          },
          // For tablets
          640: {
            slidesPerView: 2, // 2 slides on medium devices
            spaceBetween: 15,
          },
          // For desktops
          1024: {
            slidesPerView: 3, // 3 slides on larger screens
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
