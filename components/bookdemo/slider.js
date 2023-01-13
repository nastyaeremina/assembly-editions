import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMemo } from "react";
import { Pagination } from "swiper";
import { SliderSection, ImageText, TextWrapper } from "./styles";
import "swiper/css";
import "swiper/css/pagination";
export default function Slider() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const slide = [1, 2, 3];
  const slideRender = useMemo(() => {
    return slide?.map((item, index) => {
      return (
        <SwiperSlide
          className="swiperslide ImageSection"
          key={`sliderItem_index_${index}`}
        >
          <Image
            src="/images/demoimage.png"
            width={900}
            height={900}
            alt="msg-icon"
          />
          <ImageText>
            <h3>
              “Here’s a quote from someone, its not a long quote but it does fit
              on 3 lines”
            </h3>
            <TextWrapper>
              <p>John Doe</p>
              <p>Founder at ABC Agency</p>
            </TextWrapper>
          </ImageText>
        </SwiperSlide>
      );
    });
  }, [slide]);

  return (
    <>
      <SliderSection className="className">
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
        >
          {slideRender}
        </Swiper>
      </SliderSection>
    </>
  );
}
