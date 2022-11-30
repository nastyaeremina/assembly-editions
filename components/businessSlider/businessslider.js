import Image from "next/image";
import Slider from "react-slick";
import { useMemo } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Slide,
  SliderWrap,
  WrapImage,
  LeftBorder,
  RightBorder,
  WrapSlide,
  SlideImg,
} from "./styles";

const BusinessSlider = ({ data }) => {
  console.log("data", data);
  // const slideView = useMemo(() => {
  //   return data?.map((item, index) => {
  //     return (
  //       <Slide key={`slideview_index_${index}`}>
  //         <WrapImage>
  //           <Image
  //             src="/images/slider1.png"
  //             alt="arrow-icon"
  //             width={350}
  //             height={350}
  //           />
  //         </WrapImage>
  //       </Slide>
  //     );
  //   });
  // }, [data]);

  var settings = {
    mobileFirst: true,
    centerMode: false,
    adaptiveHeight: true,
    slidesToScroll: 2,
    variableWidth: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    speed: 9000,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          mobileFirst: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          centerMode: true,
          variableWidth: true,
          infinite: false,
          autoplay: false,
          autoplaySpeed: 0,
          arrows: false,
          speed: 0,
        },
      },
    ],
  };
  return (
    <>
      <SliderWrap>
        <Slider {...settings}>
          <WrapSlide className="mydiv">
            <LeftBorder className="hide"></LeftBorder>
            <WrapImage>
              <SlideImg>
                <Image
                  src="/images/slider1.png"
                  alt="red-icon"
                  className="zoom"
                  width={350}
                  height={350}
                />
              </SlideImg>
              <h4>Growth Agency</h4>
              <p className="hide">{`“We went from idea to launch in 2 weeks and spent < 5% of what an engineering team would have cost.”`}</p>
            </WrapImage>
            <RightBorder className="hide"> </RightBorder>
          </WrapSlide>
          <WrapSlide className="mydiv">
            <LeftBorder className="hide"></LeftBorder>
            <WrapImage>
              <SlideImg>
                <Image
                  src="/images/slide2.png"
                  alt="silde-icon"
                  className="zoom"
                  width={350}
                  height={350}
                />
              </SlideImg>
              <h4>Virtual CFO</h4>
              <p className="hide">{`“We went from idea to launch in 2 weeks and spent < 5% of what an engineering team would have cost.”`}</p>
            </WrapImage>
            <RightBorder className="hide"> </RightBorder>
          </WrapSlide>
          <WrapSlide className="mydiv">
            <LeftBorder className="hide"></LeftBorder>
            <WrapImage>
              <SlideImg>
                <Image
                  src="/images/slide3.png"
                  alt="silde-icon"
                  className="zoom"
                  width={350}
                  height={350}
                />
              </SlideImg>
              <h4>Professional Services</h4>
              <p className="hide">{`“We went from idea to launch in 2 weeks and spent < 5% of what an engineering team would have cost.”`}</p>
            </WrapImage>
            <RightBorder className="hide"> </RightBorder>
          </WrapSlide>
          <WrapSlide className="mydiv">
            <LeftBorder className="hide"></LeftBorder>
            <WrapImage>
              <SlideImg>
                <Image
                  src="/images/slide3.png"
                  alt="silde-icon"
                  className="zoom"
                  width={350}
                  height={350}
                />
              </SlideImg>
              <h4>Event planning startup</h4>
              <p className="hide">{`“We went from idea to launch in 2 weeks and spent < 5% of what an engineering team would have cost.”`}</p>
            </WrapImage>
            <RightBorder className="hide"> </RightBorder>
          </WrapSlide>
        </Slider>
      </SliderWrap>
    </>
  );
};

export default BusinessSlider;
