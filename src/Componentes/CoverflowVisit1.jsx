import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"
import "../App.css";
// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,Pagination
} from 'swiper/core';
// install Swiper modules
SwiperCore.use([EffectCoverflow,Pagination]);


export default function Flowcover1() {
    return (
    <>
    <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
  "rotate": 50,
  "stretch": 0,
  "depth": 100,
  "modifier": 1,
  "slideShadows": true
}} pagination={true} className="mySwiper">
  <SwiperSlide><img src="../hpeug5.jpg" /></SwiperSlide><SwiperSlide><img src="../hpeug6.jpg" /></SwiperSlide><SwiperSlide><img src="../hpeug7.jpg" /></SwiperSlide><SwiperSlide><img src="../hpeug8.jpg" /></SwiperSlide>
  </Swiper>
    </>
  )
}