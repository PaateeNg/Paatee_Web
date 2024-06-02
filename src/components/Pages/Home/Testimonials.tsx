import Testimonial from "@/components/Testimonial/Testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

export default function Testimonials() {
  return (
    <div className="ps-[51px] my-[50px]">
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
        spaceBetween={200}
        slidesPerView={3}
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
