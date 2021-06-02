import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-cube/effect-cube.min.css"
import "swiper/components/pagination/pagination.min.css"
import "../App.css";
// import Swiper core and required modules
import SwiperCore, {
  EffectCube,Pagination
} from 'swiper/core';
// install Swiper modules
SwiperCore.use([EffectCube,Pagination]);


export default function Cubo1() {
  
  return (
    <>
    <Swiper effect={'cube'} grabCursor={true} cubeEffect={{
  "shadow": true,
  "slideShadows": true,
  "shadowOffset": 20,
  "shadowScale": 0.94
}} pagination={true} loop={true} className="mySwiper">
  <SwiperSlide><img src="../hpeug1.jpg" /></SwiperSlide><SwiperSlide><img src="../hpeug2.jpg" /></SwiperSlide><SwiperSlide><img src="../hpeug3.jpg" /></SwiperSlide><SwiperSlide><img src="../hpeug4.jpg" /></SwiperSlide>
  </Swiper>
    </>
  )
}