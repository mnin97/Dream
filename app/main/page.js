"use client";

import {
  BannerImg,
  MainWrapper,
  StyleBook,
  StyleBookWrapper,
} from "./main.style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function MainPage() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <>
      <MainWrapper>
        <Slider {...settings}>
          <BannerImg src="/shose.png"></BannerImg>
          <BannerImg src="/hat.png"></BannerImg>
          <BannerImg src="/head.png"></BannerImg>
        </Slider>
        <StyleBookWrapper>
          {/* 이미지 나오는 곳 */}
          <StyleBook>11</StyleBook>
          <StyleBook>1</StyleBook>
          <StyleBook>1</StyleBook>
          <StyleBook>1</StyleBook>
        </StyleBookWrapper>
      </MainWrapper>
    </>
  );
}
