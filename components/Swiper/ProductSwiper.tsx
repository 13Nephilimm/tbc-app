"use client";

import React from "react";
import "./ProductSwiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const ProductSwiper = (images: any) => {
  const imagesArray: Array<string> = Object.values(images);
  const singleImageLink = imagesArray[0];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="single-game-swiper"
    >
      <SwiperSlide className="slide">
        <Image
          src={singleImageLink[0]}
          alt="product"
          width={960}
          height={540}
        />
      </SwiperSlide>
      <SwiperSlide className="slide">
        <Image
          src={singleImageLink[1]}
          alt="product"
          width={960}
          height={540}
        />
      </SwiperSlide>
      <SwiperSlide className="slide">
        <Image
          src={singleImageLink[2]}
          alt="product"
          width={960}
          height={540}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ProductSwiper;
