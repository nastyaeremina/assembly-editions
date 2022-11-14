import Image from "next/image";
import Slider from "react-slick";
import { useMemo } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slide, SliderWrap, WrapImage, SliderInner, SliderSub } from "./styles";

const ExtensionSlider = ({ data }) => {
  console.log("data", data);
  
    return data?.map((item, index) => {
      return (
        <Slide key={`slideview_index_${index}`}>
          <WrapImage>
            <Image
              src="/images/slider.png"
              alt="arrow-icon"
              width={350}
              height={350}
            />
          </WrapImage>
        </Slide>
      );
    });
   

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
          <SliderInner>
            <SliderSub>
              <Image
                src="/images/Favicon.svg"
                alt="red-icon"
                width={35}
                height={35}
                layout={"fixed"}
              />
              <h4>Calendly</h4>
            </SliderSub>
            <p>
              Calendly is your scheduling automation platform for eliminating
              the hassle of back...
            </p>
          </SliderInner>
          <SliderInner>
            <SliderSub>
              <Image
                src="/images/jotfrom.svg"
                alt="red-icon"
                width={35}
                height={35}
                layout={"fixed"}
              />
              <h4>Jotform</h4>
            </SliderSub>
            <p>
              Improve your workflow with powerful online forms designed to meet
              your every need.
            </p>
          </SliderInner>
          <SliderInner>
            <SliderSub>
              <Image
                src="/images/airtable.svg"
                alt="red-icon"
                width={35}
                height={35}
                layout={"fixed"}
              />
              <h4>Airtable</h4>
            </SliderSub>
            <p>
              Airtable is a low-code platform for building collaborative apps.
              Customize your workflow, collab...
            </p>
          </SliderInner>
          <SliderInner>
            <SliderSub>
              <Image
                src="/images/Favicon.svg"
                alt="red-icon"
                width={35}
                height={35}
                layout={"fixed"}
              />
              <h4>Calendly</h4>
            </SliderSub>
            <p>
              Calendly is your scheduling automation platform for eliminating
              the hassle of back...
            </p>
          </SliderInner>
          <SliderInner>
            <SliderSub>
              <Image
                src="/images/jotfrom.svg"
                alt="red-icon"
                width={35}
                height={35}
                layout={"fixed"}
              />
              <h4>Jotform</h4>
            </SliderSub>
            <p>
              Improve your workflow with powerful online forms designed to meet
              your every need.
            </p>
          </SliderInner>
          <SliderInner>
            <SliderSub>
              <Image
                src="/images/airtable.svg"
                alt="red-icon"
                width={35}
                height={35}
                layout={"fixed"}
              />
              <h4>Airtable</h4>
            </SliderSub>
            <p>
              Airtable is a low-code platform for building collaborative apps.
              Customize your workflow, collab...
            </p>
          </SliderInner>
        </Slider>
      </SliderWrap>
    </>
  );
};

export default ExtensionSlider;
