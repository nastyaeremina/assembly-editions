import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import { useHotkeys } from 'react-hotkeys-hook';
import ZoomImageSlider from '../../components/zoomImage/zoomImageslider';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import SliderButton from '../businessSlider/SliderButton';
import { ArrowIcon, ImageSection, ImageSlider } from './styles';

function AppImageSection({ imageList }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const onClick = useCallback(
    (imageIndex) => {
      if (imageIndex) setCurrentImageIndex(Number(imageIndex));
      setIsOpen(!isOpen);
    },
    [isOpen]
  );
  useHotkeys('esc', async (event) => {
    event.preventDefault();
    setIsOpen(false);
  });

  const onCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === imageList.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? imageList.length - 1 : prevIndex - 1));
  };

  return (
    <>
      <ImageSlider>
        <ImageSection isHide={imageList?.length <= 1}>
          <ArrowIcon className='left-arrow' onClick={goToPreviousImage}>
            <SVGComponent name='left-arrow-icon' width='16' height='16' viewBox='16' />
          </ArrowIcon>
          <Image
            src={imageList[currentImageIndex]?.url}
            alt='image'
            width={614}
            height={344}
            className='big-image'
            onClick={() => onClick(currentImageIndex)}
            layout='responsive'
          />
          <ArrowIcon className='right-arrow' onClick={goToNextImage}>
            <SVGComponent name='right-arrow-icon' width='16' height='16' viewBox='16' />
          </ArrowIcon>
        </ImageSection>
        {imageList?.length > 1 && (
          <SliderButton
            count={imageList?.length}
            currentIndex={currentImageIndex}
            setCurrentIndex={(index) => setCurrentImageIndex(index)}
          />
        )}
        {isOpen ? (
          <>
            <ZoomImageSlider
              isSlideButtonHide={imageList?.length <= 1}
              imageUrl={imageList[currentImageIndex]?.url}
              goToNextImage={goToNextImage}
              goToPreviousImage={goToPreviousImage}
              onCloseModal={onCloseModal}
            />
          </>
        ) : null}
      </ImageSlider>
    </>
  );
}

export default AppImageSection;
