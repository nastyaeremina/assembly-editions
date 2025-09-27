import React, { useCallback, useMemo, useState, useRef } from 'react';
import Image from 'next/image';
import { useHotkeys } from 'react-hotkeys-hook';
import ZoomImageSlider from '../../components/zoomImage/zoomImageslider';
import SliderButton from '../businessSlider/SliderButton';
import useMobileDevice from '../../hooks/useMobileDevice';
import { ImageSection, ImageSlider, Overlay, ResponsiveSection, SmallImage, SmallImageList } from './styles';

function AppImageSection({ imageList }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const imageRef = useRef(null);
  const isMobileDevice = useMobileDevice();
  const onClick = useCallback(
    (imageIndex) => {
      if (imageIndex !== undefined && imageIndex !== null) setCurrentImageIndex(Number(imageIndex));
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

  // Minimum distance for a swipe gesture
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    if (!isMobileDevice) return;
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    if (!isMobileDevice) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!isMobileDevice || !touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && imageList.length > 1) {
      goToNextImage();
    }
    if (isRightSwipe && imageList.length > 1) {
      goToPreviousImage();
    }
  };

  const renderImageList = useMemo(() => {
    if (!Array.isArray(imageList)) return null;
    return imageList.map((image, index) => (
      <SmallImage key={`app-image-${index}`} onClick={() => setCurrentImageIndex(index)}>
        <Image src={image?.url} alt='image' width={128} height={72} className='image' />
        <Overlay isActive={currentImageIndex === index} className='overlay' />
      </SmallImage>
    ));
  }, [imageList, currentImageIndex]);

  return (
    <>
      <ImageSlider>
        <ImageSection isHide={imageList?.length <= 1} className={imageList?.length === 1 ? 'single-image-display' : ''}>
          <Image
            ref={imageRef}
            src={imageList[currentImageIndex]?.url}
            alt='image'
            width={614}
            height={344}
            className='big-image'
            onClick={() => onClick(currentImageIndex)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            layout='responsive'
          />
          {imageList?.length > 1 && <SmallImageList>{renderImageList}</SmallImageList>}
        </ImageSection>
        {imageList?.length > 1 && (
          <ResponsiveSection>
            <SliderButton
              count={imageList?.length}
              currentIndex={currentImageIndex}
              setCurrentIndex={(index) => setCurrentImageIndex(index)}
            />
          </ResponsiveSection>
        )}
        {isOpen ? (
          <>
            <ZoomImageSlider
              isSlideButtonHide={imageList?.length <= 1}
              imageUrl={imageList[currentImageIndex]?.url}
              goToNextImage={goToNextImage}
              goToPreviousImage={goToPreviousImage}
              onCloseModal={onCloseModal}
              count={imageList?.length}
              currentIndex={currentImageIndex}
              setCurrentImageIndex={setCurrentImageIndex} // <-- Added
            />
          </>
        ) : null}
      </ImageSlider>
    </>
  );
}

export default AppImageSection;
