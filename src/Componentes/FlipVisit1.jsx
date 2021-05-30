import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-flip/effect-flip.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "../App.css";
// import Swiper core and required modules
import SwiperCore, {
  EffectFlip,Pagination,Navigation
} from 'swiper/core';
// install Swiper modules
SwiperCore.use([EffectFlip,Pagination,Navigation]);


export default function FlipVisit1() {
  
  
  
  return (
    <>
    <Swiper effect={'flip'} grabCursor={true} pagination={true} navigation={true} className="mySwiper">
  <SwiperSlide><img src="../hpeug9.jpg" /></SwiperSlide><SwiperSlide><img src="../hpeug91.jpg" /></SwiperSlide><SwiperSlide><img src="../hpeug92.jpg" /></SwiperSlide><SwiperSlide><img src="../hpeug93.jpg" /></SwiperSlide>
  </Swiper>
    </>
  )
}