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
    dots: false,
    infinite: true,
    centerMode: false,
    speed: 500,
    slidesToScroll: 2,
    variableWidth: true,
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
          slidesToShow: 1,
          slidesToScroll: 1,
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
              <Image
                src="/images/slider1.png"
                alt="red-icon"
                width={350}
                height={350}
                layout={"fixed"}
              />
              <h4>Growth Agency</h4>
              <p className="hide">{`“We went from idea to launch in 2 weeks and spent < 5% of what an engineering team would have cost.”`}</p>
            </WrapImage>
            <RightBorder className="hide"> </RightBorder>
          </WrapSlide>
          <WrapSlide className="mydiv">
            <LeftBorder className="hide"></LeftBorder>
            <WrapImage>
              <Image
                src="/images/slide2.png"
                alt="silde-icon"
                width={350}
                height={350}
              />
              <h4>Virtual CFO</h4>
              <p className="hide">{`“We went from idea to launch in 2 weeks and spent < 5% of what an engineering team would have cost.”`}</p>
            </WrapImage>
            <RightBorder className="hide"> </RightBorder>
          </WrapSlide>
          <WrapSlide className="mydiv">
            <LeftBorder className="hide"></LeftBorder>
            <WrapImage>
              <Image
                src="/images/slide3.png"
                alt="silde-icon"
                width={350}
                height={350}
              />
              <h4>Professional Services</h4>
              <p className="hide">{`“We went from idea to launch in 2 weeks and spent < 5% of what an engineering team would have cost.”`}</p>
            </WrapImage>
            <RightBorder className="hide"> </RightBorder>
          </WrapSlide>
          <WrapSlide className="mydiv">
            <LeftBorder className="hide"></LeftBorder>
            <WrapImage>
              <Image
                src="/images/slide3.png"
                alt="silde-icon"
                width={350}
                height={350}
              />
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
