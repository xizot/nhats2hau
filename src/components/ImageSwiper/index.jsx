// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React from 'react';
import { EffectCoverflow, Autoplay, FreeMode } from 'swiper/modules';
import './ImageSwiper.css';
import Image2 from '../../assets/images/2.jpg';
import Image3 from '../../assets/images/3.jpg';
import Image4 from '../../assets/images/4.jpg';
import Image5 from '../../assets/images/5.jpg';
import Image6 from '../../assets/images/6.jpg';
import Image7 from '../../assets/images/7.jpg';
import Image8 from '../../assets/images/8.jpg';
import Image9 from '../../assets/images/9.jpg';
import Image10 from '../../assets/images/10.jpg';
import Image11 from '../../assets/images/11.jpg';
import Image12 from '../../assets/images/12.jpg';
import Image13 from '../../assets/images/13.jpg';
import Image14 from '../../assets/images/14.jpg';
import Image15 from '../../assets/images/15.jpg';
import Image17 from '../../assets/images/17.jpg';
import Image18 from '../../assets/images/18.jpg';
import Image19 from '../../assets/images/19.jpg';
import Image20 from '../../assets/images/20.jpg';
import Image21 from '../../assets/images/21.jpg';
import Image22 from '../../assets/images/22.jpg';
import Image23 from '../../assets/images/23.jpg';
import Image24 from '../../assets/images/24.jpg';
import Image25 from '../../assets/images/25.jpg';
import Image26 from '../../assets/images/26.jpg';
import Image27 from '../../assets/images/27.jpg';
import Image28 from '../../assets/images/28.jpg';
import Image29 from '../../assets/images/29.jpg';
import Image30 from '../../assets/images/30.jpg';
import Image31 from '../../assets/images/31.jpg';
import Image32 from '../../assets/images/32.jpg';
import Image33 from '../../assets/images/33.jpg';
import Image34 from '../../assets/images/34.jpg';
import Image35 from '../../assets/images/35.jpg';
import Image36 from '../../assets/images/36.jpg';

function ImageSwiper() {
  const slides = [
    Image34, , Image7, Image2, Image36, Image3, Image5, Image6, Image8, Image9, Image10, Image11, Image12, Image13, Image4, Image14, Image15, Image17, Image18, Image19, Image20, Image21, Image22, Image23, Image24, Image25, Image26, Image27, Image28, Image29, Image30, Image31, Image32
    , Image33, Image35]
  return (
    <div className="image-swiper">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        freeMode={true}
        slideToClickedSlide={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        initialSlide={3}
        modules={[EffectCoverflow, Autoplay, FreeMode]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-img">
              <img src={slide} alt='' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ImageSwiper